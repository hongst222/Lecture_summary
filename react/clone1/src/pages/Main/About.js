/**
 * @filename: About.js
 * @description: Main의 About부분
 * @author: seungtaek (tmdxordusdo@gmail.com)
 */

/** import package */
import React from 'react';
import styled from 'styled-components';

/** import MediaQuery */
import mq from '../../MediaQuery';

/** import image */
import tbSettings from '../../assets/img/tablesetting2.jpg';

/** make About Container */
const AboutContainers = styled.div`
    width: 100%;
    max-width: 1100px;
    min-height: 600px;
    display: flex;
    margin: auto;
    padding: 64px 0;
    box-sizing: border-box;
    div{
      width: 50%;
      padding: 24px;
      box-sizing: border-box;
      
      img{
        width: 100%;
        opacity: 0.7;
      }

      span {
        background-color: rgba(0,0,0,0.1);
      }
      p.md_hide{
        color: rgba(0,0,0,0.6);
      }
      ${mq.maxWidth('sm')`
            width: 100%;
            &.low_hide{
              display:none;
            }
      `}
      ${mq.maxWidth('lg')`
            width: 100%;
            &.md_hide{
              display:none;
            }
      `}
      
    }
`;

const About = () => {
  return (
    <div id="about">
      <AboutContainers>
        <div className="low_hide">
          <img src={tbSettings} alt="tablesetting2.jpg" />
        </div>
        <div>
          <h1>About Catering</h1>
          <h5>Tradition since 1889</h5>
          <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use
            <span>seasonal</span> ingredients.
          </p><br />

          <p className="md_hide">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </AboutContainers>
    </div>


  )
}

export default About