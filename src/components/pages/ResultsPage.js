import React, { useState, useEffect } from 'react';
import ImageItem from '../ImageItem';
import { Row } from 'react-bootstrap';

const ResultsPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      'https://pixabay.com/api/?q=space+fantasy&key=20295782-d190a9f4db1bc0031bd7c6307'
    )
      .then((response) => response.json())
      .then((data) => setImages(data.hits));
  }, []);

  return (
    <Row className="my-5">
      {/* <Col> */}
        {images.map((image) => (
          <ImageItem image={image} />
        ))}
      {/* </Col> */}
    </Row>
  );
};

ResultsPage.propTypes = {};

export default ResultsPage;
