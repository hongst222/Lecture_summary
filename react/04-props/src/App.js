import React from "react";
import {Link, Routes, Route} from 'react-router-dom';

import MyProps from "./Pages/MyProps";
import MyPropTypes from "./Pages/MyPropTypes";
import MyChildren from "./Pages/MyChildren";
import GradeTable from "./Pages/GradeTable";

function App() {
  return (
    <div>
      <h1>04-props</h1>
      <nav>
        <Link to="/myprops">MyProps</Link>&nbsp;&nbsp;
        <Link to="/myproptypes">MyPropTypes</Link>&nbsp;&nbsp;
        <Link to="/mychildren">MyChildren</Link>&nbsp;&nbsp;
        <Link to="/grade_table">GradeTable(demo)</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/myprops" element={<MyProps/>}></Route>
        <Route path="/myproptypes" element={<MyPropTypes/>}></Route>
        <Route path="/mychildren" element={<MyChildren/>}></Route>
        <Route path="/grade_table" element={<GradeTable/>}></Route>
    
      </Routes>
    </div>
  );
}

export default App;
