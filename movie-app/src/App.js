import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./pages/css/App.scss";

import MainTV from "./pages/MainTV";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import DetailTV from "./pages/DetailTV";

import Login from "./pages/Login";
import Join from "./pages/Join";
import ReviewMain from "./pages/ReviewMain";
import Info from "./components/Common/FooterCommon/Info";
import styled, { createGlobalStyle } from "styled-components";
import ResultSearch from "./components/Search/ResultSearch";
import Policy from "./components/Common/FooterCommon/Policy";
import FAQ from "./components/Common/FooterCommon/FAQ";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/tv/detail/:id" element={<DetailTV />} />
          <Route path="/tv" element={<MainTV />} />
          <Route path="/search/:keyword" element={<ResultSearch />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/ReviewMain" element={<ReviewMain />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/FAQ" element={<FAQ />} />
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
