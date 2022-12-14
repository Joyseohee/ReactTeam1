import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./pages/css/App.scss";
import MainMoive from "./pages/Mainmovie";
import MainTV from "./pages/MainTV";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import DetailTV from "./pages/DetailTV";
import Likes from "./pages/Likes";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Join from "./pages/Join";
import MyReview from "./pages/MyReview";
import Search from "./pages/Search";
import ReviewMain from "./pages/ReviewMain";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMoive />} />
          <Route path="/tv" element={<MainTV />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/tv/detail/:id" element={<DetailTV />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myreview" element={<MyReview />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/join" element={<Join />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ReviewMain" element={<ReviewMain />} />
        </Routes>
      </div>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
