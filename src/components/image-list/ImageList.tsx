import React from 'react';
import PropTypes from 'prop-types';

import ImageItem from './ImageItem';

import { ListContainer } from '../../styled/image-list';
import { IImage } from '../../interfaces/IImageData';

const ImageList: React.FC<{ images: IImage[] }> = ({ images }) => {
  return (
    <ListContainer>
      {images.map((image) => (
        <ImageItem image={image} key={image.id} />
      ))}
    </ListContainer>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageList;
