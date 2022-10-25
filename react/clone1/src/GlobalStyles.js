/**
 * @filename : GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일 시트. 
 *               이 파일에서 정의한 class는 ReactJSX에서 className 속성으로 참조해야 한다. 
 * @author: HST
 * 
 */
/** Package */
import { createGlobalStyle  } from "styled-components";
//  rest.css


const GlobalStyles = createGlobalStyle`
 

  *{
    font-family: 'Times New Roman', Georgia, Serif;
  }

  body{
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display";
    font-weight: 400;
    text-align: center;
    letter-spacing: 5px;
}
`;
export default GlobalStyles;