import { useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([
    {
      name: "Phill Russ Founder, Tung IT(SAAS)",
      location: "Singapore",
      text:
        "Abhishek understands growth deeply. From SEO to paid media, everything was structured and measurable."
    },
    {
      name: "Reves gauz",
      location: "Malaysia",
      text:
        "Our visibility and conversions improved massively. Very strategic and reliable marketer."
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    location: "",
    text: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitReview(e) {
    e.preventDefault();
    if (!form.name || !form.text) return;

    // 👉 EMAIL INTEGRATION
    const subject = encodeURIComponent("New Website Review");
    const body = encodeURIComponent(
      `Name: ${form.name}\nLocation: ${form.location}\n\nReview:\n${form.text}`
    );

    window.location.href = `mailto:abhishekkumar224497@gmail.com?subject=${subject}&body=${body}`;

    // Optional: local preview add
    setReviews([{ ...form }, ...reviews]);
    setForm({ name: "", location: "", text: "" });
  }

  return (
    <div style={page}>
      {/* ================= HERO ================= */}
      <section style={hero}>
        <h1 style={heroTitle}>Testimonials & Reviews</h1>
        <p style={heroText}>
          Feedback from founders, marketers, and teams I’ve worked with across
          different industries and markets.
        </p>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <Section title="What People Say">
        <Grid>
          {reviews.map((r, i) => (
            <Testimonial
              key={i}
              name={r.name}
              location={r.location}
              text={r.text}
            />
          ))}
        </Grid>
      </Section>

      {/* ================= REVIEW FORM ================= */}
      <Section title="Leave a Review">
        <form style={formBox} onSubmit={submitReview}>
          <input
            style={input}
            name="name"
            placeholder="Your Name / Company"
            value={form.name}
            onChange={handleChange}
          />

          <input
            style={input}
            name="location"
            placeholder="Location (optional)"
            value={form.location}
            onChange={handleChange}
          />

          <textarea
            style={textarea}
            name="text"
            placeholder="Write your review..."
            value={form.text}
            onChange={handleChange}
          />

          <button style={submitBtn}>Submit Review</button>

          <p style={note}>
            *-* I appreciate your honest review.
          </p>
        </form>
      </Section>

      {/* ================= CTA ================= */}
      <section style={cta}>
        <h2 style={ctaTitle}>Want results worth reviewing?</h2>
        <p style={ctaText}>
          Let’s build something impactful together.
        </p>
        <a href="/contact" style={ctaBtn}>Work With Me</a>
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

function Testimonial({ name, location, text }) {
  return (
    <div style={testimonial}>
      <p style={quote}>"{text}"</p>
      <div style={author}>
        <strong>{name}</strong>
        {location && <span style={locationText}>{location}</span>}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  backgroundColor: "#000",
  color: "white",

  /* 🌌 STARS + PLANETS (BACKGROUND ONLY) */
  backgroundImage: `
    radial-gradient(1px 1px at 10% 20%, #fff, transparent),
    radial-gradient(1px 1px at 80% 30%, #fff, transparent),
    radial-gradient(2px 2px at 50% 70%, #fff, transparent),
    url("https://upload.wikimedia.org/wikipedia/commons/5/56/Mars_Valles_Marineris.jpeg"),
    url("https://upload.wikimedia.org/wikipedia/commons/c/c7/Jupiter_by_Cassini-Huygens.jpg"),
    url("https://upload.wikimedia.org/wikipedia/commons/2/2d/Saturn_in_natural_color.jpg"),
    url("https://upload.wikimedia.org/wikipedia/commons/e/e1/Neptune_Full.jpg")
  `,
  backgroundRepeat: "repeat, repeat, repeat, no-repeat, no-repeat, no-repeat, no-repeat",
  backgroundSize: "auto, auto, auto, 260px, 340px, 380px, 240px",
  backgroundPosition:
    "0 0, 0 0, 0 0, 5% 80%, 90% 20%, 70% 90%, 15% 25%",
  animation: "starsMove 200s linear infinite"
};

const hero = { padding: "120px 60px 80px" };

const heroTitle = { fontSize: "56px", fontWeight: "900" };

const heroText = {
  color: "#cfcfcf",
  maxWidth: "760px",
  marginTop: "12px"
};

const section = { padding: "80px 60px" };

const sectionTitle = {
  fontSize: "38px",
  marginBottom: "40px",
  borderLeft: "6px solid #e50914",
  paddingLeft: "18px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "32px"
};

const testimonial = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  padding: "36px",
  borderRadius: "22px"
};

const quote = {
  fontSize: "18px",
  lineHeight: "1.7",
  marginBottom: "20px",
  color: "#ddd"
};

const author = { display: "flex", flexDirection: "column" };

const locationText = { color: "#aaa", fontSize: "14px" };

const formBox = {
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  background: "rgba(255,255,255,0.04)",
  padding: "40px",
  borderRadius: "24px"
};

const input = {
  padding: "14px 16px",
  borderRadius: "10px",
  border: "none",
  outline: "none"
};

const textarea = {
  ...input,
  minHeight: "120px",
  resize: "vertical"
};

const submitBtn = {
  background: "#e50914",
  color: "white",
  padding: "14px",
  borderRadius: "30px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer"
};

const note = {
  fontSize: "13px",
  color: "#aaa"
};

const cta = { padding: "120px 60px", textAlign: "center" };

const ctaTitle = { fontSize: "40px" };

const ctaText = { color: "#cfcfcf", margin: "12px 0 24px" };

const ctaBtn = {
  background: "#e50914",
  padding: "16px 36px",
  borderRadius: "30px",
  color: "white",
  textDecoration: "none",
  fontWeight: "600"
};

/* 🌠 STAR MOTION */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes starsMove {
  from { background-position: 0 0; }
  to { background-position: -3000px 3000px; }
}
`;
document.head.appendChild(styleSheet);
