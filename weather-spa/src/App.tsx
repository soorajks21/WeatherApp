import React from 'react';
import Weather from './components/WeatherComponent/Weather';
import cloudy from './components/WeatherComponent/icons/perfectday.svg';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
     <nav className="navbar">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://github.com/soorajks21/WeatherApp">
            <img src={cloudy} alt="WEATHER APP" width="50px" height="50px" />
            <Heading>Weather App</Heading>
            </a>
        </div>
      </nav>
      <Weather />
  
       
    </div>
  );
}

export default App;
