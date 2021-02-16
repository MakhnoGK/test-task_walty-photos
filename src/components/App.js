import React from 'react';
import { Container } from 'react-bootstrap';
import SearchPage from './pages/SearchPage';
import './../styles/App.css';
import ResultsPage from './pages/ResultsPage';

const App = () => {
  return (
    <Container>
      {/* <SearchPage /> */}
      <ResultsPage />
    </Container>
  );
};

App.propTypes = {};

export default App;
