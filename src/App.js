import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { FiguresPage } from "./pages/FiguresPage/FiguresPage";
import { PaintingsPage } from "./pages/PaintingsPage/PaintingsPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { ScrollToTop } from "./components/Navigation/ScrollToTop/ScrollToTop";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoria/figuras" element={<FiguresPage />} />
        <Route path="/categoria/cuadros" element={<PaintingsPage />} />
        <Route path="/detalle/figuras" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
