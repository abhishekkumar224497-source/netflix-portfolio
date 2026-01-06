export default function Home() {
  return (
    <div style={page}>
      {/* ================= HERO ================= */}
      <section style={hero}>
        {/* 🎥 BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={heroVideo}
        >
          <source src="/videos/hero-marketing.mp4" type="video/mp4" />
        </video>

        {/* 🎨 MARKETING OVERLAY */}
        <div style={marketingBg}></div>

        <div style={heroContent}>
          <h1 style={name}>
            Abhishek <span style={{ color: "#e50914" }}>Kumar</span>
          </h1>

          <h2 style={headline}>
            Growth-focused digital marketer building{" "}
            <span style={{ color: "#e50914" }}>high-impact brands</span>
          </h2>

          <p style={subtext}>
            SEO • Paid Ads • Conversion • Analytics
            <br />
            Helping businesses scale across India, Malaysia, Dubai & Singapore.
          </p>

          <div style={ctaRow}>
            <a href="/Wokr" style={primaryBtn}>
              Explore My Work
            </a>
            <a href="/contact" style={secondaryBtn}>
              Let’s Collaborate
            </a>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <Section title="What I Do Best">
        <Grid>
          <Card title="SEO & Organic Growth">
            Ranking systems built for competitive niches and long-term traffic.
          </Card>
          <Card title="Paid Ads & Funnels">
            ROI-driven Google, Meta & performance ad campaigns.
          </Card>
          <Card title="Conversion & Analytics">
            Data-backed optimisation using GA4, funnels & CRO.
          </Card>
          <Card title="Automation">
            CRM, reporting & growth automation for scale.
          </Card>
        </Grid>
      </Section>

      {/* ================= PROJECTS ================= */}
      <Section title="Featured Work">
        <Grid>
          <LinkCard
            title="SEO Case Studies"
            text="Search visibility & authority growth."
            link="/case-studies/seo"
          />
          <LinkCard
            title="Paid Ads & Graphics"
            text="High-performing creatives & campaigns."
            link="/case-studies/graphics"
          />
          <LinkCard
            title="Web Projects"
            text="Conversion-focused websites & landing pages."
            link="/case-studies/web-projects"
          />
        </Grid>
      </Section>

      {/* ================= MARKETS ================= */}
      <Grid>
        <div style={marketCard}>
          <span style={flag}>🇲🇾</span>
          <h3 style={marketTitle}>MY Malaysia</h3>
        </div>
        <div style={marketCard}>
          <span style={flag}>🇸🇬</span>
          <h3 style={marketTitle}>SG Singapore</h3>
        </div>
        <div style={marketCard}>
          <span style={flag}>🇦🇪</span>
          <h3 style={marketTitle}>AE Dubai</h3>
        </div>
      </Grid>

      {/* ================= NICHES ================= */}
      <Section title="Industries & Niches">
        <Grid>
          <Card title="Hospitality & Restaurants">
            Hotels, cafés & premium dining brands.
          </Card>
          <Card title="SaaS & B2B">
            Lead generation & growth systems.
          </Card>
          <Card title="E-commerce">
            DTC & marketplace brands.
          </Card>
          <Card title="Local Businesses">
            Geo-targeted SEO & paid acquisition.
          </Card>
        </Grid>
      </Section>

      {/* ================= TESTIMONIALS ================= */}
      <Section title="What Clients Say">
        <Grid>
          <Testimonial
            name="Brenda Trout, Founder, F&B Brand"
            text="Abhishek helped us scale organic traffic and dominate local SEO within 6 months."
          />
          <Testimonial
            name="Joseph Deen, Marketing Head, SaaS Company"
            text="Performance-focused, data-driven, and extremely reliable."
          />
          <Testimonial
            name="Rubia Ali Shani"
            text="From strategy to execution, Abhishek knows growth marketing inside out."
          />
        </Grid>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <section style={finalCta}>
        <h2 style={finalCtaTitle}>Ready to grow your business?</h2>
        <p style={finalCtaText}>
          Get a free strategy consultation tailored to your goals.
        </p>
        <a href="/contact" style={finalCtaBtn}>
          Get Free Consultation
        </a>
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
    <div style={card} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{children}</p>
    </div>
  );
}

function LinkCard({ title, text, link }) {
  return (
    <a href={link} style={{ ...card, textDecoration: "none" }}>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>
    </a>
  );
}

function Testimonial({ name, text }) {
  return (
    <div style={card}>
      <p style={{ ...cardText, fontStyle: "italic" }}>"{text}"</p>
      <p style={{ marginTop: "16px", color: "#e50914", fontWeight: "600" }}>
        — {name}
      </p>
    </div>
  );
}

/* ================= HOVER ================= */

function hoverIn(e) {
  e.currentTarget.style.transform = "translateY(-10px)";
}
function hoverOut(e) {
  e.currentTarget.style.transform = "none";
}

/* ================= STYLES ================= */

const page = { background: "#000", color: "white", minHeight: "100vh" };

const hero = {
  position: "relative",
  height: "100vh",
  padding: "0 60px",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
};

/* 🎥 VIDEO STYLE */
const heroVideo = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  filter: "brightness(0.35) contrast(1.1)",
};

/* 🎨 OVERLAY */
const marketingBg = {
  position: "absolute",
  inset: 0,
  background: `
    radial-gradient(circle at 20% 30%, rgba(229,9,20,0.35), transparent 40%),
    radial-gradient(circle at 80% 60%, rgba(0,120,255,0.25), transparent 45%)
  `,
  zIndex: 1,
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  maxWidth: "850px",
};

const name = { fontSize: "70px", fontWeight: "900", marginBottom: "20px" };
const headline = { fontSize: "38px", marginBottom: "20px" };
const subtext = { color: "#ccc", fontSize: "18px", lineHeight: "1.6" };

const ctaRow = { display: "flex", gap: "20px", marginTop: "40px" };

const primaryBtn = {
  background: "#e50914",
  padding: "16px 32px",
  borderRadius: "30px",
  color: "white",
  textDecoration: "none",
};

const secondaryBtn = {
  border: "1px solid #888",
  padding: "16px 32px",
  borderRadius: "30px",
  color: "white",
  textDecoration: "none",
};

const section = { padding: "100px 60px" };

const sectionTitle = {
  fontSize: "38px",
  borderLeft: "6px solid #e50914",
  paddingLeft: "18px",
  marginBottom: "50px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
  gap: "30px",
};

const card = {
  background: "#111",
  padding: "32px",
  borderRadius: "20px",
  transition: "all .4s ease",
};

const cardTitle = { fontSize: "22px", marginBottom: "14px" };
const cardText = { color: "#aaa" };

const marketCard = {
  background: "#111",
  padding: "36px",
  borderRadius: "24px",
  textAlign: "center",
};

const flag = { fontSize: "46px" };
const marketTitle = { fontSize: "22px" };

const finalCta = {
  padding: "120px 40px",
  textAlign: "center",
  background:
    "radial-gradient(circle at center, rgba(229,9,20,0.3), transparent 70%)",
};

const finalCtaTitle = { fontSize: "42px" };
const finalCtaText = { color: "#bbb", fontSize: "18px" };

const finalCtaBtn = {
  display: "inline-block",
  marginTop: "30px",
  background: "#e50914",
  padding: "18px 44px",
  borderRadius: "999px",
  color: "white",
  textDecoration: "none",
};
