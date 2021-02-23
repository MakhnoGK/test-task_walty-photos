import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageItemContainer,
  ImageInfo,
  Image,
  TagLink,
} from '../../styled/image-list';
import { IImage } from '../../interfaces/IImage';
import { GridListTile, GridListTileBar } from '@material-ui/core';

const ImageItem: React.FC<{ image: IImage; style?: any }> = ({
  image: { tags, type, webformatURL },
  style,
}) => {
  const displayTags = (input: string) => {
    return input.split(', ').map((tag, index) => (
      <TagLink key={index} href={`/${tag}`}>
        {tag}
      </TagLink>
    ));
  };

  return (
    <GridListTile cols={1} style={{...style }}>
      <img src={webformatURL} alt={tags} style={{  }} />
      <GridListTileBar subtitle={displayTags(tags)} />
    </GridListTile>
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
