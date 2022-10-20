import React from 'react'
import { useParams } from 'react-router-dom';

import GrandItem from '../components/GradeItem';
import Meta from '../components/Meta';

import Data from '../GradeData';
const GradeTable = () => {
  const params = useParams();
  const listName = params.grade;
  const data = Data[listName+"학년"];

  return (
    <div>
      <Meta title={`${listName}학년 ::: React연습문제`} description={`${listName}학년 성적 정보`} />
      <h2>{listName+"학년 성적"}</h2>
      <table border="1" cellPadding="7">
        <thead>
          <tr align="center">
            <th>이름</th>
            <th>성별</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>과학</th>
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v,i) => {
            return(<GrandItem
              key={i}
              name={v.이름}
              level={v.학년}
              sex={v.성별}
              kor={v.국어}
              eng={v.영어}
              math={v.수학}
              sinc={v.과학}
              />)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable