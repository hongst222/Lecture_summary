import React from 'react';
import Data from '../myschool';
const Student = () => {
  const data = Data.student;
  return (
    <div>
      <h2>학생목록</h2>
      <table border="1">
        <tbody>
          <tr>
            <td><strong>학생번호</strong></td>
            <td><strong>학생이름</strong></td>
            <td><strong>학년</strong></td>
            <td><strong>아이디</strong></td>
            <td><strong>주민번호</strong></td>
            <td><strong>생년월일</strong></td>
            <td><strong>연락처</strong></td>
            <td><strong>키</strong></td>
            <td><strong>몸무게</strong></td>
            <td><strong>소속학과번호</strong></td>
            <td><strong>담당교수번호</strong></td>
          </tr>
          {data.map((v,i) => {
            return(
              <tr>
                <td key={(i+"0")}>{v.id}</td>
                <td key={(i+"1")}>{v.name}</td>
                <td key={(i+"2")}>{v.userid}</td>
                <td key={(i+"3")}>{v.grade}</td>
                <td key={(i+"4")}>{(v.idnum).substring(0,6)+"-********"}</td>
                <td key={(i+"5")}>{v.birthdate}</td>
                <td key={(i+"6")}>{v.tel}</td>
                <td key={(i+"7")}>{v.height}</td>
                <td key={(i+"8")}>{v.weight}</td>
                <td key={(i+"9")}>{v.deptno}</td>
                <td key={(i+"00")}>{v.profno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;