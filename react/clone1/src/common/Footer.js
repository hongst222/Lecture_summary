/**
 * @filename: Footer.js
 * @description: 페이지 하단 공통 컴포넌트
 * @author: seungtaek (tmdxordusdo@gmail.com)
 */

/** packages */

/** 패키지 */
import React from "react";
import styled from "styled-components";


const FooterComponets = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
    background-color: rgba(224,224,224,0.5);
    a{
        text-align: center;
        width: 100%;
        color:black;
        &:hover{
            color:green;
        }
    }
`


const Footer = () => {
    return (
        <div>
            <FooterComponets>
            <p>Powered by &nbsp;<a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
            </FooterComponets>
        </div>
    );
};

export default Footer;