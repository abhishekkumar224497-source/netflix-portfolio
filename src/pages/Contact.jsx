import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    issue: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent("Free Business Consultation Request");
    const body = encodeURIComponent(
      `Name: ${form.name}\n\nContact Number: ${form.phone}\n\nBusiness Issue:\n${form.issue}`
    );

    window.location.href = `mailto:abhishekkumar224497@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div style={page}>
      {/* ================= HERO ================= */}
      <section style={hero}>
        <h1 style={heroTitle}>Free Business Consultation</h1>
        <p style={heroText}>
          Tell me what’s holding your business back.
          <br />
          I’ll personally analyse it and guide you — no cost, no obligation.
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section style={formSection}>
        <div style={formWrapper}>
          <h2 style={formTitle}>Describe Your Business Challenge</h2>
          <p style={formSubtitle}>
            Traffic, conversions, ads, branding, website performance — explain it briefly.
          </p>

          <form onSubmit={handleSubmit} style={formBox}>
            <div style={field}>
              <label style={label}>Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                style={input}
              />
            </div>

            <div style={field}>
              <label style={label}>Contact Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="WhatsApp / Mobile number"
                required
                style={input}
              />
            </div>

            <div style={field}>
              <label style={label}>Your Business Issue</label>
              <textarea
                name="issue"
                value={form.issue}
                onChange={handleChange}
                placeholder="Briefly explain your problem"
                required
                rows="5"
                style={textarea}
              />
            </div>

            <button type="submit" style={button}>
              Get Free Consultation
            </button>
          </form>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section style={trust}>
        <div style={grid}>
          <TrustCard
            title="100% Free"
            text="No sales pitch. Just honest advice tailored to your business."
          />
          <TrustCard
            title="Personal Review"
            text="Every submission is reviewed personally by me."
          />
          <TrustCard
            title="Clear Action Steps"
            text="You’ll know exactly what to fix and what to scale."
          />
        </div>
      </section>

      {/* ===== BACKGROUND ANIMATION ===== */}
      <style>{`
        @keyframes earthRotate {
          from { background-position: 0 0; }
          to { background-position: 2000px 0; }
        }

        @keyframes starsMove {
          from { background-position: 0 0, 0 0, 0 0; }
          to { background-position: -2000px 2000px, 1500px -1500px, 800px 800px; }
        }
      `}</style>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function TrustCard({ title, text }) {
  return (
    <div style={trustCard}>
      <h3 style={trustTitle}>{title}</h3>
      <p style={trustText}>{text}</p>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  backgroundColor: "#000",
  color: "white",
  minHeight: "100vh",

  /* 🌍 EARTH + ⭐ STARS */
  backgroundImage: `
    url("https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"),
    radial-gradient(1px 1px at 20% 30%, white, transparent),
    radial-gradient(1px 1px at 80% 60%, white, transparent),
    radial-gradient(2px 2px at 50% 90%, white, transparent)
  `,
  backgroundRepeat: "no-repeat, repeat, repeat, repeat",
  backgroundSize: "700px 700px, auto, auto, auto",
  backgroundPosition: "right -200px bottom -200px, 0 0, 0 0, 0 0",

  animation: "earthRotate 50s linear infinite, starsMove 180s linear infinite",
};

const hero = {
  padding: "120px 20px 60px",
  textAlign: "center",
};

const heroTitle = {
  fontSize: "52px",
  fontWeight: "900",
  marginBottom: "16px",
};

const heroText = {
  fontSize: "18px",
  color: "#cfcfcf",
  maxWidth: "760px",
  margin: "0 auto",
};

const formSection = {
  padding: "40px 20px 80px",
  display: "flex",
  justifyContent: "center",
};

const formWrapper = {
  maxWidth: "620px",
  width: "100%",
};

const formTitle = {
  fontSize: "34px",
  marginBottom: "10px",
};

const formSubtitle = {
  color: "#aaa",
  marginBottom: "30px",
};

const formBox = {
  background: "#111",
  padding: "40px",
  borderRadius: "24px",
};

const field = {
  marginBottom: "22px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  color: "#ddd",
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #222",
  background: "#000",
  color: "white",
};

const textarea = {
  ...input,
  resize: "none",
};

const button = {
  width: "100%",
  padding: "16px",
  borderRadius: "30px",
  border: "none",
  background: "#e50914",
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};

const trust = {
  padding: "60px 20px 100px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "24px",
  maxWidth: "1000px",
  margin: "0 auto",
};

const trustCard = {
  background: "#111",
  padding: "30px",
  borderRadius: "22px",
};

const trustTitle = {
  fontSize: "20px",
  marginBottom: "10px",
};

const trustText = {
  color: "#aaa",
};
