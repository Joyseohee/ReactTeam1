import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-dom";
import MainMoive from './pages/Mainmovie';


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
      </div>
    </>
  );
}

export default App;
