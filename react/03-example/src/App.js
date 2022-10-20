import React from "react";
import{Link, Routes, Route} from 'react-router-dom';

import DataPath from "./Component/DataPath";

function App() {
  return (
    <div>
      <h1>Exam03</h1>
      <nav>
      <Link to="/dataPath/department">학과정보</Link>&nbsp;&nbsp;
      <Link to="/dataPath/professor">교수정보</Link>&nbsp;&nbsp;
      <Link to="/dataPath/student">학생정보</Link>&nbsp;&nbsp;
      </nav>

      <Routes>
        <Route path = "/datapath/:lN" element = {<DataPath/>}/>
      </Routes>
    </div>
  );
}

export default App;
