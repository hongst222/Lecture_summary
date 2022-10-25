/**
 * @filename: Contact.js
 * @description: Main의 Contact부분
 * @author: seungtaek (tmdxordusdo@gmail.com)
 */
/** import package */
import React from 'react';
import styled from 'styled-components';

/* Create ContactContainer */
const ContactContainer = styled.div`
  padding: 24px;
  h1{
    text-align: left;
  }
  p:nth-of-type(2) {
      color: rgba(15,106,15,0.8);
      font-size: 20px;
      font-weight: bold;
  }
  div{
    width: 100%;
    height: 300px;
    form{
    height: auto;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    height: 40px;
    input{
      border: none;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      width: 100%;
      height: 40px;
    }
    
    button {
      margin-top: 13px;
      border: none;
      padding: 10px 16px;
    }
  }
  }
`;

const Contact = () => {
  return (
    <div id='contact'>
      <ContactContainer>
        <h1>Contact</h1>
        <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
        <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
        <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
        <div>
          <form>
          <p><input type="text" placeholder="Name" required /></p>
          <p><input type="number" placeholder="How many people" required /></p>
          <p><input className="date" type="datetime-local" placeholder="Date and Time" value="2022-10-04T12:10" /></p>
          <p><input type="text" placeholder="Message \ Special requirement" /></p>
          <button>SEND MESSAGE</button>
        </form>
        </div>
        
      </ContactContainer>
    </div>
  );
};

export default Contact;