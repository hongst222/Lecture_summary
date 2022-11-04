import React from 'react'
import styled from 'styled-components';
import workshop from '../../assets/img/workshop.jpg';
import gondol from '../../assets/img/gondol.jpg';

const FooterContainer = styled.footer`
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 32px;
        box-sizing: border-box;
        .box {
            width: 33.3333%;
            padding: 0 16px;
            box-sizing: border-box;
            h2 {
                margin: 10px;
            }
            p {
                font-size: 15px;
            }
            p > a {
                color: black;
                &:visited {
                    color: black;
                }
                &:hover {
                    color: green;
                }
            }
            ul {
                display: flex;
                flex-direction: column;
                padding: 0;
                margin: 0;
                li {
                    padding: 16px;

                    box-sizing: border-box;
                    list-style: none;
                    &:nth-of-type(1) {
                        border-bottom: 1px solid rgba(122, 122, 122, 0.6);
                    }
                    img {
                        float: left;
                        width: 50px;
                        margin-right: 16px;
                    }

                    &:hover {
                        background-color: rgba(122, 122, 122, 0.6);
                    }
                }
            }
            div:last-of-type {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                gap: 2px;

                span {

                    display: inline-block;
                    padding: 0 8px;
                    margin-bottom: 16px;
                    color: white;
                    background-color: #7a7a7a99;
                    font-family: serif;
                    font-size: 12px;
                    text-align: center;

                    &:first-of-type {
                        background-color: black;
                        font-size: 15px;
                    }
                }
            }
        }
    
`
const Footer = () => {
  return (
    <FooterContainer>
      <div className="box">
        <h2>FOOTER</h2>
        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.</p>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
      </div>

      <div className="box">
        <h2>BLOG POSTS</h2>
        <ul>
          <li>
            <img src={workshop} alt="workshop" />
            <span>Lorem</span><br />
            <span>Sed mattis nunc</span>
          </li>
          <li>
            <img src={gondol} alt="gondol" />
            <span>Ipsum</span> <br /> <span>Praes tinci sed</span>
          </li>
        </ul>
      </div>
      <div className="box">
        <h2>POPULAR TAGS</h2>
        <div>
          <span>Travel</span> <span>New York</span> <span>Dinner</span>
          <span>Salmon</span>
          <span>France</span> <span>Drinnks</span> <span>Ideas</span> <span>Flavors</span>
          <span>cuisine</span>
          <span>chicken</span>
          <span>Dressing</span>
          <span>Fried</span>
          <span>Fish</span>
          <span>Duck</span>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;