
import "./App.css";
import Mypage from "./pages/Mypage";
import DetailPage from "./pages/DetailPage";
import Detail from "./pages/Detail";
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMoive from './pages/Mainmovie';

function App() {

  return ( 
    <div className="App">
      <Routes>
      <Route path="/mypage" element={<Mypage />} />
        <Route path="/" element={<MainMoive /> }/>
        <Route path='/detail/:id' element={
                <Detail />
            }/>
      </Routes>
    </div>

  );
}

export default App;
