import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Markets from "./pages/Markets";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// Resume
import ResumeHome from "./pages/Resume/ResumeHome";
import DubaiResume from "./pages/Resume/Dubai";
import SingaporeResume from "./pages/Resume/Singapore";
import MalaysiaResume from "./pages/Resume/Malaysia";

// Case Studies
import SEO from "./pages/CaseStudies/SEO";
import Graphics from "./pages/CaseStudies/Graphics"; 
import WebProjects from "./pages/CaseStudies/WebProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Resume */}
        <Route path="/resume" element={<ResumeHome />} />
        <Route path="/resume/dubai" element={<DubaiResume />} />
        <Route path="/resume/singapore" element={<SingaporeResume />} />
        <Route path="/resume/malaysia" element={<MalaysiaResume />} />

        {/* Case Studies */}
        <Route path="/case-studies/seo" element={<SEO />} />
        <Route path="/case-studies/graphics" element={<Graphics />} /> 
        <Route path="/case-studies/web-projects" element={<WebProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
