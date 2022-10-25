/**
 * @filename: index.js (path= /Main/index.js)
 * @description: 페이지의 메인
 * @author: seungtaek (tmdxordusdo@gmail.com)
 */
/** import package */
import React from 'react'
import styled from 'styled-components';

/** import PagesContainers */
import About from './About';
import Contact from './Contact';
import Menu from './Menu';

const MainContainer = styled.div`
    max-width: 1100px;
    width: 92%;
    margin: 0 auto;
`;

const index = () => {
  return (
    <MainContainer>
        <About/>
        <Menu/>
        <Contact/>
    </MainContainer>
  );
};

export default index;