import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMoive from "./pages/Mainmovie";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import Likes from "./pages/Likes";
import Login from "./pages/Login";
import MyReview from "./pages/MyReview";
import Search from "./pages/Search";
import ReviewMain from "./pages/ReviewMain";

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
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ReviewMain" element={<ReviewMain />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
