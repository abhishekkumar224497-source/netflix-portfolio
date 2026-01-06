import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShow(current < lastScroll || current < 80);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav style={{ ...nav, transform: show ? "translateY(0)" : "translateY(-100%)" }}>
      <div style={navInner}>
        {/* LOGO */}
        <NavLink to="/" style={logo}>
          NET<span style={{ color: "#e50914" }}>FOLIO</span>
        </NavLink>

        {/* DESKTOP LINKS */}
        <div style={links}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/skills">Skills</NavItem>
          <NavItem to="/testimonials">Testimonials</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/contact" cta>
            Contact
          </NavItem>
        </div>

        {/* MOBILE TOGGLE */}
        <div style={burger} onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={mobileMenu}>
          <MobileLink to="/" onClick={setOpen}>Home</MobileLink>
          <MobileLink to="/about" onClick={setOpen}>About</MobileLink>
          <MobileLink to="/skills" onClick={setOpen}>Skills</MobileLink>
          <MobileLink to="/testimonials" onClick={setOpen}>Testimonials</MobileLink>
          <MobileLink to="/blog" onClick={setOpen}>Blog</MobileLink>
          <MobileLink to="/contact" onClick={setOpen} cta>Contact</MobileLink>
        </div>
      )}
    </nav>
  );
}

/* ================= COMPONENTS ================= */

function NavItem({ to, children, cta }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...navLink,
        ...(cta ? ctaBtn : {}),
        ...(isActive ? active : {}),
      })}
    >
      {children}
    </NavLink>
  );
}

function MobileLink({ to, children, onClick, cta }) {
  return (
    <NavLink
      to={to}
      onClick={() => onClick(false)}
      style={{
        ...mobileLink,
        ...(cta ? ctaBtn : {}),
      }}
    >
      {children}
    </NavLink>
  );
}

/* ================= STYLES ================= */

const nav = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  backdropFilter: "blur(18px)",
  background:
    "linear-gradient(135deg, rgba(10,10,10,0.9), rgba(60,0,0,0.65))",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  transition: "all .45s ease",
};

const navInner = {
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "16px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo = {
  fontSize: "26px",
  fontWeight: "900",
  letterSpacing: "2px",
  color: "white",
  textDecoration: "none",
};

const links = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const navLink = {
  color: "#ddd",
  textDecoration: "none",
  padding: "10px 18px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: "500",
  transition: "all .35s ease",
  background: "rgba(255,255,255,0.06)",
};

const navHover = {
  boxShadow: "0 0 18px rgba(229,9,20,0.55)",
  transform: "translateY(-2px)",
};

const active = {
  background: "rgba(229,9,20,0.25)",
  color: "white",
};

const ctaBtn = {
  background: "linear-gradient(135deg, #e50914, #ff4d4d)",
  color: "white",
  fontWeight: "600",
};

const burger = {
  display: "none",
  fontSize: "26px",
  color: "white",
  cursor: "pointer",
};

const mobileMenu = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  gap: "14px",
  background: "rgba(0,0,0,0.95)",
};

const mobileLink = {
  color: "white",
  textDecoration: "none",
  padding: "14px",
  borderRadius: "12px",
  textAlign: "center",
  background: "rgba(255,255,255,0.05)",
};

const navbar = {
  height: "88px",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  background: "#000",
};