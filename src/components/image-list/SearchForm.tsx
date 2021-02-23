import React, { Dispatch, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChipInput from 'material-ui-chip-input';

import { useTags } from '../../hooks/useTags';
import { fetchImages, ImageActionTypes } from '../../redux/ducks/images';
import 'react-bootstrap-tagsinput/dist/index.css';

const SearchForm: React.FC<{
  onFetchImages: (term: string) => void;
}> = ({ onFetchImages }) => {
  const [tags, setTags] = useTags([]);

  const handleAddTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleDeleteTag = (tag: string) => {
    setTags(tags.filter((searchTag) => tag !== searchTag));
  };

  useEffect(() => {
    const term = tags.join('+');
    onFetchImages(term);
  }, [tags, onFetchImages]);

  return (
    <div className="input-group">
      <ChipInput
        value={tags}
        onAdd={handleAddTag}
        onDelete={handleDeleteTag}
        newChipKeys={[' ', 'Enter']}
        placeholder="photo flowers red"
        label="Enter tags"
        fullWidth
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
