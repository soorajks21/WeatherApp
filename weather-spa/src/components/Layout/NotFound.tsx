import React, { FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../WeatherComponent/icons/sunny.svg';

const ShowComponent = styled.div`
padding: 10px;
margin: auto;
font-size:20px;
`;

const NotFound: FC = () => (
  <ShowComponent>
    <h1>404 - Not Found!</h1>
        <Link to="/">
            <h1>Go Home</h1>
          
        </Link>
  </ShowComponent>
);

export default NotFound;