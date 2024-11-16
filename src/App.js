import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Clientes from "./components/pages/Clientes";
import NovosClientes from "./components/pages/NovosClientes";

import NavBar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/novosclientes" element={<NovosClientes />} />
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
