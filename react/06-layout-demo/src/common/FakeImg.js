/**
 * @filename: FaceImg.js
 * @description: 가상 이미지 박스
 * @author: HST
 */

/** 패키지 참조 */
import React from 'react'
import styled from 'styled-components';
/** 가상 이미지 컴포넌트 스타일 정의 */
const FakeImgcontainer = styled.div`
  background-color: #aaa;
  width: auto;
  padding: 20px;
  height: ${props => `${props.height}px`};
`;
/**
 * 가상 이미지 컴포넌트 구현.
 * 이미지의 높이와 내용으로 출력할 문자열을 props로 전달받는다. 
 * @param props.height - 이미지 높이
 * @param props.children - 내용
 * @returns {JSX.Element}
 */
const FakeImg = ({height, children}) => {
  return (
    <FakeImgcontainer height ={height}>
      {children}
    </FakeImgcontainer>
  );
};

export default FakeImg;