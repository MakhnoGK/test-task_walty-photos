import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageItemContainer,
  ImageInfo,
  Image,
  TagLink,
} from '../../styled/image-list';

const ImageItem = ({ type, tags, webformatURL }) => {
  const displayTags = (input) => {
    return input.split(', ').map((tag, index) => (
      <TagLink key={index} href={`/${tag}`}>
        {tag}
      </TagLink>
    ));
  };

  return (
    <ImageItemContainer>
      <ImageInfo>{type}</ImageInfo>
      <ImageInfo>{displayTags(tags)}</ImageInfo>
      <Image alt={tags} src={webformatURL} />
    </ImageItemContainer>
  );
};

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    type: PropTypes.string,
    tags: PropTypes.string,
  }),
};

export default ImageItem;
