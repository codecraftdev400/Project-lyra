import React, { useState, useEffect } from "react";

function UseCases() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCase, setHoveredCase] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const useCases = [
    {
      id: "b2b",
      title: "For Business",
      emoji: "🏢",
      color: "from-blue-500 to-blue-400",
      description: "Transform customer interaction with empathetic AI that increases satisfaction and reduces support costs.",
      cases: [
        {
          icon: "🏪",
          title: "Customer Service Kiosks",
          desc: "Replace boring screens with empathetic AI assistants that handle inquiries with genuine care and emotional intelligence. Reduce wait times and increase customer satisfaction."
        },
        {
          icon: "⚕️",
          title: "Medical Intake",
          desc: "AI nurses that detect patient distress through visual cues, adjusting communication style accordingly. Improves patient comfort and data quality during clinical assessments."
        },
        {
          icon: "📚",
          title: "Training & Education",
          desc: "Interactive instructors that adapt to student engagement levels and learning pace. Real-time feedback based on facial expressions helps educators identify struggling students instantly."
        },
        {
          icon: "📞",
          title: "Call Center Support",
          desc: "AI agents that escalate to humans when emotional cues indicate frustration, ensuring empathy-first customer service while reducing staff burnout."
        }
      ]
    },
    {
      id: "b2c",
      title: "For Consumers",
      emoji: "👤",
      color: "from-purple-500 to-purple-400",
      description: "Personal AI that understands you emotionally, learns your preferences, and becomes a trusted part of your daily life.",
      cases: [
        {
          icon: "💎",
          title: "AI Companion",
          desc: "$10/month subscription for an empathetic friend who truly knows you. Available 24/7 for conversation, advice, mental health support, and genuine connection without judgment."
        },
        {
          icon: "🎮",
          title: "Interactive Gaming",
          desc: "NPCs that react authentically to your real facial expressions and emotions. Create immersive games where characters respond to your genuine reactions, not just controller inputs."
        },
        {
          icon: "💕",
          title: "Grief Tech",
          desc: "Talk to a photo of a lost loved one, animated by Lyra's AI. Preserve memories and continue conversations with lifelike expressions that bring comfort during difficult times."
        },
        {
          icon: "👶",
          title: "Accessibility & Autism",
          desc: "Social interaction partner for autistic individuals and those with social anxiety. Practice conversations in a judgment-free environment with an AI that never loses patience."
        }
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-32 px-6 bg-slate-800/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-linear-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Real-World</span> Applications
          </h2>
          <p className="text-slate-400 text-lg">Transform industries and enrich lives</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {useCases.map((useCase, idx) => (
            <div
              key={useCase.id}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className={`text-3xl font-bold mb-2 flex items-center gap-3 bg-linear-to-r ${useCase.color} bg-clip-text text-transparent`}>
                  <span className="text-4xl">{useCase.emoji}</span>
                  {useCase.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{useCase.description}</p>
                <div className="h-1 w-16 bg-linear-to-r rounded-full" style={{background: `linear-gradient(to right, ${useCase.color})`}}></div>
              </div>

              {/* Use Cases List */}
              <div className="space-y-4">
                {useCase.cases.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="group cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredCase(`${useCase.id}-${itemIdx}`)}
                    onMouseLeave={() => setHoveredCase(null)}
                  >
                    <div className={`relative p-6 rounded-xl border transition-all duration-300 overflow-hidden ${
                      hoveredCase === `${useCase.id}-${itemIdx}`
                        ? `bg-linear-to-r ${useCase.color} border-transparent shadow-2xl`
                        : 'bg-slate-700/40 border-slate-600 hover:border-slate-500'
                    }`}>
                      {/* Hover Shine */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-10 blur-2xl group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex gap-4">
                        <div className={`text-3xl transition-transform duration-300 group-hover:scale-125`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                            hoveredCase === `${useCase.id}-${itemIdx}` ? 'text-slate-900' : 'text-slate-100'
                          }`}>
                            {item.title}
                          </h4>
                          <p className={`text-sm transition-colors duration-300 ${
                            hoveredCase === `${useCase.id}-${itemIdx}` ? 'text-slate-800' : 'text-slate-400'
                          }`}>
                            {item.desc}
                          </p>
                        </div>
                        <div className={`text-xl transition-transform duration-300 group-hover:translate-x-2`}>
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
