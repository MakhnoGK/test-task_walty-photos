import React, { Dispatch, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputTags } from 'react-bootstrap-tagsinput';
import { connect } from 'react-redux';

import { useTags } from '../../hooks/useTags';
import { fetchImages, ImageActionTypes } from '../../ducks/images';
import 'react-bootstrap-tagsinput/dist/index.css';

const SearchForm: React.FC<{
  onFetchImages: (term: string) => void;
}> = ({ onFetchImages }) => {
  const [tags, setTags] = useTags([]);

  useEffect(() => {
    const term = tags.join('+');
    onFetchImages(term);
  }, [tags, onFetchImages]);

  return (
    <div className="input-group">
      <InputTags
        values={tags}
        onTags={({ values }) => setTags(values)}
        elementClassName="text-light bg-dark"
        placeholder="photo, yellow, flower"
      />
    </div>
  );
};

SearchForm.propTypes = {
  onFetchImages: PropTypes.func.isRequired,
};

const dispatchMap = (
  dispatch: Dispatch<{ type: ImageActionTypes; payload: string }>
) => ({
  onFetchImages: (term: string) => dispatch(fetchImages(term)),
});

export default connect(null, dispatchMap)(SearchForm);
