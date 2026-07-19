import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Publications from "./pages/Publications";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/certifications"
          element={<Certifications />}
        />
        <Route
  path="/publications"
  element={<Publications />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;