import React from 'react';
import PropTypes from 'prop-types';

import ImageItem from './ImageItem';

import { ListContainer } from '../../styled/image-list';

const ImageList = ({ images }) => {
  return (
    <ListContainer>
      {images.map((image) => (
        <ImageItem image={image} key={image.id} />
      ))}
    </ListContainer>
  );
};

ImageList.propTypes = {
  images: PropTypes.array,
};

export default ImageList;
