import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    let raf = null;

    const move = (e) => {
      if (window.innerWidth < 768) return;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 18;
        const y = (e.clientY / window.innerHeight - 0.5) * 18;
        document.documentElement.style.setProperty("--px", `${x}px`);
        document.documentElement.style.setProperty("--py", `${y}px`);
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div style={page}>
      {/* ===== FULL PAGE STARS ===== */}
      <div className="stars layer1" />
      <div className="stars layer2" />
      <div className="stars layer3" />

      {/* ===== JUPITER ===== */}
      <div className="planet-wrap">
        <div className="lens-flare" />
        <div className="jupiter">
          <div className="clouds" />
        </div>
      </div>

      {/* ================= ABOUT ME ================= */}
      <section style={hero}>
        <h1 style={title}>
          About <span style={{ color: "#e50914" }}>Me</span>
        </h1>

        <p style={text}>
          I’m Abhishek Kumar — a growth-focused digital marketer who believes that
          great marketing is not about noise, trends or shortcuts, but about
          building systems that consistently deliver value.
        </p>

        <p style={text}>
          Over 6 years, I’ve worked across social media manager, performance
          marketer, digital marketer, content marketer, paid media, analytics
          and conversion optimisation, helping brands move from scattered efforts
          to structured growth.
        </p>

        <p style={text}>
          My approach blends creativity with logic — understanding people first,
          platforms second and tools last.
        </p>
      </section>

      {/* ================= VISION ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>My Vision</h2>
        <p style={text}>
          My vision is to help brands grow with clarity and confidence in an
          increasingly crowded digital landscape.
        </p>
      </section>

      {/* ================= FUTURE GOALS ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>My Future Goals</h2>
        <p style={text}>
          Ultimately, I want my work to leave behind systems that continue to
          perform even after campaigns end.
        </p>
      </section>

      {/* ================= WHY ME ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>How I Will Be Your Best Choice</h2>
        <ul style={list}>
          <li>Clear goals, clear execution</li>
          <li>Long-term performance focus</li>
          <li>Scalable growth systems</li>
          <li>Transparent collaboration</li>
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section style={cta}>
        <h2 style={ctaTitle}>Ready to Build Sustainable Growth?</h2>
        <p style={ctaText}>
          Let’s discuss how structured marketing systems can unlock your
          business potential.
        </p>
        <a href="/contact" style={ctaBtn}>Get Free Consultation</a>
      </section>
    </div>
  );
}

/* ================= BASE STYLES ================= */

const page = {
  position: "relative",
  background: "#000",
  color: "white",
  padding: "80px 60px",
  minHeight: "100vh",
  overflow: "hidden",
};

const hero = { maxWidth: "900px", marginBottom: "100px", position: "relative", zIndex: 2 };
const title = { fontSize: "54px", fontWeight: "800", marginBottom: "30px" };
const section = { maxWidth: "900px", marginBottom: "100px", position: "relative", zIndex: 2 };
const sectionTitle = {
  fontSize: "34px",
  marginBottom: "25px",
  borderLeft: "5px solid #e50914",
  paddingLeft: "15px",
};
const text = { fontSize: "18px", lineHeight: "1.9", color: "#cfcfcf", marginBottom: "18px" };
const list = { paddingLeft: "20px", fontSize: "18px", lineHeight: "1.9", color: "#cfcfcf" };

const cta = { textAlign: "center", padding: "120px 20px", position: "relative", zIndex: 2 };
const ctaTitle = { fontSize: "40px", marginBottom: "16px" };
const ctaText = { color: "#cfcfcf", marginBottom: "30px", fontSize: "18px" };
const ctaBtn = {
  background: "#e50914",
  padding: "16px 38px",
  borderRadius: "30px",
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
};

/* ================= SPACE & JUPITER ================= */
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    :root { --px: 0px; --py: 0px; }

    /* FULL PAGE STARS */
    .stars {
      position: fixed;
      inset: 0;
      background-image:
        radial-gradient(1px 1px at 10% 20%, #fff, transparent),
        radial-gradient(1px 1px at 30% 80%, #fff, transparent),
        radial-gradient(1px 1px at 70% 40%, #fff, transparent),
        radial-gradient(1px 1px at 90% 90%, #fff, transparent);
      background-size: 1200px 1200px;
      animation: starScroll linear infinite;
      z-index: 0;
      opacity: 0.6;
      pointer-events: none;
    }

    .layer1 { animation-duration: 180s; }
    .layer2 { animation-duration: 260s; opacity: 0.4; }
    .layer3 { animation-duration: 360s; opacity: 0.25; }

    @keyframes starScroll {
      from { transform: translateY(0); }
      to { transform: translateY(-2000px); }
    }

    /* JUPITER */
    .planet-wrap {
      position: fixed;
      right: -340px;
      top: 50%;
      width: 860px;
      height: 860px;
      transform:
        translateY(-50%)
        translate(var(--px), var(--py));
      pointer-events: none;
      z-index: 1;
      will-change: transform;
    }

    .jupiter {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg");
      background-size: cover;
      animation: spin 140s linear infinite;
      box-shadow:
        inset -180px 0 260px rgba(0,0,0,0.85),
        0 0 160px rgba(255,200,140,0.08);
    }

    .clouds {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: repeating-linear-gradient(
        90deg,
        rgba(255,255,255,0.05) 0%,
        rgba(255,255,255,0.14) 12%,
        rgba(255,255,255,0.05) 24%
      );
      mix-blend-mode: overlay;
      animation: cloudSpin 90s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes cloudSpin {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }

    /* SUBTLE LENS FLARE */
    .lens-flare {
      position: absolute;
      width: 420px;
      height: 420px;
      background: radial-gradient(circle, rgba(255,220,160,0.16), transparent 70%);
      top: 10%;
      left: -12%;
      filter: blur(14px);
    }

    /* MOBILE */
    @media (max-width: 768px) {
      .planet-wrap {
        width: 420px;
        height: 420px;
        right: -180px;
      }
    }
  `;
  document.head.appendChild(style);
}
