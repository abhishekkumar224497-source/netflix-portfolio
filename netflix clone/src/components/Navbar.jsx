import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide / show navbar on scroll (Netflix style)
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div className={`navbar ${show ? "show" : "hide"}`}>
      
      {/* Logo */}
      <Link to="/" className="logo">
        NETFOLIO
      </Link>

      {/* Main Menu */}
      <div className="menu">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/resume" className="nav-link">Resume</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/markets" className="nav-link">Markets</NavLink>

        {/* Case Studies Dropdown */}
        <div className="dropdown">
          <span className="nav-link">Case Studies</span>
          <div className="dropdown-menu">
            <Link to="/case-studies/seo">SEO</Link>
            <Link to="/case-studies/paid-ads">Paid Ads</Link>
            <Link to="/case-studies/web-projects">Web Projects</Link>
          </div>
        </div>

        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>

      {/* Profile Dropdown */}
      <div className="dropdown profile-dropdown">
        <span className="profile">Abhishek ⌄</span>
        <div className="dropdown-menu right">
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
