import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetallePage from "./pages/DetallePage";
import FormPage from "./pages/FormPage";
import CarritoPage from "./pages/CarritoPage";   // 👈 nueva página
import { CarritoProvider } from "./context/CarritoContext";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detalle/:id" element={<DetallePage />} />
          <Route path="/crear" element={<FormPage />} />
          <Route path="/carrito" element={<CarritoPage />} /> {/* 👈 */}
        </Routes>
        <Footer />
      </Router>
    </CarritoProvider>
  );
}

export default App;
