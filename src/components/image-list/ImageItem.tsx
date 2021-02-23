import React from 'react';
import PropTypes from 'prop-types';
import { GridListTileBar } from '@material-ui/core';

import { IImage } from '../../interfaces/IImage';

import { ShadowedTile } from '../../styled/image-list';
import { ImageTags } from '..';

const ImageItem: React.FC<{ image: IImage; style?: any }> = ({
  image: { tags, type, webformatURL },
  style,
}) => {
  return (
    <ShadowedTile cols={1} style={{ ...style }}>
      <img src={webformatURL} alt={tags} style={{ backgroundColor: 'white' }} />
      <GridListTileBar subtitle={<ImageTags tags={tags} />} />
    </ShadowedTile>
  );
};

ImageItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  style: PropTypes.shape({}),
};

export default ImageItem;
