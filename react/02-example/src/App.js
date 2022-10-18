
import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Weather from "./pages/Weather";

function App() {
  return (
    <div>
      <h1>주간 날씨</h1>
      <hr />
      <nav>

        <Link to="/" >[Home]</Link><p></p>
        {/* --- PATH 파라미터를 포함하는 링크 구성 --- */}
        <Link to="/weather/mon">월</Link>&nbsp; | &nbsp;
        <Link to="/weather/tue">화</Link>&nbsp; | &nbsp;
        <Link to="/weather/wed">수</Link>&nbsp; | &nbsp;
        <Link to="/weather/thu">목</Link>&nbsp; | &nbsp;
        <Link to="/weather/fri">금</Link>&nbsp; | &nbsp;
        <Link to="/weather/sat">토</Link>&nbsp; | &nbsp;
        <Link to="/weather/sun">일</Link>

      </nav>
      {/* --- 페이지 역할을 할 컴포넌트 명시하기 --- */}
      <Routes>
        <Route path="/" element={<Weather />} exact={true} />

        {/* Path 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다. */}
        <Route path="/weather/:day" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
