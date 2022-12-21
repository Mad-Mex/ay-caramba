import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import './App.css';
import { FiguresPage } from './pages/FiguresPage/FiguresPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/figuras' element={ <FiguresPage /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
