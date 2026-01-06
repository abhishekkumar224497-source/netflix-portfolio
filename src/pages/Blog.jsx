export default function Blog() {
  return (
    <div style={page}>
      {/* ================= HERO ================= */}
      <section style={hero}>
        <h1 style={title}>
          Insights & <span style={{ color: "#e50914" }}>Growth Stories</span>
        </h1>
        <p style={intro}>
          Deep dives into SEO, performance marketing, analytics, branding, and
          real-world growth lessons from working across competitive markets like
          Malaysia, Dubai, and Singapore.
        </p>
      </section>

      {/* ================= FEATURED ================= */}
      <Section title="Featured Articles">
        <Grid>
          <BlogCard
            title="How SEO Wins in Highly Competitive Markets"
            excerpt="Why long-term SEO systems outperform short-term hacks and how to build authority that compounds over time."
            tag="SEO"
          />
          <BlogCard
            title="Paid Ads That Actually Convert in 2025"
            excerpt="Breaking down funnels, creatives, and targeting strategies that consistently drive ROI."
            tag="Paid Ads"
          />
          <BlogCard
            title="Why Most Websites Don’t Convert (And How to Fix It)"
            excerpt="UX mistakes, CRO principles, and optimisation frameworks that improve conversion rates."
            tag="CRO"
          />
        </Grid>
      </Section>

      {/* ================= SEO ================= */}
      <Section title="SEO & Organic Growth">
        <Grid>
          <BlogCard
            title="On-Page SEO That Still Works"
            excerpt="Search intent, content structure, and optimisation techniques that Google still rewards."
            tag="SEO"
          />
          <BlogCard
            title="Local SEO for Multi-Location Businesses"
            excerpt="How to rank consistently across cities and regions without cannibalisation."
            tag="Local SEO"
          />
          <BlogCard
            title="Content That Builds Authority, Not Noise"
            excerpt="Creating content that earns trust, backlinks, and rankings."
            tag="Content"
          />
        </Grid>
      </Section>

      {/* ================= ADS ================= */}
      <Section title="Paid Media & Funnels">
        <Grid>
          <BlogCard
            title="Scaling Google Ads Without Burning Budget"
            excerpt="Structuring campaigns, keywords, and bidding for sustainable growth."
            tag="Google Ads"
          />
          <BlogCard
            title="Creative Strategy for Meta Ads"
            excerpt="Hooks, messaging, and creatives that stop the scroll."
            tag="Meta Ads"
          />
          <BlogCard
            title="Retargeting Funnels That Close Deals"
            excerpt="Using data-driven retargeting to increase conversions."
            tag="Funnels"
          />
        </Grid>
      </Section>

      {/* ================= ANALYTICS ================= */}
      <Section title="Analytics & Strategy">
        <Grid>
          <BlogCard
            title="GA4 for Business Owners (Simple Guide)"
            excerpt="Understanding what actually matters in GA4 for growth decisions."
            tag="Analytics"
          />
          <BlogCard
            title="Tracking What Matters, Not Everything"
            excerpt="How to avoid vanity metrics and focus on revenue-driving data."
            tag="Tracking"
          />
          <BlogCard
            title="From Data to Decisions"
            excerpt="Turning analytics insights into real business actions."
            tag="Strategy"
          />
        </Grid>
      </Section>

      {/* ================= CTA ================= */}
      <section style={cta}>
        <h2 style={ctaTitle}>
          Want growth strategies tailored to your business?
        </h2>
        <p style={ctaText}>
          Let’s talk about SEO, paid media, or conversion optimisation built for
          your market and goals.
        </p>
        <a href="/contact" style={ctaBtn}>
          Get in Touch
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

function BlogCard({ title, excerpt, tag }) {
  return (
    <div
      style={card}
      onMouseEnter={(e) => hoverIn(e)}
      onMouseLeave={(e) => hoverOut(e)}
    >
      <span style={tagStyle}>{tag}</span>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{excerpt}</p>
      <span style={readMore}>Read Article →</span>
    </div>
  );
}

/* ================= HOVER ================= */

function hoverIn(e) {
  e.currentTarget.style.transform = "translateY(-10px)";
  e.currentTarget.style.boxShadow =
    "0 30px 60px rgba(229,9,20,0.25)";
}

function hoverOut(e) {
  e.currentTarget.style.transform = "none";
  e.currentTarget.style.boxShadow = "none";
}

/* ================= STYLES ================= */

const page = {
  background: "#000",
  color: "white",
  minHeight: "100vh",
};

const hero = {
  padding: "100px 60px 80px",
  maxWidth: "900px",
};

const title = {
  fontSize: "54px",
  fontWeight: "800",
  marginBottom: "24px",
};

const intro = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#cfcfcf",
};

const section = {
  padding: "80px 60px",
};

const sectionTitle = {
  fontSize: "36px",
  marginBottom: "40px",
  borderLeft: "6px solid #e50914",
  paddingLeft: "16px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const card = {
  background: "#111",
  padding: "32px",
  borderRadius: "22px",
  transition: "all .4s ease",
};

const tagStyle = {
  display: "inline-block",
  marginBottom: "12px",
  fontSize: "12px",
  letterSpacing: "1px",
  color: "#e50914",
};

const cardTitle = {
  fontSize: "22px",
  marginBottom: "14px",
};

const cardText = {
  color: "#aaa",
  lineHeight: "1.6",
  marginBottom: "20px",
};

const readMore = {
  color: "#e50914",
  fontWeight: "600",
};

const cta = {
  padding: "120px 60px",
  textAlign: "center",
  background:
    "radial-gradient(circle at center, rgba(229,9,20,0.15), transparent 60%)",
};

const ctaTitle = {
  fontSize: "38px",
  marginBottom: "20px",
};

const ctaText = {
  color: "#cfcfcf",
  fontSize: "18px",
  marginBottom: "30px",
};

const ctaBtn = {
  display: "inline-block",
  background: "#e50914",
  color: "white",
  padding: "16px 36px",
  borderRadius: "30px",
  textDecoration: "none",
  fontWeight: "600",
};
