import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import './App.css';
import { FiguresPage } from './pages/FiguresPage/FiguresPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/figuras' element={ <FiguresPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
