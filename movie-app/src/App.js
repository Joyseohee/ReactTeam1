import "./App.module.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMoive from "./pages/Mainmovie";
import MainTest from "./pages/MainTest";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import Main from "./pages/MainTest";
import ClickLikes from "./components/Detail/ClickLikes";
import Likes from "./components/Mypage/Likes";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMoive />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/test" element={<MainTest />} />
          <Route path="/mypage/likes/:id" element={<Likes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
