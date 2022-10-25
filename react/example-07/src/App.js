import React from "react";
import { Routes, Route } from 'react-router-dom';

import MenuLink from "./components/MenuLink";
import PrintStar from "./pages/PrintStar";
import Calc from "./pages/Calc";

function App() {
  return (
    <div >
      <h1>07-hook-event</h1>
      <nav>
        <MenuLink to='/printstar'>PrintStar</MenuLink>
        <MenuLink to='/calc'>Calc</MenuLink>
      </nav>

      <hr />

      <Routes>
        <Route path='/printstar' element={<PrintStar/>}></Route>
        <Route path='/calc' element={<Calc/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

