/** package */
import React from 'react'
import styled from 'styled-components';



const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    bottom:0;
    display: flex;
    justify-content: center;
    align-content: center;
    
    background-color: black;
    color: white;
    a {
        text-decoration: none;
        text-decoration: underline;
        &:visited{
            color: white;
        }
        &:hover{
            color:green;
        }
        
    }
`;
const Footer = () => {
    return (
        <FooterContainer>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
        </FooterContainer>
    );
};

export default Footer;