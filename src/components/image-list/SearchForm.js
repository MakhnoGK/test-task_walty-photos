import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputTags } from 'react-bootstrap-tagsinput';
import { connect } from 'react-redux';

import { useTags } from '../../hooks/useTags';
import { fetchImages } from '../../redux/ducks/images';
import 'react-bootstrap-tagsinput/dist/index.css';

const SearchForm = ({ onFetchImages }) => {
  const [tags, setTags] = useTags([]);

  useEffect(() => {
    const term = tags.map((tag) => tag.replaceAll(/\W+/g, '')).join('+');
    onFetchImages(term);
  }, [tags, onFetchImages]);

  return (
    <div className="input-group">
      <InputTags
        values={tags}
        onTags={({ values }) => setTags(values)}
        elementClassName="text-light bg-dark"
        placeholder="photo yellow flower"
      />
    </div>
  );
};

SearchForm.propTypes = {
  onFetchImages: PropTypes.func,
};

const dispatchMap = (dispatch) => ({
  onFetchImages: (term) => dispatch(fetchImages(term)),
});

export default connect(null, dispatchMap)(SearchForm);
