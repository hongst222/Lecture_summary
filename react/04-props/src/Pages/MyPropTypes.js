import React from 'react'
import MyPropTypesSub from '../Components/MyPropTypesSub';
import Meta from '../Components/Meta';
const MyPropTypes = () => {
  return (
    <div>
      {/* Route처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 APp.js에서의 설정을 덮어쓰게 된다.*/}
      <Meta title='MyPropTypes.js' description="여기는 MyPropTypes.js파일" />
      <h2>MyPropTypes</h2>
      {/* 컴포넌트에게 props 전달하기 - 문자열 값은 따옴표로 감싼다. 그 외의 형식은 '{}'로 감싼다. */}

      <MyPropTypesSub />
      <MyPropTypesSub name='민호' age='19' hobby= '사진찍기'/>
      <MyPropTypesSub name='수영' age='스물한살' hooby='영화보기' />
      <MyPropTypesSub name='철민' age={22} />

    </div>
  );
};

export default MyPropTypes;