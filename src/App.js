import React, { useState } from 'react';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import Entete from './components/entete/entete.js';
import './css/App.scss';
import PageLogements from './components/pageLogements/PageLogements.js';
import Logements from './components/logements/logements.js'





function App() {
  return <div className='App'>
          <Banner />
          <PageLogements />
          <Footer />          
        </div>
}


export default App;

