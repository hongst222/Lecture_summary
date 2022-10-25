import React from 'react';
import MyBox from '../components/MyBox';

const MyRef = () => {
  //  HTML 태그 react 안에서 참조할 수 있는 변수를 생성
  const myDname = React.useRef();
  const myLoc = React.useRef();
  const myResult = React.useRef();

  //  컴포넌트에 설정하기 위한 ref
  const myBoxRef = React.useRef();

  // 화면에 출력되지 않을 상태 변수를 생성할 수 있다.
  // useRef()함수에 전달하는 파라미터가 상태변수의 기본값이 된다.
  const myValue = React.useRef(0);

  const colorArr = ['red', 'blue', 'black', 'yellow'];
  console.log(new Date());
  return (
    <div>
      <h2>MyRef</h2>

      <h3>ref 기본 사용 방법</h3>
      {/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결  */}
      <div>
        <label htmlFor="dname">학과명: </label>
        <input type="text" ref={myDname} id='dname' />
      </div>

      <div>
        <label htmlFor="loc">위치: </label>
        <input type="text" ref={myLoc} id='loc' />
      </div>

      <p>
        입력값 확인: <span ref={myResult}></span>
      </p>

      <button onClick={e => {
        //  컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근가능
        //  --> "참조변수.current" 해당 HTML을 의미하는 JS DOM 객체
        //  --> myDname.current와 document.querySelector(...), document.getElementById(...) 등으로 생성한 객체가 동일한 DOM 객체이다.
        console.log(myDname);
        console.log(myLoc);
        
        const dname = myDname.current.value;
        const loc = myLoc.current.value;
        
        myResult.current.innerHTML = dname + ", " + loc;
      }}>클릭</button>

      
      <button onClick={e => {
        //  이 변수는 갱신되더라도 컴포넌트 함수를 다시 실행시키지 않는다.
        myValue.current++;
        console.log(`myValue= ${myValue.current}`);
      }}>myValue 변경</button>
      <hr />

      <h3>컴포넌트에 ref 적용하기</h3>
      {/* ref 참조변수를 컴포넌트에 전달한다. */}
      <MyBox ref={myBoxRef} />

      {/* <button type='button' onClick={() => {
        // <MyBox>를 통해 myBoxRef를 주입받은 DOM에 접근하여 제어함.
        myBoxRef.current.style.backgroundColor = '#f00';
      }}>Red</button>

      <button type='button' onClick={() => {
        // <MyBox>를 통해 myBoxRef를 주입받은 DOM에 접근하여 제어함.
        myBoxRef.current.style.backgroundColor = '#00f';
      }}>Blue</button> */}
     
      {colorArr.map(v => {
        return (
        <button type='button' onClick={() => {
          myBoxRef.current.style.backgroundColor = v;
        }}>{v.toUpperCase()}</button>
        );
      })}

    </div>
  );
}

export default MyRef;