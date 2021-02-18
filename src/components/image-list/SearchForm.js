import React from 'react';
import PropTypes from 'prop-types';
import { InputTags } from 'react-bootstrap-tagsinput';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { useTags } from '../../hooks/useTags';
import { fetchImages } from '../../ducks/images';
import 'react-bootstrap-tagsinput/dist/index.css';

const SearchForm = ({ onFetchImages }) => {
  const [tags, setTags] = useTags([]);

  const handleSearch = () => {
    const term = tags.map((tag) => tag.replaceAll(/\W+/g, '')).join('+');
    onFetchImages(term);
  };

  return (
    <div className="input-group">
      <InputTags
        values={tags}
        onTags={({ values }) => setTags(values)}
        elementClassName="text-light bg-dark"
        placeholder="photo yellow flower"
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

SearchForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onSearch: PropTypes.func,
  onTags: PropTypes.func,
};

const dispatchMap = (dispatch) => ({
  onFetchImages: (term) => dispatch(fetchImages(term)),
});

export default connect(null, dispatchMap)(SearchForm);
