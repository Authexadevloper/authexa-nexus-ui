
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const capabilities = [
  {
    title: "AI-Powered ITSM Automation",
    description: "Revolutionary workflow automation that adapts and learns from your IT operations, reducing manual tasks by 90%.",
    icon: "🤖",
    details: "Advanced machine learning algorithms analyze patterns in your IT service management processes, automatically optimizing ticket routing, escalation procedures, and resource allocation.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Autonomous Support Agents",
    description: "Deploy intelligent AI agents that handle complex customer interactions across all channels with human-like understanding.",
    icon: "🧠",
    details: "Natural language processing combined with deep learning enables our agents to understand context, emotion, and intent, providing personalized support 24/7.",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Zero-Touch Software Deployment",
    description: "Completely autonomous software installation and configuration across your entire enterprise infrastructure.",
    icon: "⚡",
    details: "Intelligent deployment orchestration with predictive conflict resolution, automated rollback capabilities, and real-time monitoring across thousands of endpoints.",
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Predictive System Healing",
    description: "Self-healing infrastructure that identifies and resolves issues before they impact your users or business operations.",
    icon: "🔮",
    details: "Advanced anomaly detection using machine learning models trained on system behaviors, with autonomous remediation capabilities and proactive maintenance scheduling.",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Enterprise AI Orchestration",
    description: "Coordinate complex multi-system workflows with intelligent decision-making across your entire technology stack.",
    icon: "🎯",
    details: "Distributed AI agents collaborate to execute enterprise-wide processes, making intelligent decisions and adapting to changing business requirements in real-time.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Real-Time Intelligence Hub",
    description: "Centralized AI command center providing real-time insights and automated responses across all your systems.",
    icon: "📡",
    details: "Unified dashboard with predictive analytics, real-time monitoring, and automated incident response powered by advanced AI algorithms and machine learning.",
    color: "from-yellow-500 to-orange-600"
  }
];

export default function Interactive3DCapabilities() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Core Capabilities
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of enterprise automation with our advanced AI-driven platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(selectedCard === index ? null : index)}
              className="cursor-pointer perspective-1000"
              style={{ perspective: '1000px' }}
            >
              <Card className={`relative overflow-hidden bg-gradient-to-br ${capability.color} p-[1px] h-full`}>
                <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-lg h-full backdrop-blur-sm">
                  <CardContent className="p-8 h-full flex flex-col">
                    <motion.div 
                      className="text-6xl mb-6 filter drop-shadow-lg"
                      animate={{ 
                        scale: hoveredCard === index ? 1.2 : 1,
                        rotate: hoveredCard === index ? 10 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {capability.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {capability.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                      {capability.description}
                    </p>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: selectedCard === index ? 'auto' : 0,
                        opacity: selectedCard === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-600 pt-4 mt-4">
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {capability.details}
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-4 px-4 py-2 rounded-lg bg-gradient-to-r ${capability.color} text-white font-semibold text-sm transition-all duration-300`}
                    >
                      {selectedCard === index ? 'Show Less' : 'Learn More'}
                    </motion.button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
