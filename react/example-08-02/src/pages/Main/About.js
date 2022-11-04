import React from 'react'
import styled from 'styled-components';
import chef from '../../assets/img/chef.jpg';
const AboutContainer = styled.div`
  .img_wrap {
            width: 70%;
            margin: auto;
            padding: 0 16px;
            box-sizing: border-box;
            img {
                width: 100%;
            }
        }
        h2 {
            font-size: 30px;
        }
        h5 {
            font-size: 24px;
            margin: 10px;
        }
        h6 {
            margin: 10px;
            font-size: 16px;
        }

        h2,
        h5,
        h6,
        p {
            text-align: center;
        }
`
const About = () => {
  return (
    <AboutContainer id = 'about'>
      <h2>About Me, The Food Man</h2>
            <div className="img_wrap">
                <img src={chef} alt="chef"/>
            </div>
            <div className="text">
                <h5><b>I am Who I AM!</b> </h5>
                <h6><i>With passion For Real, Good Food</i></h6>
                <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest
                    of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed
                    tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
                    fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                    ultricies congue gravida diam non fringilla.</p>
            </div>
    </AboutContainer>
  )
}

export default About;