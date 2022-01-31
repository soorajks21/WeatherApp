import React, { FC } from 'react';
import styled from "styled-components";
import spin from './spinner.gif';

const SpinnerImg = styled.img`
    width: 200px;
    margin: auto;
    display: block;
`;

const Spinner: FC<any> = () => {
    
    return (
        <>
            <SpinnerImg src={ spin}  alt='Loading..'></SpinnerImg>
        </>
    )

}

export default Spinner;