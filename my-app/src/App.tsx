import ResponsiveAppBar from "./Componentes/Navbar/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Experiences } from "./Pages/Experiences/Experiences";
import { Portifolio } from "./Pages/Portifolio/Portifolio";
import { Container } from "@mui/system";
import image from "../src/imgs/background.jpg";
import { Footer } from "./Componentes/Footer";

function App() {
  return (
    <>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
