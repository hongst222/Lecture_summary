import React from 'react'
import Data from '../myschool';
const Professor = () => {
  const data= Data.professor;
  return (
    <div>
      <h2>교수목록</h2>
      <table border='1'>
        <tbody>
          <tr>
            <td ><strong>교수번호</strong></td>
            <td><strong>교수이름</strong></td>
            <td><strong>아이디</strong></td>
            <td><strong>직급</strong></td>
            <td><strong>급여</strong></td>
            <td><strong>입사일</strong></td>
            <td><strong>보직수당</strong></td>
            <td><strong>소속학과번호</strong></td>
          </tr>
          {data.map((v, i) => {
            return (
              <tr>
                <td key={(i+"1")}>{v.id}</td>
                <td key={(i+"2")}>{v.name}</td>
                <td key={(i+"3")}>{v.userid}</td>
                <td key={(i+"4")}>{v.position}</td>
                <td key={(i+"5")}>{v.sal}</td>
                <td key={(i+"6")}>{(v.hiredate).substring(0, 10)}</td>
                <td key={(i+"7")}>{v.comm}</td>
                <td key={(i+"0")}>{v.deptno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Professor;