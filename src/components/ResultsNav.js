import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const ResultsNav = ({ total }) => {
  return (
    <Row className="mb-3 align-items-center">
      <a href="/" className="btn btn-light d-inline-block mr-2">
        &laquo; Back
      </a>

      <p className="m-0">Total results: {total}</p>
    </Row>
  );
};

ResultsNav.propTypes = {
  total: PropTypes.number,
};

export default ResultsNav;
