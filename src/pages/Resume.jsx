import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div style={page}>
      <h1 style={title}>Choose Resume by Market</h1>

      <div style={row}>
        <ResumeCard title="Dubai Resume 🇦🇪" link="/resume/dubai" />
        <ResumeCard title="Singapore Resume 🇸🇬" link="/resume/singapore" />
        <ResumeCard title="Malaysia Resume 🇲🇾" link="/resume/malaysia" />
      </div>
    </div>
  );
}

function ResumeCard({ title, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div style={card}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

const page = {
  background: "#141414",
  minHeight: "100vh",
  color: "white",
  padding: "40px",
};

const title = {
  marginBottom: "30px",
};

const row = {
  display: "flex",
  gap: "20px",
};

const card = {
  width: "260px",
  height: "150px",
  background: "#222",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  transition: "transform 0.3s",
  color: "white",
};
