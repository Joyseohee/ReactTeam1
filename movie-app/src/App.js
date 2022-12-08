import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Mypage from "./pages/Mypage";
import Detail_joyTest from "./pages/Detail_joyTest";
import Review_joyTest from "./pages/Review_joyTest";
import Main from "./pages/Main";
import RenderMovie from "./movie";

function App() {
  const [movie, setMovie] = useState([]);
  const [like, setLike] = useState([]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/mypage"
            element={
              <Mypage
                movie={movie}
                setMovie={setMovie}
                like={like}
                setLike={setLike}
              />
            }
          />
          <Route path="/detail:id" element={<Detail_joyTest />} />
          <Route path="/review/id" element={<Review_joyTest />} />
          <Route path="/" element={<Main like={like} setLike={setLike} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
