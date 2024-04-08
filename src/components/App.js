import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Banner from './banner';
import Entete from './entete';
import Logements from './logements';
import Footer from './footer';
import '../css/App.css';
import PageLogements from './PageLogements';



function App() {
  return <div>
          <Banner />
          <Entete />
          <Logements />
          <Footer />
        </div>
}


export default App;

