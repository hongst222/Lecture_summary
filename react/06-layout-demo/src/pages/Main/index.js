import React from 'react'
import styled from 'styled-components';
import mq from '../../MediaQuery';
import Post from './Post';
import Side from './Side';
//  #content 영역 컨테이너에 대한 styledComponent 구현
const Maincontainer = styled.section`
  max-width: 1200px;
  margin: auto;
  background-color: #fff;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  ${mq.maxWidth('sm')`
      flex-direction: column-reverse;
  `}
`;
const Main = () => {
  return (
    <Maincontainer>
      <Side />
      <Post />
    </Maincontainer>
  );
};

export default Main;