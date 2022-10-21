/**
 * @filename: Post.js
 * @description: 메인 페이지 포스트 영역 컴포넌트
 * @author: HST
 */

import React from 'react'
import styled from 'styled-components';
import FakeImg from '../../common/FakeImg';
import mq from '../../MediaQuery';

// 컨테이너에 대한 styledComponent 구현
const PostContainer = styled.section`
    flex: 0 1 auto;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
    

    ${mq.maxWidth('sm')`
        flex: none;
        width: 100%;
    `}
    
    h2{
      font-size: 24px;
      font-weight: 700;
      margin: 10px auto;
    }
    h3 {
      font-size: 10px;
      font-weight: 500;
      margin: 10px auto;
    }

    p{
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 7px;
    }

`;
/**
 * 메인 페이지 포스트 영역 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Post = () => {
  return (
    <div>
      {[0, 1, 2, 3].map((v, i) => {
        return (
          <PostContainer key={i}>
            <h2>TITLE HEADING</h2>
            <h3>Title descrition</h3>
            <FakeImg height='200'>Image</FakeImg>
            <p>Some text..</p>
            <p>Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui Sunt in culpa qui</p>
          </PostContainer>
        )
      })}
    </div>
  );
};


export default Post;