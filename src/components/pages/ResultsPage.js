import React, { useState, useEffect } from 'react';
import ImageItem from '../ImageItem';
import { Row } from 'react-bootstrap';
import ResultsNav from '../ResultsNav';

const ResultsPage = () => {
  const [images, setImages] = useState({
    total: 0,
    hits: [],
  });

  useEffect(() => {
    fetch(
      'https://pixabay.com/api/?q=space+fantasy&key=20295782-d190a9f4db1bc0031bd7c6307'
    )
      .then((response) => response.json())
      .then((data) => setImages((state) => ({ ...data })));
  }, []);

  return (
    <Row className="my-5">
      <ResultsNav total={images.total} />

      <Row style={{ gap: '2rem' }}>
        {images.hits.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
      </Row>
    </Row>
  );
};

ResultsPage.propTypes = {};

export default ResultsPage;
