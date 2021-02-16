import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = () => {
  const [term, setTerm] = useState('');

  return (
    <Form className="text-center">
      <Form.Group controlId="fromTerm">
        <Form.Control
          type="text"
          placeholder="Enter tags"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

SearchForm.propTypes = {};

export default SearchForm;
