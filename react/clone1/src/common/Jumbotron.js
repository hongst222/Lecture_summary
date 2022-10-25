/**
 * @filename: Jumbotrons.js
 * @description: 페이지 헤더부분
 * @author: seungtaek (tmdxordusdo@gmail.com)
 */

import React from 'react';
import styled from 'styled-components';
import hamburger from '../assets/img/hamburger.jpg';

const JumbotronsContainer = styled.header`
    width: 100%;
    max-width: 1600px;
    min-width: 514px;
    max-height: 900px;
    
    position: relative;
    margin: 0 auto;
    div{
      &.img_wrap{
        width: 100%;
        .img{
          width: 100%;
          height: 100%;
        }
      }
      &.text_wrap{
        position: absolute;
        bottom: 0px;
        left : 16px;
        color: rgba(15,12,15,0.5);
      }
    }
`;

const Jumbotron = () => {
  return (
    <JumbotronsContainer>
      <div className="img_wrap" id="home">
        <img className = 'img' src = {hamburger} alt="햄버거" />
      </div>
      <div className="text_wrap">
        <h1>Le Catering</h1>
      </div>
    </JumbotronsContainer>
  );
};

export default Jumbotron;