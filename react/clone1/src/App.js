import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Jumbotron from "./common/Jumbotron";
import Main from './pages/Main';
import Meta from "./Meta";
function App() {
  return (
    <div>
      <Meta title='클론코딩1' description='연습문제06' />
      <Navbar/>
      <Jumbotron></Jumbotron>
      <Routes>
        <Route path="/" exact = {true} element = {<Main/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
