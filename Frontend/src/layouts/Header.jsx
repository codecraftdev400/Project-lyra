import React from "react";

function Header() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          ✨ Lyra
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-blue-400 transition">Features</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a>
          <a href="#use-cases" className="hover:text-blue-400 transition">Use Cases</a>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Header;
