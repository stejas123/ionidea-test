import React, { Component } from 'react';
import Router from './router';
import Footer from './components/common/footer';
import './components/common/css/reset.css';

export default ()=> {
    return (
      <div className="App">
        <Router />
        <Footer />
      </div>
    );
  
}
