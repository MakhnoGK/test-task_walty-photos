import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ImageList, SearchForm } from '.';

import { ImageState } from '../types/imageState';

const App: React.FC<ImageState> = ({ data, loading }) => (
  <Container className="mb-5">
    <Typography variant="h3">Walty - graphics for all your needs</Typography>

    <Box>
      <SearchForm />
    </Box>

    <Box className="mb-5">
      {loading && (
        <Typography className="text-center mt-2">Loading...</Typography>
      )}

      {data.total > 0 && (
        <Typography className="text-right mt-2">
          Results: {data.totalHits} of {data.total}
        </Typography>
      )}

      <ImageList images={data.hits} />
    </Box>

    <Box>
      <Box className="d-flex align-items-center justify-content-center">
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
      </Box>
    </Box>
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
