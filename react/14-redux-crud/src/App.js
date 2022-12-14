import React, { memo} from "react";
import { NavLink, Routes, Route } from 'react-router-dom';

import DepartmentAdd from "./pages/DepartmentAdd";
import DepartmentEdit from "./pages/DepartmentEdit";
import DepartmentList from "./pages/DepartmentList";
import DepartmentView from "./pages/DepartmentView";

const App = memo(() => {
  return (
    <div>
      <h1>Redux-CRUD</h1>
        <NavLink to='/department'>dd</NavLink>
      <hr />
      <Routes>
        <Route path='/department'  element={<DepartmentList/>} />
        <Route path='/department_add' element={<DepartmentAdd/>} />
        <Route path='/department_view/:id' element={<DepartmentView/>} />
        <Route path='/department_edit/:deptno' element={<DepartmentEdit/>} />
      </Routes>
    </div>
  );
});

export default App;
