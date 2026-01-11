import React, { useState, useEffect } from "react";

function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      id: 1,
      emoji: "👁️",
      title: "Visual Perception",
      color: "from-blue-500 to-blue-400",
      borderColor: "hover:border-blue-400",
      tagline: "See what users feel",
      description: "Lyra analyzes facial expressions and body language in real-time to understand emotions, attention levels, and intent. This enables truly context-aware responses.",
      items: [
        "Real-time emotion recognition from facial expressions",
        "Presence detection & personalized greetings for each user",
        "Gaze tracking & attention awareness for engagement",
        "Gesture recognition (nods, waves, hand movements)",
        "Head pose and micro-expression analysis"
      ]
    },
    {
      id: 2,
      emoji: "👂",
      title: "Auditory Perception",
      color: "from-purple-500 to-purple-400",
      borderColor: "hover:border-purple-400",
      tagline: "Hear every nuance",
      description: "Advanced audio processing detects not just words, but tone, emotion, and intent. Ultra-low latency means natural conversation flow without awkward pauses.",
      items: [
        "Voice activity detection with noise filtering",
        "Barge-in capability for natural interruptions",
        "Tone & emotion analysis from speech patterns",
        "Ultra-low latency processing (<200ms)",
        "Multi-speaker recognition and separation",
        "Accent and language proficiency detection"
      ]
    },
    {
      id: 3,
      emoji: "🎭",
      title: "Embodied Expression",
      color: "from-pink-500 to-pink-400",
      borderColor: "hover:border-pink-400",
      tagline: "Express with authenticity",
      description: "A photorealistic avatar doesn't just answer questions—it shows genuine emotion through facial expressions, body language, and eye contact that feels remarkably human.",
      items: [
        "3D avatar with full body language and posture",
        "Real-time lip-syncing matching speech patterns",
        "Micro-expressions & natural blinking patterns",
        "Photo-to-Life animation from user images",
        "Dynamic lighting and depth-aware rendering",
        "Emotional state reflected in avatar appearance"
      ]
    }
  ];

  return (
    <section id="features" className="py-32 px-6 bg-slate-800/30 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">The Senses of <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Lyra</span></h2>
          <p className="text-slate-400 text-lg">Three dimensions of perception that make AI truly human</p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`group relative transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>

              {/* Card */}
              <div className={`relative bg-slate-700/40 backdrop-blur-md rounded-2xl p-8 border border-slate-600 ${feature.borderColor} transition-all duration-300 h-full overflow-hidden`}>
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-10 blur-2xl group-hover:translate-x-full transition-transform duration-700"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`text-6xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    {feature.emoji}
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-linear-to-r ${feature.color} group-hover:bg-clip-text`}>
                    {feature.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-slate-400 mb-4 font-medium italic group-hover:text-slate-300 transition-colors">
                    {feature.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed group-hover:text-slate-100 transition-colors">
                    {feature.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-3 text-slate-300 transition-all duration-300 group-hover:text-slate-100"
                        style={{
                          opacity: hoveredCard === feature.id ? 1 : 0.9,
                          transform: hoveredCard === feature.id ? `translateX(${i * 2}px)` : 'translateX(0)'
                        }}
                      >
                        <span className={`text-lg transition-all duration-300 group-hover:bg-linear-to-r ${feature.color} group-hover:bg-clip-text group-hover:text-transparent`}>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Border Animation */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{
                  animation: hoveredCard === feature.id ? 'shimmer 2s infinite' : 'none'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

export default Features;
