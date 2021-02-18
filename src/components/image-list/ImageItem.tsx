import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageItemContainer,
  ImageInfo,
  Image,
  TagLink,
} from '../../styled/image-list';
import { IImage } from '../../interfaces/IImageData';

const ImageItem: React.FC<{ image: IImage }> = ({
  image: { tags, type, webformatURL },
}) => {
  const displayTags = (input: string) => {
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
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageItem;
