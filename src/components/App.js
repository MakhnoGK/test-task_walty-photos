import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageList from './ImageList';
import SearchForm from './SearchForm';
import { useTags } from '../hooks/useTags';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { onGetImagesAsync } from '../ducks/images';

const App = ({ images, getImages }) => {
  const [tags, setTags] = useTags([]);
  const [loading, setLoading] = useState(false);
  const [imagesData, setImagesData] = useState({
    images: [],
    total: 0,
    totalHits: 0,
  });


  const handleTags = (input) => {
    setTags(input.values);
  };

  const handleSearch = () => {
    getImages(tags);    
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
          <ImageList images={images} />
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

// Todo add images prop
App.propTypes = {
  getImages: PropTypes.func,
};

const propsMap = (state) => ({
  images: state.images,
});

const dispatchMap = (dispatch) => ({
  getImages: (term) => dispatch(onGetImagesAsync(term)),
});

export default connect(propsMap, dispatchMap)(App);
