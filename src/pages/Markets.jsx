export default function Markets() {
  return (
    <div className="bg-black text-white min-h-screen px-8 py-20">
      <h1 className="text-4xl font-bold mb-12 text-red-600">Markets I Work In</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        {[
          { country: "India", desc: "High-growth digital ecosystems" },
          { country: "Malaysia", desc: "Performance & SEA-focused growth" },
          { country: "Dubai", desc: "High-ROI paid campaigns" },
          { country: "Singapore", desc: "Data-driven marketing strategies" },
        ].map((m, i) => (
          <div
            key={i}
            className="bg-gray-900 p-8 rounded-lg hover:scale-105 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{m.country}</h2>
            <p className="text-gray-400">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
