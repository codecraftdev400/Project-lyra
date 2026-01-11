import React, { useState, useEffect } from "react";

function CTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ready to Meet <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">Lyra</span>?
          </h2>
        </div>

        {/* Description */}
        <p className={`text-xl text-slate-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{transitionDelay: '0.2s'}}>
          Experience the future of human-AI interaction. Start your free trial today and discover how Lyra transforms communication.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{transitionDelay: '0.4s'}}>
          {/* Primary Button */}
          <button className="group relative px-10 py-4 text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-600 to-pink-500 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300"></div>
            <div className="relative flex items-center justify-center gap-2 text-white">
              <span>✨ Start Free Trial</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          {/* Secondary Button */}
          <button className="group relative px-10 py-4 text-lg font-bold rounded-full border-2 border-blue-400 text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-600 to-pink-500 -z-10 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></div>
            <div className="flex items-center justify-center gap-2">
              <span>▶</span>
              <span>Watch Demo</span>
            </div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center py-8 border-t border-slate-700/50 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{transitionDelay: '0.6s'}}>
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              50K+
            </div>
            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Early Access Users</div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-linear-to-b from-transparent via-slate-600 to-transparent"></div>

          <div className="group cursor-pointer">
            <div className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              99.9%
            </div>
            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Uptime Guaranteed</div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-linear-to-b from-transparent via-slate-600 to-transparent"></div>

          <div className="group cursor-pointer">
            <div className="text-3xl font-bold bg-linear-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              &lt;500ms
            </div>
            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Response Time</div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className={`mt-8 p-4 rounded-lg bg-slate-800/50 border border-slate-700 text-xs text-slate-400 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{transitionDelay: '0.8s'}}>
          🔒 Privacy-First: Your data never leaves your device. All processing happens locally in your browser.
        </div>
      </div>
    </section>
  );
}

export default CTA;
