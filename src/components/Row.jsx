export default function Row({ title, items }) {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>

      <div style={{ display: "flex", gap: "12px", overflowX: "scroll" }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              height: "160px",
              minWidth: "260px",
              background: "#222",
              borderRadius: "8px",
              padding: "14px",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.transform = "scale(1.25)")
            }
            onMouseLeave={e =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3>{item.name}</h3>
            <p style={{ color: "#46d369", marginTop: "8px" }}>
              {item.result}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
