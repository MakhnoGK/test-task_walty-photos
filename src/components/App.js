import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { ImageList, SearchForm } from '.';

import { useTags } from '../hooks/useTags';
import { fetchImages } from '../ducks/images';

const App = ({ imageData, loading, onFetchImages }) => {
  const [tags, setTags] = useTags([]);

  return (
    <Container className="mb-5">
      <h2 className="text-center my-4">Walty - graphics for all your needs</h2>

      <Row className="mb-4">
        <Col>
          <SearchForm
            onTags={(target) => setTags(target.values)}
            onSearch={() => onFetchImages(tags)}
            tags={tags}
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          {loading && <p className="text-center mt-2">Loading...</p>}

          {imageData.total > 0 && (
            <p className="text-right mt-2">
              Results: {imageData.totalHits} of {imageData.total}
            </p>
          )}

          <ImageList images={imageData.images} />
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

App.propTypes = {
  onFetchImages: PropTypes.func,
  imageData: PropTypes.shape({
    images: PropTypes.array,
    total: PropTypes.number,
    totalHits: PropTypes.number,
  }),
  loading: PropTypes.bool,
};

const propsMap = (state) => ({
  imageData: state.data,
  loading: state.loading,
});

const dispatchMap = (dispatch) => ({
  onFetchImages: (term) => dispatch(fetchImages(term)),
});

export default connect(propsMap, dispatchMap)(App);
