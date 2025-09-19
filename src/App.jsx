import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css"
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

import ChessAviod from './ChessAviod';
function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/chess_aviod' element={<ChessAviod/>} /> */}
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
