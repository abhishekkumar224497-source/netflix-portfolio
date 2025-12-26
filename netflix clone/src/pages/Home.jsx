import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import { portfolioRows } from "../data/portfolio";

export default function Home() {
  return (
    <div style={{ background: "#141414", minHeight: "100vh" }}>
      <Navbar />
      <Banner />

      <div>
        {portfolioRows.map((row, index) => (
          <Row key={index} title={row.title} items={row.items} />
        ))}
      </div>
    </div>
  );
}
