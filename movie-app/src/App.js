
import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMoive from './pages/Mainmovie';
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";



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
         
          <Route path="/" element={<MainMoive /> }/>
        <Route path='/detail/:id' element={
                <Detail />
            }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
