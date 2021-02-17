import React, { useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageList from './ImageList';
import SearchForm from './SearchForm';
import { useTags } from '../hooks/useTags';

const API_KEY = '20295782-d190a9f4db1bc0031bd7c6307';

const App = () => {
  const [tags, setTags] = useTags([]);
  const [loading, setLoading] = useState(false);
  const [imagesData, setImagesData] = useState({
    images: [],
    total: 0,
    totalHits: 0,
  });

  const fetchImageData = async () => {
    const term = tags.map((tag) => tag.replaceAll(/\W+/g, '')).join('+');

    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}`)
      .then((response) => response.json())
      .then((data) => data);
  };

  const handleTags = (input) => {
    setTags(input.values);
  };

  const handleSearch = () => {
    setLoading(true);

    fetchImageData().then((imageData) => {
      setLoading(false);
      setImagesData((state) => ({
        ...state,
        images: imageData.hits,
        total: imageData.total,
        totalHits: imageData.totalHits,
      }));
    });
  };

  return (
    <Container className="mb-5">
      <h2 className="text-center my-4">Walty - graphics for all your needs</h2>

      <Row className="mb-4">
        <Col>
          <SearchForm onSearch={handleSearch} onTags={handleTags} tags={tags} />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          {loading && <p className="text-center mt-2">Loading...</p>}

          {imagesData.total > 0 && (
            <p className="text-right mt-2">
              Results: {imagesData.totalHits} of {imagesData.total}
            </p>
          )}
          <ImageList images={imagesData.images} />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            Powered by{' '}
            <a
              href="http://pixabay.com/"
              rel="noreferrer"
              target="_blank"
              className="ml-2"
            >
              <img
                src="https://pixabay.com/static/img/logo.svg"
                alt="Pixabay"
                width="150"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

App.propTypes = {};

export default App;
