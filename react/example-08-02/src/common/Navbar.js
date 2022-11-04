import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
const NavbarContainer = styled.nav`
  position: sticky;
  top:0;
  background-color: white;
  max-width: 1200px;
  
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 8px;
  box-sizing: border-box;

  label {
    width: 60px;
    height: 53px;
    padding: 16px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 10px;
    
    span{
      display: block;
      background-color: black;
      height: 1px;
    }
    &:hover {
      background-color: #666;
    }
  }
  a, p{
    display: block;
    width: auto;
    margin: 0;
    padding: 16px 8px;
    box-sizing: border-box;
    text-align: center;

    text-decoration: none;
    color: black;

    &:hover {
      background-color: #666;
    }
  }
  
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <label htmlFor='side-btn'>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <HashLink to='#myfood'>My Food</HashLink>
      <p>Mail</p>
    </NavbarContainer>
  )
}

export default Navbar