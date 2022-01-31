import React from 'react';
import Weather from './components/WeatherComponent/Weather';
import Logo from './components/WeatherComponent/icons/perfectday.svg';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import NotFound from './components/Layout/NotFound';

const Heading = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
     
     <Router>
     <nav className="navbar">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://github.com/soorajks21/WeatherApp">
            <img src={Logo} alt="WEATHER APP" width="50px" height="50px" />
            <Heading>Weather App</Heading>
            </a>
        </div>
      </nav>
     
        <Routes>
        <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Weather />} />
          
          </Routes>
      </Router>

  
       
    </div>
  );
}

export default App;
