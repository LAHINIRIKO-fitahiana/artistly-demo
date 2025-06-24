import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main content */}
      <div className="flex flex-col items-start max-w-2xl px-6 pb-[120px]">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to Artistly</h1>
        <p className="text-white/90 mb-8 leading-relaxed">
          Artistly is the all-in-one platform that connects event planners with top-performing artists. Whether you're looking for singers, DJs, dancers, or comedians — explore our talent directory or register new artists to join the stage!
        </p>
        <div className="flex gap-4">
          <a href="/artists" className="bg-white text-pink-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-pink-100 transition">View Artists</a>
          <a href="/onboard" className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-pink-700 transition">Register an Artist</a>
          <a href="/dashboard" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-pink-700 hover:to-purple-700 transition">Dashboard</a>
        </div>
      </div>

      {/* Decorative wave SVG */}
      <svg className="absolute bottom-0 left-0 w-full pointer-events-none select-none" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" fillOpacity="0.1" d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,117.3C672,128,768,96,864,85.3C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
}