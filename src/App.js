import React from 'react';
import './App.css';
import Navbar from './Component/navbar/Navbar';
import Header from './Pages/header/Header';
import AboutUs from './Pages/about-us/AboutUs';
import SpecialMenu from './Pages/special-menu/SpecialMenu';
import Chef from './Pages/chef/Chef'
import Intro from './Pages/intro/Intro';
import Laurels from './Pages/laurels/Laurels';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
    </div>
  );
}

export default App;
