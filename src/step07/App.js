// 3.Router적용
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Detail } from './pages/Detail';
import { Navigation } from './components/Navigation';
function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route path="/" extract={true} element={<Home/>}/>
      <Route path="/YS_JAVA01_MOVIE_REACT" element={<Home/>}/>      
      <Route path="/about" element={<About/>}/>
      <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
