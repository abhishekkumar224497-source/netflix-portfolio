import { useEffect } from "react";

/* ================= MAIN ================= */

export default function WebProjects() {
  return (
    <div style={page}>
      {/* ===== BACKGROUND EFFECTS (FULL PAGE) ===== */}
      <Stars />
      <Comets />

      {/* ================= HERO ================= */}
      <section style={hero}>
        <Moon />

        <h1 style={heroTitle}>Web Projects & Conversion Systems</h1>
        <p style={heroText}>
          Websites are not digital brochures.
          <br />
          They are growth engines built to convert, retain and scale.
        </p>
      </section>

      {/* ================= OVERVIEW ================= */}
      <Section title="How I Think About Web Projects">
        <p style={paragraph}>
          Every web project I work on is designed with one core objective —
          business growth.
          <br /><br />
          From landing pages to full websites, I combine UX psychology,
          performance optimisation, SEO fundamentals and analytics to build
          experiences that guide users toward action.
        </p>
      </Section>

      {/* ================= PROCESS ================= */}
      <Section title="My Web Development Framework">
        <Grid>
          <Card title="1. Goal & Funnel Mapping">
            Understanding business goals, target users and mapping conversion
            paths before design begins.
          </Card>

          <Card title="2. UX & Layout Strategy">
            Clean layouts, visual hierarchy and friction-free navigation.
          </Card>

          <Card title="3. Performance & SEO Ready">
            Fast load times, mobile optimisation, SEO-friendly structure.
          </Card>

          <Card title="4. Analytics & CRO">
            GA4 tracking, conversion events, and optimisation.
          </Card>
        </Grid>
      </Section>

      {/* ================= PROJECT TYPES ================= */}
      <Section title="Types of Web Projects">
        <Grid>
          <Card title="Landing Pages">
            High-converting landing pages for campaigns and ads.
          </Card>

          <Card title="Business Websites">
            Trust-focused brand websites.
          </Card>

          <Card title="Portfolio & Personal Brands">
            Premium portfolios for clients and recruiters.
          </Card>

          <Card title="SEO-Focused Pages">
            Content-led pages for organic growth.
          </Card>
        </Grid>
      </Section>

      {/* ================= IMPACT ================= */}
      <Section title="Project Impact">
        <Grid>
          <Metric value="+20%" label="Higher Conversion Rate" />
          <Metric value="-40%" label="Lower Bounce Rate" />
          <Metric value="3x" label="Lead Growth" />
          <Metric value="<2s" label="Page Load Time" />
        </Grid>
      </Section>

      {/* ================= CTA ================= */}
      <section style={cta}>
        <h2 style={ctaTitle}>Need a website that actually performs?</h2>
        <p style={ctaText}>
          Let’s build a conversion-focused web experience.
        </p>
        <a href="/contact" style={ctaBtn}>Start a Project</a>
      </section>
    </div>
  );
}

/* ================= EFFECTS ================= */

function Moon() {
  return <div style={moon} />;
}

function Stars() {
  return (
    <div style={starsLayer}>
      {Array.from({ length: 160 }).map((_, i) => (
        <span
          key={i}
          style={{
            ...star,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() > 0.8 ? "3px" : "2px",
            height: Math.random() > 0.8 ? "3px" : "2px",
            animationDuration: `${6 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

function Comets() {
  const colors = ["#9b5cff", "#00d9ff", "#3cff8f"];
  return (
    <div style={cometLayer}>
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          style={{
            ...comet,
            top: `${Math.random() * 80}%`,
            animationDelay: `${Math.random() * 12}s`,
            background: `linear-gradient(90deg, transparent, ${
              colors[i % colors.length]
            })`,
          }}
        />
      ))}
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

const hero = {
  position: "relative",
  padding: "120px 60px 80px",
  zIndex: 2,
};

const heroTitle = {
  fontSize: "56px",
  fontWeight: "900",
  marginBottom: "18px",
};

const heroText = {
  fontSize: "18px",
  color: "#cfcfcf",
  maxWidth: "760px",
};

const moon = {
  position: "absolute",
  width: "260px",
  height: "260px",
  borderRadius: "50%",
  background: "#ffffff",
  boxShadow: "0 0 40px rgba(255,255,255,0.35)",
  top: "20px",
  right: "120px",
  opacity: 0.15,
  zIndex: -1,
  animation: "moonFloat 14s ease-in-out infinite, moonRotate 60s linear infinite",
};

const starsLayer = {
  position: "fixed",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
};

const star = {
  position: "absolute",
  background: "#fff",
  borderRadius: "50%",
  opacity: 0.6,
  animation: "starDrift linear infinite alternate",
};

const cometLayer = {
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 1,
};

const comet = {
  position: "absolute",
  left: "-30%",
  width: "220px",
  height: "2px",
  animation: "cometFly 7s linear infinite",
};

const section = {
  padding: "80px 60px",
  position: "relative",
  zIndex: 2,
};

const sectionTitle = {
  fontSize: "38px",
  marginBottom: "40px",
  borderLeft: "6px solid #e50914",
  paddingLeft: "16px",
};

const paragraph = {
  fontSize: "18px",
  color: "#cfcfcf",
  maxWidth: "900px",
  lineHeight: "1.8",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
};

const card = {
  background: "#111",
  padding: "34px",
  borderRadius: "22px",
};

const cardTitle = {
  fontSize: "22px",
  marginBottom: "12px",
};

const cardText = {
  color: "#aaa",
  lineHeight: "1.6",
};

const metric = {
  background: "#111",
  padding: "40px",
  borderRadius: "22px",
  textAlign: "center",
};

const metricValue = {
  fontSize: "42px",
  color: "#e50914",
  fontWeight: "800",
};

const metricLabel = {
  color: "#aaa",
  marginTop: "8px",
};

const cta = {
  padding: "120px 60px",
  textAlign: "center",
};

const ctaTitle = {
  fontSize: "40px",
  marginBottom: "16px",
};

const ctaText = {
  color: "#cfcfcf",
  marginBottom: "30px",
};

const ctaBtn = {
  background: "#e50914",
  padding: "16px 36px",
  borderRadius: "30px",
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
};
