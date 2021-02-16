import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const Tag = styled.a`
  display: inline-block;
  padding: 3px 5px;
  background: #f0f0f0;
  margin-right: 10px;
`;

const ImageItem = (props) => {
  const { type, tags, webformatURL, largeImageURL } = props.image;

  // @TODO: link to results route
  const convertTagStringToLinks = (tags) => {
    return tags.split(', ').map((tag) => {
      const url = `/${tag}`;
      
      return <Tag href={url}>{tag}</Tag>;
    });
  };

  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="my-2">
        <a href={largeImageURL} target="_blank" rel="noreferrer">
          <Card.Img
            src={webformatURL}
            style={{
              objectFit: 'cover',
              display: 'block',
              maxHeight: '300px',
              heihgt: '100%',
            }}
          />
        </a>
        <Card.Body>
          <p>{type}</p>
          <p>{convertTagStringToLinks(tags)}</p>
        </Card.Body>
      </Card>
    </Col>
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
