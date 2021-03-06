import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio/:id/*" element={<Portfolio />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
