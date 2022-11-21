import React from "react";
import Top from "./components/Top";
import Covid19 from "./pages/Covid19";
import { Route, Routes, useParams, useState } from 'react-router-dom';

const App = () => {
  
  return (
    <div >
      <Top />
      <Routes>
        <Route path='/covid19/*' element={<Covid19 />} />
      </Routes>
      

    </div>
  );
}

export default App;
