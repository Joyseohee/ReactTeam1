import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Mypage from "./pages/Mypage";
import MainMoive from './pages/Mainmovie';
import Mypage from "./pages/Mypage";
import Detail from "./pages/Detail";


function App() {


  return (
    <>
      <div className="App">
      <Route path="/detail:id" element={<Detail_joyTest />} />
          <Route path="/review/id" element={<Review_joyTest />} />

          <Route path="/" element={<MainMoive /> }/>
        <Route path='/detail/:id' element={
                <Detail />
            }/>
          <Route path="/" element={<Main like={like} setLike={setLike} />} />
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
