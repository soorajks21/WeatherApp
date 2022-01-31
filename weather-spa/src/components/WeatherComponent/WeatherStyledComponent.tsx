import styled from "styled-components"

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

export const WeatherInfoLabel = styled.span`
  margin: 10px 15px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
export const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

export const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

export const Container = styled.div`
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



export const WeatherInfoIcons = {
    sunset: "./icons/temp.svg",
    time:"./icons/time.svg",
   sunrise: "./icons/temp.svg",
   humidity: "./icons/humidity.svg",
   wind: "./icons/wind.svg",
   pressure: "./icons/pressure.svg",
 };

 export const InfoContainer = styled.div`
 display: flex;
 margin: 5px 5px;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
`;
export const InfoIcon = styled.img`
 width: 20px;
 height: 20px;
`;
export const InfoLabel = styled.span`
 display: flex;
 flex-direction: column;
 font-size: 14px;
 margin: 15px;
 & span {
   font-size: 12px;
   text-transform: capitalize;
 }
`;