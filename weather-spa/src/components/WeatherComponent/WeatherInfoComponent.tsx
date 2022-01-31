import React, { FC } from 'react';
import styled from "styled-components"

 const WeatherInfoIcons = {
     sunset: "./icons/temp.svg",
     time:"./icons/time.svg",
    sunrise: "./icons/temp.svg",
    humidity: "./icons/humidity.svg",
    wind: "./icons/wind.svg",
    pressure: "./icons/pressure.svg",
  };

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 5px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

 const WeatherInfoComponent: FC<any> = ({time, max, min}) => {

    return (

        <>
        <InfoContainer>

            <InfoIcon src={WeatherInfoIcons.sunset}></InfoIcon>
                <InfoLabel>max
                {max &&
                         <span>
                             {max} C
                         </span>
                    }
                </InfoLabel>
    
            </InfoContainer>
          <InfoContainer>
                <InfoIcon src={ WeatherInfoIcons.pressure}></InfoIcon>
                <InfoLabel>
                    time
                    <span>{time}</span>
            </InfoLabel>
            </InfoContainer>
         <InfoContainer>
            <InfoIcon src={ WeatherInfoIcons.sunset}></InfoIcon>
                <InfoLabel>min
                    {min &&
                         <span>
                             {min} C
                         </span>
                    }
                   
                </InfoLabel>
                
                </InfoContainer>
        </>
    
    )
}


export default WeatherInfoComponent;