import React, { memo } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";

import ProfessorList from "./pages/ProfessorList";
import ProfessorAdd from "./pages/ProfessorAdd";
import ProfessorView from "./pages/ProfessorView";
import ProfessorEdit from "./pages/ProfessorEdit";

import StudentAdd from "./pages/StudentAdd";
import StudentEdit from "./pages/StudentEdit";
import StudentList from "./pages/StudentList";
import StudentView from "./pages/StudentView";

import TrafficAdd from "./pages/TrafficAdd";
import TrafficEdit from "./pages/TrafficEdit";
import TrafficList from "./pages/TrafficList";
import TrafficView from "./pages/TrafficView";

const App = memo(() => {
  return (
    <div>
      <nav>
        <NavLink to='/' exapt='true' style={{ textDecoration: 'none', color: 'black' }}><h1>Redux-CRUD 연습문제</h1></NavLink>
        <hr />
        <MenuLink to='/professor'>Professor</MenuLink>
        <MenuLink to='/student'>Student</MenuLink>
        <MenuLink to='/traffic'>Traffic</MenuLink>

        {/* <MenuLink to = '/student'>Student</MenuLink>&nbsp;|
        <MenuLink to = '/traffic_acc'>Traffic</MenuLink>&nbsp; */}
      </nav>
      <hr />

      <Routes>

        {/* professor */}
        <Route path="/professor" element={<ProfessorList />} />
        <Route path="/professor_add" element={<ProfessorAdd />} />
        <Route path="/professor_view/:id" element={<ProfessorView />} />
        <Route path="/professor_edit/:id" element={<ProfessorEdit />} />

        {/* student */}
        <Route path="/student" element={<StudentList />} />
        <Route path="/student_add" element={<StudentAdd />} />
        <Route path="/student_view/:id" element={<StudentView />} />
        <Route path="/student_edit/:id" element={<StudentEdit />} />

        {/* traffic */}
        <Route path="/traffic" element={<TrafficList />} />
        <Route path="/traffic_add" element={<TrafficAdd />} />
        <Route path="/traffic_view/:id" element={<TrafficView />} />
        <Route path="/traffic_edit/:id" element={<TrafficEdit />} />

      </Routes>
    </div>
  );
});

export default App;
