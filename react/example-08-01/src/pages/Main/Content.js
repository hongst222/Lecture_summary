import React from 'react';
import styled from 'styled-components';

import mq from '../../MediaQuery';
/** import img */
import house2 from '../../assets/img/house2.jpg';
import house3 from '../../assets/img/house3.jpg';
import house4 from '../../assets/img/house4.jpg';
import house5 from '../../assets/img/house5.jpg';
const ContentContainer = styled.div`

    div{
        &.subtitle{
            padding: 32px 16px;
            h3{
                padding: 10px 0px;
                border-bottom: 1px solid rgba(125,125,125,0.2);
                font-size: 24px;
            };
        }
        &.wrap{
            width:100%;
            display: flex;
            padding: 0 8px;
            box-sizing: border-box;
            ${mq.maxWidth('lg')`
                flex-wrap: wrap;
            `}
            ${mq.maxWidth('sm')`
                flex-direction: column;
            `}
            >div{
                width: 25%;
                padding: 0 8px;
                margin-bottom: 16px;
                box-sizing: border-box;
                

                div{
                    position: relative;
                    width:100%;
                    img{
                        width:100%;
                    }
                    span {
                        position: absolute;
                        top: 0%;
                        left: 0%;
                        padding: 10px 5px;
                        box-sizing: border-box;
                        background-color: black;
                        color: white;

                    }
                }
            }
        }
    }

    
`;

const Content = () => {
    return (
        <ContentContainer>
            <div className='subtitle' id="projects">
                <h3>Projects</h3>
            </div>

            <div className ="wrap">
                <div>
                    <div>
                        <img src= {house5} alt='집5'/>
                        <span>Summer House</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={house2} alt="집2"/>
                        <span>Brick House</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={house3} alt="집3"/>
                        <span>Renovated</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={house4} alt="집4"/>
                        <span>Barn House</span>
                    </div>
                </div>
                
            </div>
            <div className="wrap">
                <div>
                    <div>
                        <img src={house2} alt="집1"/>
                        <span>Summer House</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={house5} alt="집2"/>
                        <span>Brick House</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={house4} alt="집3"/>
                        <span>Renovated</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={house3} alt="집4"/>
                        <span>Barn House</span>
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}

export default Content