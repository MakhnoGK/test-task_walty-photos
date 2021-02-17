import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { InputTags } from 'react-bootstrap-tagsinput';
import 'react-bootstrap-tagsinput/dist/index.css';

const SearchForm = ({ onSearch, onTags, tags }) => {
  const handleSearch = (e) => {
    onSearch(tags);
  };

  return (
    <div className="input-group">
      <InputTags
        values={tags}
        onTags={onTags}
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

export default SearchForm;
