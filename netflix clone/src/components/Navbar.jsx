import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        NETFLIX
      </Link>

      {/* Menu */}
      <div className="menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/markets" className="nav-link">Markets</Link>

        {/* Case Studies Dropdown */}
        <div className="dropdown">
          <span className="nav-link">Case Studies</span>
          <div className="dropdown-menu">
            <Link to="/case-studies/seo">SEO</Link>
            <Link to="/case-studies/paid-ads">Paid Ads</Link>
            <Link to="/case-studies/web-projects">Web Projects</Link>
          </div>
        </div>

        <Link to="/contact" className="nav-link">Contact</Link>
      </div>

      {/* Profile */}
      <p className="profile">Abhishek</p>
    </div>
  );
}
