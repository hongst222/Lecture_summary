import React from "react";
import MenuLink from "./components/MenuLink";
import {Routes, Route} from 'react-router-dom';
import News from "./pages/News";
import Department from "./pages/Department";
import Professor from "./pages/Professor";
const App = () => {
  return (
    <div>
      <h2>SimpleAjax</h2>

      <nav>
        <MenuLink to ='/news'>뉴스목록</MenuLink>
        <MenuLink to ='/department'>학과관리</MenuLink>
        <MenuLink to ='/professor'>교수관리</MenuLink>
      </nav>

      <hr />

      <Routes>
        <Route path='/news' element={<News/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/professor' element={<Professor/>}/>
      </Routes>
    </div>
  );
}

export default App;
