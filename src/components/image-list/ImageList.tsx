import React from 'react';
import PropTypes from 'prop-types';
import { GridList, useMediaQuery, useTheme } from '@material-ui/core';

import ImageItem from './ImageItem';

import { IImage } from '../../interfaces/IImage';

const ImageList: React.FC<{ images: IImage[] }> = ({ images }) => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.up('sm'));
  const isScreenMedium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <GridList cols={isScreenMedium ? 4 : isScreenSmall ? 2 : 1} spacing={32}>
      {images.map((image) => (
        <ImageItem image={image} key={image.id} />
      ))}
    </GridList>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageList;
