import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recettes from "./pages/Recettes";
import Mentions from "./pages/Mentions";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/recettes-veganes" element={<Recettes />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
