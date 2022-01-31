import React, { FC } from 'react';
import styled from "styled-components"
import { weatherType } from '../../store/types';
import  WeatherInfoComponent  from './WeatherInfoComponent';

 const WeatherInfoIcons:any = {
    "c": "./icons/sunny.svg",
    "lc": "./icons/cloudy.svg",
    "humidity": "./icons/humidity.svg",
    "wind": "./icons/wind.svg",
    "pressure": "./icons/pressure.svg",
  };

export const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const WeatherConditon = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;
`;

export const Location = styled.span`
    font-size: 28px;
    font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  margin: 10px 15px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height:300px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

interface WeatherDetails{
    data : weatherType
}

const WeatherComponent: FC<WeatherDetails> = ({ data }) => {
    return (
        <div className='column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
            <Container>
            <WeatherConditon>
                    <Condition>
                        {data.temp ? <><span>{data.temp} C</span> | {data.state}</> : <span> {data.state}</span>}
                    </Condition>
                    <WeatherIcon src={WeatherInfoIcons[data.abbr]}/>
            </WeatherConditon>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                    <WeatherInfoComponent time={data.time} max={data.max} min={data.min}></WeatherInfoComponent>
            </WeatherInfoContainer>
            </Container>
            </div>
)

}


export default WeatherComponent;