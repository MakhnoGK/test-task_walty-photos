import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from './ImageItem';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ImageList = (props) => {
  const { images } = props;

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
