import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/banner'
import Home from './components/logements/logements.js'
import Footer from './components/footer'
import Error from './components/pageErreur'
import About from './components/Apropos'
import PageLogements from './components/pageLogements/PageLogements.js'

function App() {
    return (
    <Router>
      <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<About />} />
            <Route path="/PageLogement" element={<PageLogements />} />
            <Route path="*" element={<Error />} />
          </Routes>
      <Footer />
    </Router>
    )}
    
export default App

