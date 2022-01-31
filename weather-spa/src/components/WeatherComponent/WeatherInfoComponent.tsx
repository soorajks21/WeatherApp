import React, { FC } from 'react';
import styled from "styled-components"
import { WeatherInfoIcons, InfoContainer, InfoIcon, InfoLabel } from './WeatherStyledComponent';



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