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
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    font-family: 'Noto Sans KR';
  }

  body{
    margin: 0;
    padding: 0;
  }
`;


export default GlobalStyles;