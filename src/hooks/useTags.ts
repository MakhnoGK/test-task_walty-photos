import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const useTags = (initialValue: string[]) => {
  const [tags, setRawTags] = useState(() => initialValue);
  const params = useParams<{ tags: string }>();
  const history = useHistory();

  const setTags = (newValue: string[]) => {
    const withoutSpecialChars = newValue.map((item) =>
      item.replaceAll(/\W+/g, '')
    );
    setRawTags(withoutSpecialChars);
  };

  useEffect(() => {
    if (params && params.tags) {
      setRawTags(params.tags.split('+'));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (tags) {
      const tagsUrl = `/${tags.join('+')}`;
      history.push(tagsUrl);
    }
  }, [tags, history]);

  return [tags, setTags] as const;
};
