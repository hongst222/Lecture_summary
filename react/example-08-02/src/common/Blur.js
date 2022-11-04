import React from 'react'
import styled from 'styled-components'

const BlurContainer = styled.label`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    opacity:0;
    transition: 0.3s;
    pointer-events: none;
`
const blur = () => {
    return (
        <BlurContainer htmlFor ='side-btn' className='blur'/>
    );
};

export default blur;