import React from 'react';
import './App.css';
import Navbar from './Component/navbar/Navbar';
import Header from './Pages/header/Header';
import AboutUs from './Pages/about-us/AboutUs';
import SpecialMenu from './Pages/special-menu/SpecialMenu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
    </div>
  );
}

export default App;
