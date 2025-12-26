import { Link } from "react-router-dom";

export default function ResumeHome() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Select Resume</h1>

      <div className="grid md:grid-cols-3 gap-6">
        
        <Link to="/resume/dubai" className="bg-zinc-900 p-6 rounded-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold">Dubai Resume 🇦🇪</h2>
          <p className="text-gray-400 mt-2">
            Optimized for UAE recruiters & ATS
          </p>
        </Link>

        <Link to="/resume/singapore" className="bg-zinc-900 p-6 rounded-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold">Singapore Resume 🇸🇬</h2>
          <p className="text-gray-400 mt-2">
            Data-driven, metrics-focused resume
          </p>
        </Link>

        <Link to="/resume/malaysia" className="bg-zinc-900 p-6 rounded-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold">Malaysia Resume 🇲🇾</h2>
          <p className="text-gray-400 mt-2">
            Balanced tech + marketing format
          </p>
        </Link>

      </div>
    </div>
  );
}
