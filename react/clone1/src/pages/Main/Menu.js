/**
 * @filename: Menu.js
 * @description: Main의 메뉴 부분 
 * @author: seungtaek (tmdxordusdo@gmail.com)
 */

/** import package */
import React from 'react';
import styled from 'styled-components';

/** import MediaQuery */
import mq from '../../MediaQuery';

/** import image */
import image from '../../assets/img/tablesetting.jpg';

const MenuContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    min-height: 600px;
    display: flex;
    margin: auto;
    padding: 64px 0;
    box-sizing: border-box;
    border-top: 1px solid rgba(128,128,128,0.3);;
    border-bottom: 1px solid rgba(128,128,128,0.3);
    div{
      width: 50%;
      padding: 24px;
      box-sizing: border-box;

      h5 {
        font-size: 20px;
        text-align: left;
      }
      img{
        width: 100%;
        opacity: 0.7;
      }  
    }
    ${mq.maxWidth('lg')`
          display: flex;
          flex-direction: column;
          margin: auto; 
          div{
            width: 100%;
          }
         
      `}
`;

const Menu = () => {
  return (
    <div id='menu'>
      <MenuContainer>
        <div>
          <h1>Our Menu</h1>

          <h5>Bread Basket</h5>
          <p>Assortment of fresh baked fruit breads and muffins 5.50</p>

          <h5>Honey Almond Granola with Fruits</h5>
          <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

          <h5>Belgian Waffle</h5>
          <p>Vanilla flavored batter with malted flour 7.50</p>

          <h5>Scrambled eggs</h5>
          <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>

          <h5>Blueberry Pancakes</h5>
          <p>With syrup, butter and lots of berries 8.50</p>

        </div>
        <div>
          <img src={image} alt="img2" />
        </div>
      </MenuContainer>
    </div>
  )
}

export default Menu