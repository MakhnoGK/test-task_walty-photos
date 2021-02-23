import React from 'react';
import PropTypes from 'prop-types';
import { GridListTile, GridListTileBar, Chip } from '@material-ui/core';

import { IImage } from '../../interfaces/IImage';

import { ShadowedTile } from '../../styled/image-list';

const ImageItem: React.FC<{ image: IImage; style?: any }> = ({
  image: { tags, type, webformatURL },
  style,
}) => {
  const displayTags = (input: string) => {
    return input
      .split(', ')
      .map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          size="small"
          component="a"
          href={`/${tag}`}
          clickable
          style={{ marginRight: '5px' }}
        />
      ));
  };

  return (
    <ShadowedTile cols={1} style={{ ...style }}>
      <img src={webformatURL} alt={tags} style={{ backgroundColor: 'white' }} />
      <GridListTileBar subtitle={displayTags(tags)} />
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
