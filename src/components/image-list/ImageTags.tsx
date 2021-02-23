import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

const ImageTags: React.FC<{ tags: string }> = ({ tags }) => (
  <>
    {tags.split(', ').map((tag, index) => (
      <Chip
        key={index}
        label={tag}
        size="small"
        component="a"
        href={`/${tag}`}
        style={{ marginRight: '5px' }}
        clickable
      />
    ))}
  </>
);

ImageTags.propTypes = {
  tags: PropTypes.string.isRequired,
};

export default ImageTags;
