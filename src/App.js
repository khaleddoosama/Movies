import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviesDetails from './components/MovieDetails'

function App() {

  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesList />} />
            <Route path='/Movies' element={<MoviesList />} />
            <Route path='/movie/:id' element={<MoviesDetails />} />
            
          </Routes>
        </BrowserRouter>
      </Container>

    </div>
  );
}

export default App;
