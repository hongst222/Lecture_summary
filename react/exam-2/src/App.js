import React, { memo } from 'react';
import Top from '../../react-exam/src/components/Top';
import { Routes, Route } from 'react-router-dom';
import covid19 from './pages/Covid19';

const App = memo(() => {
  return (
    <div >
      <Top />
      <Routes>
        <Route path='/covid19/*' element={<Covid19 />} />
      </Routes>


    </div>
  );
});

export default App;