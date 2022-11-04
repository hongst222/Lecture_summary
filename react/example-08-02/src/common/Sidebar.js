import React from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link';
import mq from '../MediaQuery';
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 3;
  width: 40%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  transition: all 0.3s;
  box-shadow: 0px 3px 8px rgba(0,0,0,0.8);
  background-color: rgb(255,255,255);
  label, a{
    display: block;
    width: 100%;
    padding: 20px 0;
    padding-left: 20px;
    box-sizing: border-box;    
    
    font-size: 30px;
    color: black;
    text-decoration: none;

    &:hover{
      background-color: rgba(0,0,0,0.3);
    }
    ${mq.maxWidth('lg')`
      font-size: 24px;
    `}
    ${mq.maxWidth('sm')`
      font-size: 18px;
    `}

  }

`
const Sidebar = () => {
  return (
    <SidebarContainer className= 'side_menu'>
      <label htmlFor="side-btn">Close Menu</label>
      <HashLink to= '#myfood'> My Food</HashLink>
      <HashLink to= '#about'> About</HashLink>
    </SidebarContainer>
  );
};

export default Sidebar;