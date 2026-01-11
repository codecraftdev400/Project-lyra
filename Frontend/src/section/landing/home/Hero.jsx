import React, { useState, useEffect, useRef } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 text-center relative overflow-hidden min-h-[90vh] flex items-center justify-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div 
          className={`inline-block mb-6 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition-all duration-700 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <span className="text-sm font-semibold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ✨ The Future of Human-AI Interaction
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="block mb-4">AI with a</span>
          <span className="relative inline-block">
            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Human Touch
            </span>
            {/* Underline Animation */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transform origin-left scale-x-0 animate-pulse" style={{
              animation: 'scaleX 1.5s ease-out 0.5s forwards'
            }}></div>
          </span>
        </h1>

        {/* Subheading */}
        <p 
          className={`text-xl md:text-2xl text-slate-400 mb-8 font-medium transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{transitionDelay: '0.1s'}}
        >
          The world's first anthropomorphic AI that sees, hears, and understands emotion
        </p>

        {/* Description with fade-in */}
        <p 
          className={`text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{transitionDelay: '0.2s'}}
        >
          Meet <span className="font-semibold text-blue-300">Lyra</span>—the world's first <span className="text-purple-300 font-semibold">Anthropomorphic AI</span> that doesn't just think like humans. It <span className="text-blue-300">sees</span> like you, <span className="text-purple-300">hears</span> like you, and expresses itself with <span className="text-pink-300">genuine emotion</span> and <span className="text-blue-300">empathy</span>. No more robotic responses. Just genuine understanding and connection.
        </p>

        {/* CTA Buttons with Hover Effects */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{transitionDelay: '0.4s'}}
        >
          {/* Primary Button */}
          <button className="group relative px-8 py-4 text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300"></div>
            <div className="relative flex items-center gap-2">
              Try Lyra Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          {/* Secondary Button */}
          <button className="group relative px-8 py-4 text-lg font-bold rounded-full border-2 border-blue-400 text-blue-400 hover:text-white transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 -z-10 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-lg">▶</span>
              Watch Demo
            </div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div 
          className={`mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{transitionDelay: '0.6s'}}
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">50K+</div>
            <div className="text-sm text-slate-400">Early Access Users</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-linear-to-b from-transparent via-slate-600 to-transparent"></div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">99.9%</div>
            <div className="text-sm text-slate-400">Uptime Guaranteed</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-linear-to-b from-transparent via-slate-600 to-transparent"></div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">&lt;500ms</div>
            <div className="text-sm text-slate-400">Response Time</div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scaleX {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
