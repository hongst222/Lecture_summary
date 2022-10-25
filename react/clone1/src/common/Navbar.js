/**
 * @filename: Navbar.js
 * @description: 페이지 상단 공통 컴포넌트
 * @author: seungtaek (tmdxordusdo@gmail.com)
 */

/** packages */

/** 패키지 */
import React from "react";
import styled from "styled-components";
//import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

/** 파일 */
import mq from "../MediaQuery";

/** Navbar 컴포넌트 style 정의 */
const NavbarComponents = styled.nav`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 2;
    
    background-color: #fff;
    box-shadow: 1px 0.2px 30px rgba(0,0,0,0.2);
    div{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        div{
            a{
                display: block;
                padding: 20px;
                box-sizing: border-box;
                font-size: 1em;
                letter-spacing: 4px;
                text-decoration: none;
                color: black;
                &:hover {
                    background-color: rgba(0,0,0,0.3);
                }
                
            }
            &.right {
                justify-content: space-between;
                ${mq.maxWidth('sm')`
                    display:none;
                `}
            }
        }
    }
`;

/**
 * 
 * @returns {JSX.Element}
 */

const Navbar = () => {
    return (

        <NavbarComponents>
            <div>
                <div>
                    <HashLink to="#">Gourmet au Catering</HashLink>
                </div>
                <div className="right">
                    <HashLink to="#about">About</HashLink>
                    <HashLink to="#menu">Menu</HashLink>
                    <HashLink to="#contact">Contact</HashLink>
                </div>
            </div>
        </NavbarComponents>

    );
};

export default Navbar;