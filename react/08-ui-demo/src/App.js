import React from "react";
import  { memo } from 'react';
import { Routes, Route} from 'react-router-dom';

import MenuLink from "./components/MenuLink";
import ImageEx from "./pages/ImageEx";
import StyleEx from "./pages/StyleEx";
import TabEx from "./pages/TabEx";
import SubmenuEx from "./pages/SubmenuEx";
import CollapseEx from "./pages/CollapseEx";
import CreateElementEx from "./pages/CreateElementEx";


const App = memo(() => {
  return (
    <div>
      <h1>UI-Demo</h1>
      
      <nav>
        <MenuLink to='/image_ex'>ImageEX</MenuLink>
        <MenuLink to='/style_ex'>StyleEX</MenuLink>
        <MenuLink to='/tab_ex'>TabEX</MenuLink>
        <MenuLink to='/submenu_ex'>SubmenuEX</MenuLink>
        <MenuLink to='/collapse_ex'>CollapseEX</MenuLink>
        <MenuLink to='/create_element_ex'>CreateElementEX</MenuLink>
      </nav>

      <hr />

      <Routes>
        <Route path = '/image_ex' element={<ImageEx />}/>
        <Route path = '/style_ex' element={<StyleEx />}/>
        <Route path = '/tab_ex' element={<TabEx />}/>
        <Route path = '/submenu_ex' element={<SubmenuEx />}/>
        <Route path = '/collapse_ex' element={<CollapseEx />}/>
        <Route path = '/create_element_ex' element={<CreateElementEx />}/>
      </Routes>
    </div>
  );
});

export default App;
