import React, { useState, useEffect } from "react";

function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      number: 1,
      title: "You Start the Conversation",
      description: "Lyra sees you and adapts to your emotional state automatically",
      fullDescription: "The moment you appear on camera, Lyra analyzes your facial expressions, posture, and emotional state. This context-aware approach means Lyra greets you appropriately—whether you need an energetic interaction or a calm conversation.",
      icon: "👀",
      color: "from-blue-500 to-blue-400"
    },
    {
      number: 2,
      title: "It Listens & Understands",
      description: "Real-time processing of voice, emotion, and context",
      fullDescription: "Your words are processed in real-time with sub-200ms latency. Lyra doesn't just hear words—it analyzes tone, emotion, intent, and context from your speech and body language to truly understand what you mean.",
      icon: "🎧",
      color: "from-purple-500 to-purple-400"
    },
    {
      number: 3,
      title: "It Responds with Empathy",
      description: "Avatar expresses emotion through voice, face, and body language",
      fullDescription: "Lyra doesn't give robotic responses. The avatar adjusts its expression, tone, and body language to match the emotional nuance of your conversation. Your feelings are acknowledged, not just heard.",
      icon: "💭",
      color: "from-pink-500 to-pink-400"
    },
    {
      number: 4,
      title: "It Remembers You",
      description: "Builds long-term memory of your preferences and conversations",
      fullDescription: "Every interaction refines Lyra's understanding of you. Preferences, patterns, sensitive topics, communication style—all remembered securely. Next time you talk, Lyra already knows you better than most people.",
      icon: "🧠",
      color: "from-green-500 to-green-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">The <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Experience</span></h2>
          <p className="text-slate-400 text-lg">A four-step journey of intelligent interaction</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`group cursor-pointer transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* Step Card */}
                <div className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-linear-to-r ' + step.color + ' border-transparent scale-105'
                    : 'bg-slate-700/30 border-slate-600 hover:border-slate-500'
                }`}>
                  {/* Step Number Circle */}
                  <div className={`flex items-center gap-4 mb-4`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl transition-all duration-300 ${
                      activeStep === idx
                        ? 'bg-slate-900 text-white scale-110'
                        : `bg-linear-to-br ${step.color} text-white`
                    }`}>
                      {step.icon}
                    </div>
                    <div className={`transition-all duration-300 ${activeStep === idx ? 'text-slate-900' : 'text-slate-300'}`}>
                      <div className="text-sm font-semibold opacity-70">Step {step.number}</div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`transition-all duration-300 ${activeStep === idx ? 'text-slate-900' : 'text-slate-300'}`}>
                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                    <p className="text-sm opacity-90">{step.description}</p>
                    <p className={`text-sm mt-3 leading-relaxed transition-all duration-300 ${
                      activeStep === idx 
                        ? 'opacity-100 max-h-24 text-slate-800' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      {step.fullDescription}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 h-1 bg-slate-600/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-linear-to-r ${step.color} transition-all duration-500`}
                      style={{ width: activeStep === idx ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Example Scenario */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-blue-400/30 relative overflow-hidden group">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              </div>

              <div className="relative z-10">
                {/* Conversation Bubble Animation */}
                <div className="space-y-6">
                  {/* AI Message */}
                  <div className={`flex justify-start transition-all duration-1000 transform ${activeStep >= 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="bg-slate-800/80 backdrop-blur rounded-2xl rounded-tl-none px-6 py-4 max-w-xs">
                      <p className="text-sm text-slate-300">
                        <span className="text-2xl mr-2">🤖</span>
                        "You look a bit overwhelmed today. Long day?"
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className={`flex justify-end transition-all duration-1000 transform ${activeStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl rounded-tr-none px-6 py-4 max-w-xs">
                      <p className="text-sm text-white">
                        <span className="text-2xl mr-2">😔</span>
                        "Yeah, my boss is being impossible"
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className={`flex justify-start transition-all duration-1000 transform ${activeStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '400ms'}}>
                    <div className="bg-slate-800/80 backdrop-blur rounded-2xl rounded-tl-none px-6 py-4 max-w-xs">
                      <p className="text-sm text-slate-300">
                        <span className="text-2xl mr-2">🤗</span>
                        "I'm sorry to hear that. Want to vent or draft a reply?"
                      </p>
                    </div>
                  </div>

                  {/* Thinking indicator */}
                  <div className={`flex justify-start transition-all duration-1000 transform ${activeStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '600ms'}}>
                    <div className="flex gap-2 items-center">
                      <span className="text-xl">💡</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <p className="text-xs text-slate-400 mb-2">✨ AI Perception:</p>
                  <div className="flex gap-3 text-xs text-slate-300">
                    <span className="px-2 py-1 bg-blue-500/20 rounded-full">😔 Stressed</span>
                    <span className="px-2 py-1 bg-purple-500/20 rounded-full">💭 Frustrated</span>
                    <span className="px-2 py-1 bg-pink-500/20 rounded-full">🎯 Seeking advice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
