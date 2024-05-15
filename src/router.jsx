import React from 'react'
import {BrowserRouter,Router,Routes, Route } from 'react-router-dom'
import Home from './components/logements/logements.js';
import PageLogements from './components/pageLogements/PageLogements.js'
import Apropos from './components/Apropos/index.jsx';
import PageErreur from './components/pageErreur/index.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pageLogement/${logement.id}' element={<PageLogements />} />
        <Route path='/a-propos' element={<Apropos />} />
        <Route path='*' element={<PageErreur />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;