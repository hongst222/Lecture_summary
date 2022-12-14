import React from "react";
import { Link, Routes, Route } from 'react-router-dom'
import GradeTable from "./pages/GradeTable";
import Meta from './components/Meta';

function App() {
  return (
    <div>
      <Meta title='React연습문제' description='React 연습문제 첫 로드페이지' />
      <h1>성적표</h1>
      <nav>
        <Link to="grade_table/1">1학년</Link>&nbsp;|&nbsp;
        <Link to="grade_table/2">2학년</Link>&nbsp;|&nbsp;
        <Link to="grade_table/3">3학년</Link>&nbsp;|&nbsp;
        <Link to="grade_table/4">4학년</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="grade_table/:grade" element={<GradeTable/>} />
      </Routes>
    </div>
  );
}

export default App;
