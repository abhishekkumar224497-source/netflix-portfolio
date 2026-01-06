export default function Skills() {
  return (
    <div style={page}>
      {/* ===== SPACE BACKGROUND ===== */}
      <div className="stars layer1" />
      <div className="stars layer2" />
      <div className="stars layer3" />

      <div className="planet planet1" />
      <div className="planet planet2" />
      <div className="planet planet3" />

      <div className="shuttle shuttle1" />
      <div className="shuttle shuttle2" />

      {/* ================= HEADER ================= */}
      <section style={hero}>
        <h1 style={title}>
          My <span style={{ color: "#e50914" }}>Skill Set</span>
        </h1>
        <p style={intro}>
          A comprehensive mix of strategy, execution, analytics, and creative
          thinking — designed to build scalable growth systems, not just
          campaigns.
        </p>
      </section>

      {/* ================= SEARCH & VISIBILITY ================= */}
      <Section title="Search & Visibility">
        <Grid>
          <SkillCard title="SEO Strategy" text="Search strategies built for long-term visibility and competitive rankings." />
          <SkillCard title="On-Page SEO" text="Content optimisation, internal linking, metadata, and search intent alignment." />
          <SkillCard title="Technical SEO" text="Site structure, indexing, performance, and crawl optimisation." />
          <SkillCard title="Local SEO" text="Geo-focused SEO for local and multi-location businesses." />
          <SkillCard title="Keyword Research" text="High-intent keyword discovery mapped to user journeys." />
          <SkillCard title="Content SEO" text="Blogs, landing pages, and authority-driven content systems." />
        </Grid>
      </Section>

      {/* ================= PAID MEDIA ================= */}
      <Section title="Paid Media & Performance Marketing">
        <Grid>
          <SkillCard title="Google Ads" text="Search, display, and performance-max campaigns focused on ROI." />
          <SkillCard title="Meta Ads" text="Conversion-driven Facebook and Instagram advertising." />
          <SkillCard title="TikTok Ads" text="Creative-first paid campaigns optimised for engagement and scale." />
          <SkillCard title="LinkedIn Ads" text="B2B lead generation and account-based targeting." />
          <SkillCard title="Retargeting" text="Multi-touch retargeting strategies across platforms." />
          <SkillCard title="Ad Creative Direction" text="Messaging, hooks, and visual guidance for high CTR." />
        </Grid>
      </Section>

      {/* ================= ANALYTICS & CRO ================= */}
      <Section title="Analytics, CRO & Optimisation">
        <Grid>
          <SkillCard title="Google Analytics 4" text="Advanced analytics setup, event tracking, and insights." />
          <SkillCard title="Conversion Tracking" text="Pixel setup, events, and attribution clarity." />
          <SkillCard title="CRO Strategy" text="Improving conversion rates through structured optimisation." />
          <SkillCard title="A/B Testing" text="Data-backed experiments on pages, funnels, and creatives." />
          <SkillCard title="Funnel Analysis" text="Identifying drop-offs and fixing conversion leaks." />
          <SkillCard title="UX Optimisation" text="Improving usability to support better conversions." />
        </Grid>
      </Section>

      {/* ================= AUTOMATION ================= */}
      <Section title="Automation, CRM & Systems">
        <Grid>
          <SkillCard title="CRM Management" text="Lead tracking, segmentation, and pipeline optimisation." />
          <SkillCard title="HubSpot" text="Marketing, sales automation, and reporting workflows." />
          <SkillCard title="Email Automation" text="Drip campaigns, nurturing flows, and lifecycle emails." />
          <SkillCard title="Reporting Automation" text="Reducing manual reporting with dashboards." />
          <SkillCard title="Lead Nurturing" text="Structured follow-ups to improve conversion rates." />
          <SkillCard title="Growth Systems" text="Scalable frameworks for long-term performance." />
        </Grid>
      </Section>

      {/* ================= CONTENT & BRAND ================= */}
      <Section title="Content, Branding & Communication">
        <Grid>
          <SkillCard title="Copywriting" text="Clear, persuasive messaging focused on conversion." />
          <SkillCard title="Content Marketing" text="Content systems designed to attract and convert." />
          <SkillCard title="Email Campaigns" text="Engagement-focused newsletters and promotions." />
          <SkillCard title="Social Media Strategy" text="Platform-specific content planning and growth." />
          <SkillCard title="Brand Messaging" text="Consistent voice across channels and touchpoints." />
          <SkillCard title="Creative Direction" text="Aligning visuals with strategy and performance goals." />
        </Grid>
      </Section>

      {/* ================= SOFT SKILLS ================= */}
      <Section title="Soft Skills & Leadership">
        <Grid>
          <SkillCard title="Strategic Thinking" text="Connecting business goals with execution plans." />
          <SkillCard title="Project Management" text="Handling timelines, priorities, and deliverables." />
          <SkillCard title="Problem Solving" text="Identifying bottlenecks and creating solutions." />
          <SkillCard title="Communication" text="Clear reporting and stakeholder alignment." />
          <SkillCard title="Collaboration" text="Working effectively with teams and founders." />
          <SkillCard title="Analytical Mindset" text="Decision-making driven by data, not assumptions." />
        </Grid>
      </Section>
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

function SkillCard({ title, text }) {
  return (
    <div
      style={card}
      onMouseEnter={(e) => hoverIn(e)}
      onMouseLeave={(e) => hoverOut(e)}
    >
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>
    </div>
  );
}

/* ================= HOVER EFFECTS ================= */

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
  position: "relative",
  background: "#000",
  color: "white",
  minHeight: "100vh",
  overflow: "hidden",
};

const hero = {
  padding: "100px 60px 80px",
  maxWidth: "900px",
  position: "relative",
  zIndex: 2,
};

const title = {
  fontSize: "54px",
  fontWeight: "800",
  marginBottom: "25px",
};

const intro = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#cfcfcf",
};

const section = {
  padding: "80px 60px",
  position: "relative",
  zIndex: 2,
};

const sectionTitle = {
  fontSize: "36px",
  marginBottom: "40px",
  borderLeft: "6px solid #e50914",
  paddingLeft: "16px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
};

const card = {
  background: "#111",
  padding: "32px",
  borderRadius: "20px",
  transition: "all .4s ease",
};

const cardTitle = {
  fontSize: "22px",
  marginBottom: "14px",
};

const cardText = {
  color: "#aaa",
  lineHeight: "1.6",
};

/* ================= SPACE EFFECTS ================= */
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    /* STARS */
    .stars {
      position: fixed;
      inset: 0;
      background-image:
        radial-gradient(1px 1px at 10% 20%, #fff, transparent),
        radial-gradient(1px 1px at 30% 80%, #fff, transparent),
        radial-gradient(1px 1px at 70% 40%, #fff, transparent),
        radial-gradient(1px 1px at 90% 90%, #fff, transparent);
      background-size: 1200px 1200px;
      animation: starsMove linear infinite;
      z-index: 0;
      pointer-events: none;
    }

    .layer1 { animation-duration: 220s; opacity: 0.6; }
    .layer2 { animation-duration: 320s; opacity: 0.4; }
    .layer3 { animation-duration: 420s; opacity: 0.25; }

    @keyframes starsMove {
      from { transform: translateY(0); }
      to { transform: translateY(-2000px); }
    }

    /* PLANETS */
    .planet {
      position: fixed;
      border-radius: 50%;
      background-size: cover;
      z-index: 1;
      opacity: 0.9;
      animation: planetSpin linear infinite;
    }

    .planet1 {
      width: 260px;
      height: 260px;
      top: 15%;
      left: -80px;
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg");
      animation-duration: 120s;
    }

    .planet2 {
      width: 180px;
      height: 180px;
      bottom: 20%;
      right: -60px;
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg");
      animation-duration: 160s;
    }

    .planet3 {
      width: 120px;
      height: 120px;
      top: 60%;
      left: 20%;
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/c/c7/Moon.jpg");
      animation-duration: 90s;
    }

    @keyframes planetSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* SPACE SHUTTLES */
    .shuttle {
      position: fixed;
      width: 140px;
      height: 80px;
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 1;
      opacity: 0.8;
      animation: shuttleFly linear infinite;
    }

    .shuttle1 {
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/e5/Space_Shuttle_Columbia_launching.jpg");
      top: 30%;
      animation-duration: 45s;
    }

    .shuttle2 {
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/3f/Space_Shuttle_Discovery_launching.jpg");
      top: 70%;
      animation-duration: 55s;
    }

    @keyframes shuttleFly {
      from { transform: translateX(-20%) translateY(0); }
      to { transform: translateX(120%) translateY(-30px); }
    }

    /* MOBILE FALLBACK */
    @media (max-width: 768px) {
      .planet, .shuttle { display: none; }
    }
  `;
  document.head.appendChild(style);
}
