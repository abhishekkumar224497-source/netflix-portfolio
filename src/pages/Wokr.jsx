import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Wokr() {
  const navigate = useNavigate();

  const proofRef = useRef(null);
  const masterRef = useRef(null);
  const brandRef = useRef(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const auto = (ref) =>
      setInterval(() => {
        if (!ref.current) return;

        ref.current.scrollBy({ left: 320, behavior: "smooth" });

        if (
          ref.current.scrollLeft + ref.current.clientWidth >=
          ref.current.scrollWidth - 10
        ) {
          ref.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000);

    const p = auto(proofRef);
    const m = auto(masterRef);
    const b = auto(brandRef);

    return () => {
      clearInterval(p);
      clearInterval(m);
      clearInterval(b);
    };
  }, []);

  /* VIDEO PROJECTS */
  const projects = [
    {
      title: "SEO Growth Systems",
      metric: "+320% Organic Traffic",
      desc: "Keyword research, content systems & rankings.",
      video: "/videos/seo.mp4",
    },
    {
      title: "Google Ads Performance",
      metric: "4.1x ROAS",
      desc: "Search & display campaigns with tracking.",
      video: "/videos/ads.mp4",
    },
    {
      title: "Marketing Analytics (GA4)",
      metric: "Full Funnel Visibility",
      desc: "Dashboards, events & attribution.",
      video: "/videos/analytics.mp4",
    },
    {
      title: "Social Media Advertising",
      metric: "2.8x Engagement",
      desc: "Meta Ads creatives & retargeting.",
      video: "/videos/social.mp4",
    },
    {
      title: "Landing Pages & CRO",
      metric: "+187% Leads",
      desc: "High-converting landing pages.",
      video: "/videos/landing.mp4",
    },
    {
      title: "Web Performance & SEO Tech",
      metric: "3x Conversion Rate",
      desc: "Fast, SEO-ready React websites.",
      video: "/videos/web.mp4",
    },
  ];

  /* WORK PROOFS */
  const images = [
    "/wokr/aml.jpeg",
    "/wokr/analyticsaml1.jpeg",
    "/wokr/analyticsaml2.jpeg",
    "/wokr/analyticsaml3.jpeg",
    "/wokr/analyticsaml4.jpeg",
    "/wokr/analyticsaml5.jpeg",
    "/wokr/analyticsaml6.jpeg",
    "/wokr/analyticsaml7.jpeg",
    "/wokr/analyticsaml8.jpeg",
    "/wokr/analyticsaml9.jpeg",
    "/wokr/analyticssr1.jpeg",
    "/wokr/analyticssr2.jpeg",
    "/wokr/analyticssr3.jpeg",
    "/wokr/analyticssr4.jpeg",
    "/wokr/analyticssr5.jpeg",
    "/wokr/analyticssr6.jpeg",
    "/wokr/analyticssr7.jpeg",
    "/wokr/analyticssr8.jpeg",
    "/wokr/analyticssr9.jpeg",
  ];

  /* MASTERPIECES */
  const masterpieces = [
    { type: "image", src: "/masterpieces/post1.jpeg" },
    { type: "video", src: "/videos/graphic1.mp4" },
    { type: "image", src: "/masterpieces/post2.jpeg" },
    { type: "video", src: "/videos/graphic2.mp4" },
    { type: "image", src: "/masterpieces/post3.jpeg" },
    { type: "video", src: "/videos/graphic3.mp4" },
    { type: "image", src: "/masterpieces/post4.jpeg" },
    { type: "video", src: "/videos/graphic4.mp4" },
    { type: "image", src: "/masterpieces/post5.jpeg" },
    { type: "video", src: "/videos/graphic5.mp4" },
    { type: "image", src: "/masterpieces/post6.jpeg" },
    { type: "video", src: "/videos/graphic6.mp4" },
    { type: "image", src: "/masterpieces/post7.jpeg" },
    { type: "video", src: "/videos/graphic7.mp4" },
    { type: "image", src: "/masterpieces/post8.jpeg" },
    { type: "video", src: "/videos/graphic8.mp4" },
  ];

  /* BRANDS */
  const brands = [
    "/brands/brand1.png",
    "/brands/brand15.jpeg",
    "/brands/brand2.png",
    "/brands/brand3.png",
    "/brands/brand4.jpg",
    "/brands/brand5.png",
    "/brands/brand6.png",
    "/brands/brand7.png",
    "/brands/brand8.png",
    "/brands/brand9.png",
    "/brands/brand10.png",
    "/brands/brand11.png",
    "/brands/brand12.jpg",
    "/brands/brand13.jpg",
    "/brands/brand14.webp",
  ];

  return (
    <div style={page}>
      <div style={spaceBg} />

      {/* HERO */}
      <section style={hero}>
        <h1 style={title}>Explore My Work</h1>
        <p style={subtitle}>
          Proof-driven digital marketing — SEO, Ads, Analytics & CRO.
        </p>
      </section>

      {/* VIDEO GRID */}
      <section style={grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={card}
            onMouseEnter={(e) =>
              e.currentTarget.querySelector("video")?.play()
            }
            onMouseLeave={(e) =>
              e.currentTarget.querySelector("video")?.pause()
            }
          >
            <video src={p.video} muted loop playsInline style={video} />
            <div style={cardBody}>
              <h3>{p.title}</h3>
              <span style={metric}>{p.metric}</span>
              <p style={desc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* WORK PROOFS */}
      <section style={sliderSection}>
        <h2 style={sliderTitle}>Work Proofs & Dashboards</h2>
        <div style={slider} ref={proofRef}>
          {images.map((img, i) => (
            <img key={i} src={img} alt="" style={slideImg} />
          ))}
        </div>
      </section>

      {/* MY MASTERPIECES */}
      <section style={sliderSection}>
        <h2 style={sliderTitle}>My Masterpieces</h2>
        <div style={slider} ref={masterRef}>
          {masterpieces.map((item, i) =>
            item.type === "image" ? (
              <img key={i} src={item.src} alt="" style={slideImg} />
            ) : (
              <video
                key={i}
                src={item.src}
                muted
                loop
                autoPlay
                playsInline
                style={slideImg}
              />
            )
          )}
        </div>
      </section>

      {/* MAJOR BRANDS */}
      <section style={sliderSection}>
        <h2 style={sliderTitle}>Major Brands I’ve Worked With</h2>
        <div style={brandSlider} ref={brandRef}>
          {brands.map((logo, i) => (
            <div key={i} style={brandCircle}>
              <img src={logo} alt="" style={brandImg} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={cta}>
        <h2>Want results like these?</h2>
        <p>Let’s discuss your business and growth goals.</p>
        <button style={btn} onClick={() => navigate("/contact")}>
          Get Free Consultation
        </button>
      </section>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  background: "#000",
  color: "white",
  minHeight: "100vh",
  position: "relative",
};

const spaceBg = {
  position: "fixed",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 30%, rgba(255,0,80,.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,120,255,.18), transparent 40%)",
  zIndex: 0,
};

const hero = {
  padding: "100px 60px 60px",
  maxWidth: "900px",
  position: "relative",
  zIndex: 1,
};

const title = { fontSize: "52px" };
const subtitle = { color: "#aaa", marginTop: "10px" };

const grid = {
  padding: "60px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
  gap: "36px",
  position: "relative",
  zIndex: 1,
};

const card = {
  background: "#111",
  borderRadius: "18px",
  overflow: "hidden",
};

const video = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
};

const cardBody = { padding: "24px" };
const metric = { color: "#ff0050", fontWeight: "600" };
const desc = { color: "#aaa", fontSize: "14px" };

const sliderSection = {
  padding: "80px 40px",
  position: "relative",
  zIndex: 1,
};

const sliderTitle = {
  fontSize: "36px",
  marginBottom: "30px",
};

const slider = {
  display: "flex",
  gap: "20px",
  overflowX: "auto",
};

const slideImg = {
  width: "300px",
  height: "180px",
  borderRadius: "14px",
  objectFit: "cover",
  flexShrink: 0,
};

/* BRANDS */
const brandSlider = {
  display: "flex",
  gap: "24px",
  overflowX: "auto",
};

const brandCircle = {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  background: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const brandImg = {
  width: "55%",
  height: "55%",
  objectFit: "contain",
};

const cta = {
  textAlign: "center",
  padding: "100px 20px",
  position: "relative",
  zIndex: 1,
};

const btn = {
  marginTop: "20px",
  background: "#ff0050",
  border: "none",
  padding: "16px 42px",
  borderRadius: "999px",
  color: "white",
  cursor: "pointer",
};
