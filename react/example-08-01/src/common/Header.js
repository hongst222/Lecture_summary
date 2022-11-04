import React from 'react';
import mq from '../MediaQuery';
import styled from 'styled-components';

import img from '../assets/img/architect.jpg';

const HeaderContainer = styled.header`
    max-width: 1500px;
    max-height: 800px; 
    
    position: relative;

    margin-left: auto;
    margin-right: auto;
    img{
        width: 100%;
        height: 100%;
    }
    div{
        position: absolute;
        top:50%;
        left: 50%; 
        transform: translate(-50%,-50%);
        span:nth-of-type(1) {
            padding: 8px 16px;
            background-color: rgba(0,0,0,1);
            color: rgba(255,255,255,1);
        }
        span:nth-of-type(2) {
            color: gray;
            ${mq.maxWidth('sm')`
              display:none;
            `}
        }
    }
`

const Header = () => {
  return (
    <HeaderContainer>
      <img src= {img} alt = "BR 건축물"/>

        <div>
          <h1><span>BR</span> <span class="mobile_hide">Architects</span></h1>
        </div>
    </HeaderContainer>
  );
};

export default Header;