import React from 'react';
import dayjs from 'dayjs';
/**
 * 
 * useState를 사용하여 날짜 범위 선택 기능 구현
 */
const DateRange1 = () => {
  const day = dayjs();

  /**
   * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고
   * 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언.
   */
  const [myDate, setMyDate] = React.useState({
    startDate: day.format('YYYY-MM-DD'),
    endDate: day.format('YYYY-MM-DD'),
  });
  const dayDD = [7, 15];
  const monthMM = [1, 3, 6];

  return (
    <div>
      <h2>DateRange1</h2>
      <p>
        {myDate.startDate} ~ {myDate.endDate}
      </p>

      <p>
        {/* 일 버튼 */} 
        {/* dayDD =[7,15] */}  
        {dayDD.map(v => {
          return (
            <button
              type='button'
              onClick={(e) => {
                setMyDate({ ...myDate, startDate: day.add(-v, 'd').format('YYYY-MM-DD') });
              }}>
              {v}일
            </button>
          );
        })}
        {/* 월 버튼 */}
        {/* monthMM =[1,3,6] */}  
        {monthMM.map(v => {
          return (
            <button
              type='button'
              onClick={(e) => {
                setMyDate({ ...myDate, startDate: day.add(-v, 'M').format('YYYY-MM-DD') });
              }}>
              {v}개월
            </button>
          );
        })}
      </p>
    </div>
  );
};

export default DateRange1;