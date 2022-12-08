import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainMoive from './pages/Mainmovie';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMoive /> }/>
      </Routes>
    </div>
  );
}

export default App;
