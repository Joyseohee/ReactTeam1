
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import Mypage from "./pages/Mypage";
import MainMoive from './pages/Mainmovie';

function App() {
  return ( 
    <div className="App">
      <Routes>
      <Route path="/mypage" element={<Mypage />} />
        <Route path="/" element={<MainMoive /> }/>
      </Routes>
    </div>
  );
}

export default App;
