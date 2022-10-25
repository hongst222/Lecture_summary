import React from 'react';
import dayjs from 'dayjs';

/**
 * useReduce() 기능을 사용하여 상황에 따라 state값을 다르게 설정하는 함수
 * @param {object} state - 현재 화면에 표시되고 있는 상태 값
 * @param {string} action - 날짜 간격을 의미하는 문자열
 * @returns 화면을 갱신할 상태값을 담고 있는 json 객체
 */

const arrDM = ['DAY7', 'DAY15', 'MONTH1', 'MONTH3', 'MONTH6'];

const setDateValue = (state, action) => {
  const day = dayjs();

  let sdate = null;

  switch (action) {
    case arrDM[0]:
      sdate = day.add(-7, 'd').format('YYYY-MM-DD');
      break;
    case arrDM[1]:
      sdate = day.add(-15, 'd').format('YYYY-MM-DD');
      break;
    case arrDM[2]:
      sdate = day.add(-1, 'M').format('YYYY-MM-DD');
      break;
    case arrDM[3]:
      sdate = day.add(-3, 'M').format('YYYY-MM-DD');
      break;
    case arrDM[4]:
      sdate = day.add(-6, 'M').format('YYYY-MM-DD');
      break;
    default:
      sdate = day.format('YYYY-MM-DD');
      break;
  }
  return { ...state, startDate: sdate };
};

const DateRange2 = () => {
  const day = dayjs();
  const [myDate, setMyDate] = React.useReducer(setDateValue, {
    startDate: day.format('YYYY-MM-DD'),
    endDate: day.format('YYYY-MM-DD'),
  });
  
  return (
    <div>
      <h2>DateRange2</h2>
      <p>
        {myDate.startDate} ~ {myDate.endDate}
      </p>
      <p>
        {arrDM.map((v,i) => {
          return(
            <button key={i} type='button' onClick={e => setMyDate(v)}>
              {v[0] === 'D'?v.substring(3)+"일": v.substring(5)+"개월"}
              </button>
          );
        })}
      </p>
      <p>


      </p>
    </div>
  )
}

export default DateRange2