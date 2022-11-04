/**
 * @filename : GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일 시트. 
 *               이 파일에서 정의한 class는 ReactJSX에서 className 속성으로 참조해야 한다. 
 * @author: HST
 * 
 */
/** Package */
import { createGlobalStyle } from "styled-components";
//  rest.css


const GlobalStyles = createGlobalStyle`
 
html,body {
    font-family: Verdana, sans-serif;
    font-size: 15px;
    line-height: 1.5;
}
body {
    position: relative;
    padding: 0;
    margin: 0;
}
body {
    font-family: "Karma", sans-serif;
}
h1,h2,h3,h4,h5,h6 {
    font-family: "Segoe UI", Arial, sans-serif;
    font-weight: 400;
}
`;

export default GlobalStyles;