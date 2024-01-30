import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecettesSucrees from "./pages/RecettesSucrees";
import RecettesSalees from "./pages/RecettesSalees";
import Mentions from "./pages/Mentions";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/recettes-veganes-sucrees" element={<RecettesSucrees />} />
        <Route path="/recettes-veganes-salees" element={<RecettesSalees />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
