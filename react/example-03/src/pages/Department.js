import React from 'react'
import Data from '../myschool'

const department = () => {
  const data = Data.department;
  return (
    <div>
      <h2>학과목록</h2>
      <table border="1">
        <tbody>
          <tr>
            <td><strong>학과번호</strong></td>
            <td><strong>학과이름</strong></td>
            <td><strong>위치</strong></td>
          </tr>
          {data.map((v,i) => {
            return(
              <tr>
                <td key={(i+"0")}>{v.id}</td>
                <td key={(i+"1")}>{v.dname}</td>
                <td key={(i+"2")}>{v.loc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default department;