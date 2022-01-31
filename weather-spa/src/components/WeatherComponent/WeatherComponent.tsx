import React, { FC } from 'react';
import styled from "styled-components"
import { weatherType } from '../../store/types';
import WeatherInfoComponent from './WeatherInfoComponent';
import { Container, WeatherIcon, WeatherInfoContainer, WeatherConditon, Condition, WeatherInfoLabel } from './WeatherStyledComponent';

 const WeatherInfoIcons:any = {
    "c": "./icons/sunny.svg",
    "lc": "./icons/cloudy.svg",
    "humidity": "./icons/humidity.svg",
    "wind": "./icons/wind.svg",
    "pressure": "./icons/pressure.svg",
  };

// export const WeatherContainer = styled.div`
//   display: flex;
//   width: 100%;
//   margin: 30px auto;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;


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