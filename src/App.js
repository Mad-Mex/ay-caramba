import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { FiguresPage } from "./pages/FiguresPage/FiguresPage";
import { PicturesPage } from "./pages/PicturesPage/PicturesPage";
import { AboutUsPage } from "./pages/AboutUsPage/AboutUsPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { FigureDetailPage } from "./pages/FigureDetailPage/FigureDetailPage";
import { PicturesDetailPage } from "./pages/PicturesDetailPage/PicturesDetailPage";
import { ScrollToTop } from "./components/Navigation/ScrollToTop/ScrollToTop";
import "./App.css";




function App() {
  return (
    <BrowserRouter>
     
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoria/figuras" element={<FiguresPage />} />
        <Route path="/categoria/cuadros" element={<PicturesPage />} />
        <Route path="/detalle/figuras/:id" element={<FigureDetailPage /> } />
        <Route path="/detalle/cuadros/:id" element={ <PicturesDetailPage /> } /> 
        <Route path="/nosotros" element={ <AboutUsPage /> }  />
        <Route path="/contacto" element={ <ContactPage /> }  />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
