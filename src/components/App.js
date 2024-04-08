import React, { useState } from 'react';
import Banner from './banner';
import Entete from './entete';
import Logements from './logements';
import Footer from './footer';
import '../css/App.css';




function App() {
  return <div>
          <Banner />
          <Entete />
          <Logements />
          <Footer />
        </div>
}


export default App;

