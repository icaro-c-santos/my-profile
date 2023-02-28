import ResponsiveAppBar from "./Componentes/Navbar/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Experiences } from "./Pages/Experiences/Experiences";
import { Portifolio } from "./Pages/Portifolio/Portifolio";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
