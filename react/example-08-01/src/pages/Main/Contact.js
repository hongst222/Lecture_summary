import React from 'react';
import styled from 'styled-components';


const ContactContainer = styled.div`
        padding: 32px 16px;
        h3{
            padding: 10px 0px;
            border-bottom: 1px solid rgba(125,125,125,0.2);
            font-size: 24px;
        }  
        p{
            display: block;
            margin: 15px 0;
        }
        form{
            input{
                padding: 0 16px;
                box-sizing: border-box;
                width: 100%;
                height: 40px;
                margin: 10px 0;
                border: solid 1px rgba(199,199,199,0.5);
            }
            button{
                margin-top: 20px;
                padding: 10px 5px;
                background-color: black;
                color: white;
            }
        }
    
`

const Contact = () => {
    return (
        <ContactContainer id ='contact'>
                <h3>Contact</h3>
                <p>Lets get in touch and talk about your next project.</p>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Subject"/>
                    <input type="text" placeholder="Comment"/>
                    <button>SEND MESSAGE</button>
                </form>
        </ContactContainer>
    );
};

export default Contact