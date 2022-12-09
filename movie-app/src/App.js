<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import "./App.css";
import RenderMovie from "./movie";
import Mypage from "./pages/Mypage";
import { Routes, Route, useNavigate } from "react-router-dom";
import ReviewDetailTest from "./components/ReviewDetailTest";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/" element={<RenderMovie />} />
          <Route path="/ReviewDetailTest" element={<ReviewDetailTest />} />
        </Routes>
      </div>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
