import React, { useState, useEffect } from "react";

function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    {
      id: "frontend",
      title: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-blue-400",
      tagline: "Interactive & Real-time",
      description: "Responsive web apps with real-time audio/video processing directly in the browser",
      stack: [
        "React & Next.js for responsive UI",
        "Three.js for photorealistic 3D avatars",
        "MediaPipe for computer vision & pose detection",
        "XState for complex animation orchestration",
        "WebGL for GPU-accelerated rendering",
        "Web Audio API for real-time audio"
      ]
    },
    {
      id: "backend",
      title: "Backend",
      icon: "⚙️",
      color: "from-purple-500 to-purple-400",
      tagline: "Scalable & Intelligent",
      description: "High-performance servers that process emotions and generate responses in milliseconds",
      stack: [
        "Python & FastAPI for ultra-fast API responses",
        "LangChain for intelligent conversation orchestration",
        "WebRTC for low-latency audio/video streaming",
        "GPU-powered inference with NVIDIA CUDA",
        "Redis for real-time caching",
        "Docker & Kubernetes for elastic scaling"
      ]
    },
    {
      id: "ai",
      title: "AI Services",
      icon: "🧠",
      color: "from-pink-500 to-pink-400",
      tagline: "State-of-the-art Models",
      description: "Best-in-class AI models for language, voice, and emotion understanding",
      stack: [
        "OpenAI GPT-4o for natural language intelligence",
        "Deepgram for real-time speech-to-text",
        "ElevenLabs for natural voice synthesis",
        "Vector databases (Pinecone) for long-term memory",
        "PyTorch for custom ML models",
        "Hugging Face transformers for specialized tasks"
      ]
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Built with <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Cutting-Edge Tech</span>
          </h2>
          <p className="text-slate-400 text-lg">Enterprise-grade architecture for unmatched performance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, idx) => (
            <div
              key={tech.id}
              className={`group transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`relative h-full rounded-2xl p-8 border transition-all duration-300 overflow-hidden ${
                hoveredTech === tech.id
                  ? `bg-linear-to-br ${tech.color} border-transparent shadow-2xl scale-105`
                  : 'bg-slate-700/40 border-slate-600 hover:border-slate-500'
              }`}>
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-20 blur-2xl group-hover:translate-x-full transition-transform duration-700"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                      {tech.icon}
                    </div>
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                      hoveredTech === tech.id ? 'text-slate-900' : 'text-slate-100'
                    }`}>
                      {tech.title}
                    </h3>
                    <p className={`text-sm font-semibold mt-2 transition-colors duration-300 ${
                      hoveredTech === tech.id ? 'text-slate-800' : 'text-slate-400'
                    }`}>
                      {tech.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-6 leading-relaxed transition-colors duration-300 ${
                    hoveredTech === tech.id ? 'text-slate-800' : 'text-slate-400'
                  }`}>
                    {tech.description}
                  </p>

                  {/* Stack Items */}
                  <div className="space-y-3">
                    {tech.stack.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 transition-all duration-300 ${
                          hoveredTech === tech.id ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <span className={`text-lg transition-colors duration-300 ${
                          hoveredTech === tech.id ? 'text-slate-900' : 'text-blue-400'
                        }`}>
                          ✦
                        </span>
                        <span className={`transition-colors duration-300 ${
                          hoveredTech === tech.id ? 'text-slate-900' : 'text-slate-300'
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Arrow */}
                  <div className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    hoveredTech === tech.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-700/50 text-slate-400'
                  }`}>
                    <span className="text-sm font-semibold">Learn More</span>
                    <span className={`transition-transform duration-300 ${hoveredTech === tech.id ? 'translate-x-2' : ''}`}>
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Note */}
        <div className={`mt-16 p-8 rounded-2xl border border-slate-600 bg-slate-700/20 backdrop-blur transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '450ms' }}>
          <p className="text-slate-300 text-center">
            <span className="text-blue-400 font-semibold">Local-First Privacy:</span> Your camera feed is processed entirely in your browser using TensorFlow.js. Video never leaves your device—only emotion data is sent to our servers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
