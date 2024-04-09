import React, { useState } from 'react';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import './css/App.scss';
import Router from './router';




function App() {
  return <div className='App'>
          <Banner />
          <Router />
          <Footer />          
        </div>
}


export default App;

