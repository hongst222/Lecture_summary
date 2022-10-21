/**
 *  @filename: App.js
 *  @description : 레이아웃 구성 컨테이너 
 *  @author: HST (tmdxordusdo@gmail.com)
 */
/**
 * 
 * ├───────
 * ├───────
 * └───────
 */

/** react */
import React from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

/** components */
import FakeImg from "./common/FakeImg";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import Post from "./pages/Main/Post";
import Side from "./pages/Main/Side";

/** pages */
import Main from "./pages/Main";
import mq from './MediaQuery';

//  #content 영역 컨테이너에 대한 styledComponent 구현
const ContentContainer = styled.section`
  max-width: 1200px;
  margin: auto;
  background-color: #fff;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  ${mq.maxWidth('sm')`
  flex-direction: column-reverse
  `}
`;

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
          <Route path='/' exact={true} element={<Main />}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
