import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx';
import PageLogements from '../components/logements/PageLogements.js'
import Apropos from './pages/Apropos.jsx';
import PageErreur from './pages/pageErreur.jsx';


function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageLogements" element={<PageLogements />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<PageErreur />} />
      </Routes>
    </Router>
  );
}

export default RouterComponent;