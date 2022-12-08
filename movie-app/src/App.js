import "./App.css";
import RenderMovie from "./movie";
import Mypage from "./pages/Mypage";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/" element={<RenderMovie />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
