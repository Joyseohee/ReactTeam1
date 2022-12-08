import "./App.css";
import RenderMovie from "./movie";
import Mypage from "./pages/Mypage";
import DetailPage from "./pages/DetailPage";
import Detail from "./pages/Detail";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/" element={<RenderMovie />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path='/detail/:id' element={
                <Detail />
            }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
