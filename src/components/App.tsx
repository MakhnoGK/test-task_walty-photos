import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ImageList, SearchForm } from '.';

import { ImageState } from '../types/imageState';

const App: React.FC<ImageState> = ({ data, loading }) => (
  <Container className="mb-5">
    <h2 className="text-center my-4">Walty - graphics for all your needs</h2>

    <Row className="mb-4">
      <Col>
        <SearchForm />
      </Col>
    </Row>

    <Row className="mb-5">
      <Col>
        {loading && <p className="text-center mt-2">Loading...</p>}

        {data.total > 0 && (
          <p className="text-right mt-2">
            Results: {data.totalHits} of {data.total}
          </p>
        )}

        <ImageList images={data.hits} />
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

App.propTypes = {
  data: PropTypes.shape({
    hits: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    totalHits: PropTypes.number.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const propsMap = (state: ImageState) => ({
  data: state.data,
  loading: state.loading,
});

export default connect(propsMap)(App);
