import React, { memo } from 'react';
import GradeEdit from './pages/GradeEdit';
import GradeAdd from './pages/GradeAdd';
import GradeList from './pages/GradeList';
import {Routes, Route} from 'react-router-dom';

const App = memo(() => {
  return (
    <div>
      <h1>12-Axios-Hooks-CRUD</h1>
      <Routes>
        <Route path='/' exapt={true} element={<GradeList/>}> </Route>
        <Route path='/add' element={<GradeAdd/>}> </Route>
        <Route path='/edit/:id' element={<GradeEdit/>}> </Route>
      </Routes>
    </div>
  );
});

export default App;