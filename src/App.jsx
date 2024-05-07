import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

import Contact from "./pages/Contact";
import Navbar1 from "./components/Navbar";
import Cards from "./pages/Cards";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/fifa1/" element={<Cards />} />
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
