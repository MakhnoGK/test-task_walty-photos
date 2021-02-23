import React from 'react';
import PropTypes from 'prop-types';

import ImageItem from './ImageItem';

import { IImage } from '../../interfaces/IImage';
import { GridList } from '@material-ui/core';

const ImageList: React.FC<{ images: IImage[] }> = ({ images }) => (
  <GridList cols={3} spacing={32}>
    {images.map((image) => (
      <ImageItem image={image} key={image.id} />
    ))}
  </GridList>
);

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageList;
