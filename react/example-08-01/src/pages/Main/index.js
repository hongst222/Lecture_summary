/** import package */
import React from 'react';
import styled from 'styled-components';

/** import pages */
import About from './About';
import Contact from './Contact';
import Content from './Content';
import Map from './Map';


const MainContainer = styled.div`
  max-width:1564px;
  box-sizing: border-box;
  padding: 8px 16px;
  margin: auto;
`;
const index = () => {
  return (
    <MainContainer>
      <Content />
      <About />
      <Contact />
      <Map />

    </MainContainer>
  )
}

export default index