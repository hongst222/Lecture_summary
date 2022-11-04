import React from 'react'
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import mq from '../MediaQuery';
const NavigatorContainer = styled.div`
    width: 100%;
    position: sticky;
    top:0;
    z-index: 1;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 2px 5px 8px 0.2px rgba(0,0,0,0.3);
    background-color: rgba(255,255,255);
    div{
        display: flex;
        justify-content: space-between;
        letter-spacing: 4px;
        


        div {
            .btn{
                display: block;
                padding: 8px;
                text-decoration: none;
                color: black;
            
                &:hover{
                    background-color: rgba(0,0,0,0.2);
                }
            }
            &.nav_right{
                display: flex;
                justify-content: space-between;
                gap:35px;
                ${mq.maxWidth('sm')`
                    display: none;
                `}
            }
        }    
    }
`

const Navigator = () => {
    return (
        <NavigatorContainer>
            <div>
                <div>
                    <HashLink to="#main" className="btn"><b>BR</b> Architects</HashLink>
                </div>
                <div className="nav_right">
                    <HashLink to="#projects" className="btn">Projects</HashLink>
                    <HashLink to="#about" className="btn">About</HashLink>
                    <HashLink to="#contact" className="btn">Contact</HashLink>
                </div>
            </div>
        </NavigatorContainer>
    );
};

export default Navigator