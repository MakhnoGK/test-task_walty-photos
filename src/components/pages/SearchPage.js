import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchForm from '../SearchForm';

const SearchPage = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={{ span: 12 }} sm={{ span: 8 }} className="mt-5">
          <h2 className="text-center">Search images</h2>

          <SearchForm />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={{ span: 12 }} sm={{ span: 8 }} className="mt-5">
          <h3>Last 3 searches:</h3>
        </Col>
      </Row>
    </>
  );
}

SearchPage.propTypes = {};

export default SearchPage;
