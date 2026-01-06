export default function SEO() {
  return (
    <div style={page}>
      {/* HERO */}
      <section style={hero}>
        <img
          src="/images/seo-hero.png"
          alt="SEO Strategy"
          style={heroImage}
        />

        <h1 style={heroTitle}>SEO Case Studies</h1>
        <p style={heroText}>
          Real-world SEO systems engineered for sustainable traffic,
          authority, and long-term revenue growth.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <Section title="My SEO Philosophy">
        <p style={paragraph}>
          SEO is not about chasing rankings — it’s about understanding
          user intent, solving real problems, and building trust at scale.
          <br /><br />
          Every strategy I build is grounded in business goals, competitive
          research, and long-term scalability — whether the brand operates
          locally or globally.
        </p>
      </Section>

      {/* PROCESS */}
      <Section title="My SEO Process">
        <img
          src="/images/seo-process.png"
          alt="SEO Process"
          style={image}
        />

        <Grid>
          <Card title="1. Keyword & Market Intelligence">
            Deep intent-driven keyword research focused on conversion,
            competition, and opportunity gaps.
          </Card>

          <Card title="2. Technical SEO Foundation">
            Clean architecture, indexing control, Core Web Vitals,
            schema, crawl optimization, and performance tuning.
          </Card>

          <Card title="3. Content & Authority Building">
            Topic clusters, internal linking systems, and authority-driven
            content frameworks.
          </Card>

          <Card title="4. Tracking, CRO & Scaling">
            GA4, Search Console, dashboards, and continuous optimization
            driven by real data — not assumptions.
          </Card>
        </Grid>
      </Section>

      {/* RESULTS */}
      <Section title="Impact & Results">
        <img
          src="/images/seo-results.jpg"
          alt="SEO Results"
          style={image}
        />

        <Grid>
          <Metric value="+300%" label="Organic Traffic Growth" />
          <Metric value="Top 3" label="High-Intent Keywords" />
          <Metric value="5×" label="Qualified Leads" />
          <Metric value="-40%" label="Cost Per Acquisition" />
        </Grid>
      </Section>

      {/* WHY IT WORKS */}
      <Section title="Why My SEO Works">
        <Grid>
          <Card title="Intent-First Strategy">
            Every page aligns with real user intent and business outcomes.
          </Card>

          <Card title="Data-Driven Decisions">
            Analytics, heatmaps, and conversion data guide every move.
          </Card>

          <Card title="Built for Longevity">
            No black-hat tricks. No shortcuts. Only sustainable growth.
          </Card>
        </Grid>
      </Section>

      {/* CTA */}
      <section style={cta}>
        <h2 style={ctaTitle}>Want SEO that drives revenue?</h2>
        <p style={ctaText}>
          Let’s build a scalable SEO system tailored to your market.
        </p>
        <a href="/contact" style={ctaBtn}>
          Start a Conversation
        </a>
      </section>
    </div>
  );
}

/* COMPONENTS */

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

/* STYLES */

const page = {
  background: "#000",
  color: "#fff",
};

const hero = {
  padding: "90px 60px 60px",
};

const heroImage = {
  width: "65%",
  maxHeight: "420px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "14px",
};

const heroTitle = {
  fontSize: "52px",
  fontWeight: "900",
  marginBottom: "12px",
};

const heroText = {
  fontSize: "18px",
  color: "#cfcfcf",
  maxWidth: "760px",
};

const section = {
  padding: "40px 60px 50px", // 🔥 FIXED GAP
};

const sectionTitle = {
  fontSize: "32px",
  marginBottom: "10px", // 🔥 tight spacing
  borderLeft: "5px solid #e50914",
  paddingLeft: "14px",
};

const paragraph = {
  fontSize: "18px",
  color: "#cfcfcf",
  maxWidth: "900px",
  lineHeight: "1.8",
};

const image = {
  width: "80%",
  borderRadius: "16px",
  marginTop: "0px",
  marginBottom: "10px",
  display: "block",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "26px",
};

const card = {
  background: "#111",
  padding: "28px",
  borderRadius: "20px",
};

const cardTitle = {
  fontSize: "20px",
  marginBottom: "10px",
};

const cardText = {
  color: "#aaa",
  lineHeight: "1.6",
};

const metric = {
  background: "#111",
  padding: "36px",
  borderRadius: "20px",
  textAlign: "center",
};

const metricValue = {
  fontSize: "40px",
  color: "#e50914",
  fontWeight: "800",
};

const metricLabel = {
  color: "#aaa",
  marginTop: "6px",
};

const cta = {
  padding: "80px 60px",
  textAlign: "center",
};

const ctaTitle = {
  fontSize: "36px",
  marginBottom: "14px",
};

const ctaText = {
  color: "#cfcfcf",
  marginBottom: "26px",
};

const ctaBtn = {
  background: "#e50914",
  padding: "14px 34px",
  borderRadius: "30px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
};
