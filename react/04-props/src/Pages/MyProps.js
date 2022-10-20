import React from 'react'

import MyPropsSub from '../Components/MyPropsSub';
import Meta from '../Components/Meta';
const MyProps = () => {
  console.clear();

  return (
    <div>
      {/* Route처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 APp.js에서의 설정을 덮어쓰게 된다.*/}
      <Meta title='MyProp.js' description="여기는 MyProp.js파일" />
      <h2>MyProps</h2>
      {/* 컴포넌트에게 props 전달하기 - 문자열 값은 따옴표로 감싼다. 그 외의 형식은 '{}'로 감싼다. */}
      
      <MyPropsSub />
      <MyPropsSub name = '민호' age ='19' />
      <MyPropsSub name = '수영' age = {21} />
      
    </div>  
  );
};

export default MyProps;