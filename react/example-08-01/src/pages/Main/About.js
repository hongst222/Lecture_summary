import React from 'react';
import styled from 'styled-components';

import mq from '../../MediaQuery';

/** import img */
import team1 from '../../assets/img/team1.jpg';
import team2 from '../../assets/img/team2.jpg';
import team3 from '../../assets/img/team3.jpg';
import team4 from '../../assets/img/team4.jpg';
const AboutContainer = styled.div`
    .about_wrap{
        padding: 32px 16px;
        h3{
            padding: 10px 0px;
            border-bottom: 1px solid rgba(125,125,125,0.2);
            font-size: 24px;
        }  
        p{
            margin: 10px 0;
        }
    }
    .about_contents_wrap{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 8px;
        box-sizing: border-box;
        
        >div{
            width: 25%;
            padding: 0 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
            ${mq.maxWidth('lg')`
                    width: 50%;
                `}
            ${mq.maxWidth('sm')`
                width: 100%;
            `}
            .img_wrap{
                box-sizing: border-box;
                width:100%;
                img{
                    width:100%;
                }
            }
            .text_wrap{
                width:100%;
                box-sizing: border-box;
                h3{
                    font-size: 24px;
                }
                button {
                    width: 100%;
                    padding: 8px 16px;
                    box-sizing: border-box;
                    border: none;
                    font-size: 16px;
                    background-color: rgba(199,199,199,0.3);
                }
            }
        }
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <div className="about_wrap" id="about">

                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            </div>
            <div className="about_contents_wrap">
                <div>
                    <div className="img_wrap">
                        <img src={team1} alt="팀원1" />
                    </div>
                    <div className="text_wrap">
                        <h3>John Doe</h3>
                        <p className="role">CEO & Founder</p>
                        <p className="introduce">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <button>contact</button>
                    </div>
                </div>
                <div>
                    <div className="img_wrap">
                        <img src={team2} alt="팀원2" />
                    </div>
                    <div className="text_wrap">
                        <h3>Jane Doe</h3>
                        <p className="role">Architect</p>
                        <p className="introduce">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <button>contact</button>
                    </div>
                </div>
                <div>
                    <div className="img_wrap">
                        <img src={team3} alt="팀원3" />
                    </div>
                    <div className="text_wrap">
                        <h3>Mike Ross</h3>
                        <p className="role">Architect</p>
                        <p className="introduce">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <button>contact</button>
                    </div>
                </div>
                <div>
                    <div className="img_wrap">
                        <img src={team4} alt="팀원4" />
                    </div>
                    <div className="text_wrap">
                        <h3>Dan Star</h3>
                        <p className="role">CEO & Founder</p>
                        <p className="introduce">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <button>contact</button>
                    </div>
                </div>
            </div>
        </AboutContainer>
    );
};

export default About;