import "./App.module.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMoive from "./pages/Mainmovie";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import Likes from "./components/Mypage/Likes";
import MyReview from "./components/Mypage/MyReview";
import ReviewMain from "./pages/ReviewMain";

import Search from "./pages/Search";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMoive />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myreview" element={<MyReview />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/mypage/likes/:id" element={<Likes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ReviewMain" element={<ReviewMain />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
