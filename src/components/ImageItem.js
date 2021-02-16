import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.div`
  flex: 1 1 300px;
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &::after {
    content: "";
    z-index:-2;
    position: absolute;
    width: 80%;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 5px 10px rgb(0 0 0 / 40%);  
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

const Info = styled.div`
  color: #e5e5e5;
  margin: 0.5rem;
  background: #00000088;
  padding: 5px;
`;

const TagLink = styled.a`
display:block;
  text-decoration: none;
  color: inherit;
  text-align: right;

  &:hover {
    color: currentColor;
  }
`

const ImageItem = (props) => {
  const { type, tags, webformatURL } = props.image;

  const displayTags = (input) => {
    return input.split(', ').map((tag) => <TagLink href={`/${tag}`}>{tag}</TagLink>);
  };

  return (
    <ImageContainer>
      <Info>{type}</Info>
      <Info>{displayTags(tags)}</Info>
      <Image alt={tags} src={webformatURL} />
    </ImageContainer>
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
