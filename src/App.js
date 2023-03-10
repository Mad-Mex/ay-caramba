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
import { WhatsappButton } from "./components/WhatsappButton/WhatsappButton";
import "./App.css";





function App() {
  return (
    <>
    <div className="html">
    <BrowserRouter className="html">

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
      <WhatsappButton />
      <Footer />

    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
