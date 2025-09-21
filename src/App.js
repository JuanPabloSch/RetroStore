import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetallePage from "./pages/DetallePage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detalle/:id" element={<DetallePage />} />
        <Route path="/crear" element={<FormPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
