import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/entete/index.jsx'
import Home from './components/logements'
import Footer from './components/footer'
import Error from './components/pageErreur'
import About from './components/Apropos'
import PageLogements from './components/pageLogements/PageLogements.js'
import CheckLogementExists from './components/verificationID/verificationID.js'

function App() {
    return (
    <Router>
      <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<About />} />
            <Route path="/pageLogement/:logementId" element={<PageLogements/>} />
            <Route path="*" element={<Error />} />
          </Routes>
      <Footer />
    </Router>
    )}
    
export default App

