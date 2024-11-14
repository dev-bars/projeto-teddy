import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Clientes from "./components/pages/Clientes";
import NovosClientes from "./components/pages/NovosClientes";

function App() {
  return (
    <Router>
      <div>
        <Link to='./'>Home</Link>
        <Link to='./Clientes'>Clientes</Link>
        <Link to='./NovosClientes'>Novos Clientes</Link>
      </div>
       
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
