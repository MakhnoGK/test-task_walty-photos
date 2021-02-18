import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const useTags = (initialValue: string[]) => {
  const [tags, setTags] = useState(() => initialValue);
  const params = useParams<{tags: string}>();
  const history = useHistory();

  useEffect(() => {
    if (params && params.tags) {
      setTags(params.tags.split('+'));
    }
  }, []);

  useEffect(() => {
    if (tags) {
      const tagsUrl = `/${tags.join('+')}`;
      history.push(tagsUrl);
    }
  }, [tags, history]);

  return [tags, setTags] as const;
};
