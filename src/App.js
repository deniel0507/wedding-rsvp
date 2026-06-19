import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import MainResume from './screen/MainResume';
import Skills from './screen/Skills';
import { MainPage } from './screen/MainPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainResume/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/mainPage" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
