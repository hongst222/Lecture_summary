import React from 'react';

const MyState = () => {
  /**
   *  state(상태)값 정의
   *  - 이 페이지 안에서 유효한 전역변수 같은 개념
   *  - const [변수이름, 변수에대한 setter함수] = React.useStae(변수의 기본값);
   *  - state값은 직접 변경할 수 없고 반드시 setter를 통해서만 변경 가능하다.
   *  - useState() 함수에 전달하는 값은 state값에 대한 초기값이다.
   */
  
  const [myName, setMyName] = React.useState('');
  const [myPoint, setMyPoint] = React.useState(50);

  /** 이벤트 핸들러로 사용될 함수는 컴포넌트 함수 안에서 정의된다. */
  const onMyNameChange = e => {
    setMyName(e.currentTarget.value);
  };


  /**************************중요함*******************/
  //  상태값이 변경될 때 마다 컴포넌트 함수는 매번 재실행된다.
  //  그러므로 컴포넌트 영역은 상태값의 변경에 따라 반복적으로 다시 렌더링 된다.
  //  --> 결국 아래의 출력문은 상태값이 변경될 때마다 반복 출력된다.
  //  상태값은 화면에 출력될 변수에만 사용해야 한다.
  console.log(new Date());
  // Go to MyRef.js 13 line
  /***************************************************/

  return (
    <div>
      <h2>MyState</h2>

      {/* state 값을 출력할 때는 단순히 변수 값으로서 사용한다. */}
      <h3>{myName}님의 점수는 {myPoint}입니다.</h3>
      <hr />

      <div>
        <label  htmlFor="myNameInput">이름: </label>
        <input type="text" id="myNameInput" value={myName} onChange={onMyNameChange} />
      </div>

      <div>
        <label htmlFor="myPointInput">점수</label>
        <input 
          id='myPointInput'
          type="range"
          min='0'
          max='100'
          value={myPoint}
          step='1'

          //이벤트 핸들러를 익명 화살표 함수 형식으로 정의
          onChange={e=> setMyPoint(e.currentTarget.value)}
          />
      </div>
    </div>
  );
};

export default MyState;