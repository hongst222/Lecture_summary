/** import package */
import React from 'react';
import styled from 'styled-components';

/** import pages */
import MyFood from './MyFood';
import About from './About';
import Footer from './Footer';

const MainContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 30px auto;
    padding: 0 8px;
    box-sizing: border-box;
    margin: 0 auto;
    
`

const index = () => {
  return (
    <MainContainer>
      <MyFood />
      <About />
      <Footer />
    </MainContainer>
  )
}

export default index