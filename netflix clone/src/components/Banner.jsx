export default function Banner() {
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          "linear-gradient(to top, #141414 20%, rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "180px 40px",
      }}
    >
      <h1 style={{ fontSize: "56px", fontWeight: "900" }}>
        Abhishek Kumar
      </h1>

      <p style={{ maxWidth: "600px", fontSize: "18px", marginTop: "16px" }}>
        Digital Marketing Strategist helping Dubai brands scale with
        SEO, Performance Marketing & Conversion Optimization.
      </p>

      <div style={{ marginTop: "24px" }}>
        <button style={playBtn}>▶ View Case Studies</button>
        <button style={infoBtn}>More Info</button>
      </div>
    </div>
  );
}

const playBtn = {
  padding: "12px 28px",
  marginRight: "14px",
  background: "white",
  color: "black",
  fontWeight: "600",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const infoBtn = {
  padding: "12px 28px",
  background: "rgba(109,109,110,0.7)",
  color: "white",
  fontWeight: "600",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
