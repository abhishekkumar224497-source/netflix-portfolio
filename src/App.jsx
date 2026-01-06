import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // 👈 FIXED CASE

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Wokr from "./pages/Wokr";
import Markets from "./pages/Markets";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// Case Studies
import SEO from "./pages/CaseStudies/SEO";
import Graphics from "./pages/CaseStudies/Graphics";
import WebProjects from "./pages/CaseStudies/WebProjects";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main
        style={{
          paddingTop: "72px",
          backgroundColor: "#000",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/wokr" element={<Wokr />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/case-studies/seo" element={<SEO />} />
          <Route path="/case-studies/graphics" element={<Graphics />} />
          <Route
            path="/case-studies/web-projects"
            element={<WebProjects />}
          />
        </Routes>
      </main>
    </Router>
  );
}
