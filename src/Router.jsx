import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
