import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainTV from "./pages/MainTV";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";
import DetailTV from "./pages/DetailTV";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Error from "./pages/Error";

import Info from "./components/Common/FooterCommon/Info";
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
          <Route path="/Info" element={<Info />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

// 컴포넌트 넘치는 페이지 전체 배경색 주기
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
  }
`;
// 전체 페이지 너비 설정
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
