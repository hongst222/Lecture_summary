import React from 'react'
/**
 * useReduce에 의해 호출될 사용자 정의 함수
 * --> action값이 00일때 state값을 ~~~해라.
 * --> action값의 DataType은 개발자가 결정할 수 있다.
 * --> state값의 DataType역시 개발자가 결정할 수 있다.  
 * @param {int} state - 상태값 (useState의 state값과 동일)
 * @param {string} action - 어떤 동작인지에 대한 구분
 * 
 */
const act = ['UP', 'Down', ''];
function setCounterValue(state, action) {
  
  //  action값의 상태에 따른 state값의 가공 처리를 분기
  switch (action) {
    case 'UP':
      state++;
      console.log("[%o] %o", action, state);
      return state;
    case 'Down':
      state--;
      console.log("[%o] %o", action, state);
      return state;
    default:
      return 0;
  }

}

const MyReducer = () => {
  const [myCounter, setMyCounter] = React.useReducer(setCounterValue, 0);

  return (
    <div>
      <h2>MyReducer</h2>
      <p>현재 카운트 값: {myCounter}</p>
      {act.map((v,i) => {
        return (
          <button key = {i} type='button' onClick={e => setMyCounter(v)}>
            {v!=''? v : 'RESET'}
          </button>
        );
      })}
    </div>
  )
}

export default MyReducer;