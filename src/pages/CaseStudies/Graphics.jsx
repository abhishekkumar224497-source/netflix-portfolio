import { useEffect, useRef } from "react";

export default function Graphics() {
  const containerRef = useRef(null);

  useEffect(() => {
    const bubbles = containerRef.current.querySelectorAll(".bubble");
    const drops = containerRef.current.querySelectorAll(".drop");

    // random floating animation
    bubbles.forEach((b) => {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let vx = (Math.random() - 0.5) * 0.3;
      let vy = (Math.random() - 0.5) * 0.3;

      const animate = () => {
        x += vx;
        y += vy;

        if (x < 0 || x > window.innerWidth) vx *= -1;
        if (y < 0 || y > window.innerHeight) vy *= -1;

        b.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    });

    // rain animation
    drops.forEach((d) => {
      let y = Math.random() * window.innerHeight;
      let speed = 2 + Math.random() * 3;

      const fall = () => {
        y += speed;
        if (y > window.innerHeight) y = -50;
        d.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(fall);
      };

      fall();
    });

    // cursor parallax
    const move = (e) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;

      bubbles.forEach((b, i) => {
        const depth = (i % 5 + 1) * 4;
        b.style.marginLeft = `${cx * depth}px`;
        b.style.marginTop = `${cy * depth}px`;
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div style={page}>
      {/* ===== EFFECT LAYER ONLY ===== */}
      <div ref={containerRef} style={effects}>
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="bubble" style={bubble(i)} />
        ))}

        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="drop" style={drop(i)} />
        ))}
      </div>

      {/* ===== YOUR CONTENT (UNCHANGED) ===== */}
      <section style={hero}>
        <h1 style={heroTitle}>Graphics & Creative Case Studies</h1>
        <p style={heroText}>
          High-impact visual systems designed to convert attention into action —
          not just look good.
        </p>
      </section>

      <Section title="My Creative Approach">
        <p style={paragraph}>
          Great design is not decoration — it’s communication.
          <br /><br />
          Every visual I create is rooted in brand psychology, platform behavior
          and conversion intent.
        </p>
      </Section>

      <Section title="My Design Process">
        <Grid>
          <Card title="Brand Understanding">Audience & psychology first.</Card>
          <Card title="Visual Strategy">Hierarchy & clarity.</Card>
          <Card title="Platform Optimisation">Tailored for each platform.</Card>
          <Card title="Testing & Iteration">Data-backed creativity.</Card>
        </Grid>
      </Section>

      <Section title="Creative Impact">
        <Grid>
          <Metric value="+60%" label="Engagement" />
          <Metric value="+40%" label="CTR" />
          <Metric value="2x" label="Recall" />
          <Metric value="-30%" label="CPC" />
        </Grid>
      </Section>

      <section style={cta}>
        <h2 style={ctaTitle}>Need creatives that actually convert?</h2>
        <a href="/contact" style={ctaBtn}>Let’s Build Together</a>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <section style={section}>
      <h2 style={sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function Grid({ children }) {
  return <div style={grid}>{children}</div>;
}

function Card({ title, children }) {
  return (
    <div style={card}>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{children}</p>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div style={metric}>
      <div style={metricValue}>{value}</div>
      <div style={metricLabel}>{label}</div>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  background: "#000",
  color: "white",
  position: "relative",
  overflow: "hidden",
};

const effects = {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
};

const bubble = (i) => ({
  position: "absolute",
  width: 8 + (i % 5) * 6,
  height: 8 + (i % 5) * 6,
  borderRadius: "50%",
  background: "rgba(229,9,20,0.35)",
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
});

const drop = (i) => ({
  position: "absolute",
  width: "2px",
  height: "30px",
  background: "linear-gradient(transparent, rgba(229,9,20,0.6))",
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  opacity: 0.6,
});

const hero = { padding: "70px 20px 40px", position: "relative", zIndex: 2 };
const heroTitle = { fontSize: "56px", fontWeight: "900" };
const heroText = { fontSize: "18px", color: "#cfcfcf", maxWidth: "760px" };

const section = { padding: "80px 60px", position: "relative", zIndex: 2, marginBottom: "40px" };
const sectionTitle = { fontSize: "38px", marginBottom: "40px", borderLeft: "6px solid #e50914", paddingLeft: "16px" };
const paragraph = { fontSize: "18px", color: "#cfcfcf" };

const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" };
const card = { background: "#111", padding: "34px", borderRadius: "22px" };
const cardTitle = { fontSize: "22px" };
const cardText = { color: "#aaa" };

const metric = { background: "#111", padding: "36px", borderRadius: "22px", textAlign: "center", marginTop: "60px" };
const metricValue = { fontSize: "42px", color: "#e50914", fontWeight: "800" };
const metricLabel = { color: "#aaa" };

const cta = {
  padding: "80px 40px 100px",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
};
const ctaTitle = {
  fontSize: "36px",
  marginBottom: "14px",
  lineHeight: "1.3",
};

const ctaText = {
  color: "#cfcfcf",
  marginBottom: "26px",
  maxWidth: "720px",
  marginInline: "auto",
};

const ctaBtn = { background: "#e50914", padding: "16px 36px", borderRadius: "30px", color: "white", textDecoration: "none", marginBottom: "220px" };
