
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const capabilities = [
  {
    title: "Intelligent IT Service Management",
    description: "Transform your IT operations with AI that learns and adapts, reducing response times and eliminating repetitive tasks through smart automation.",
    icon: "⚙️",
    details: "Our machine learning platform continuously analyzes IT workflows, automatically optimizing ticket classification, routing, and resolution while maintaining detailed audit trails for compliance.",
    color: "from-blue-600 to-cyan-600",
    metrics: "90% reduction in manual tasks"
  },
  {
    title: "Autonomous Digital Assistants",
    description: "Deploy intelligent agents that understand context and provide human-like support across multiple channels, available 24/7.",
    icon: "🤖",
    details: "Advanced natural language processing enables contextual understanding of user intent, sentiment analysis, and personalized response generation with seamless escalation to human agents when needed.",
    color: "from-purple-600 to-pink-600",
    metrics: "24/7 availability with 95% accuracy"
  },
  {
    title: "Smart Deployment Pipeline",
    description: "Automate software rollouts with intelligent risk assessment, conflict detection, and seamless rollback capabilities.",
    icon: "🚀",
    details: "Predictive deployment engine analyzes dependencies, tests compatibility, and executes phased rollouts with real-time monitoring and automatic rollback triggers for maximum reliability.",
    color: "from-emerald-600 to-teal-600",
    metrics: "Zero-downtime deployments"
  },
  {
    title: "Proactive System Monitoring",
    description: "Identify and resolve system issues before they impact operations using predictive analytics and automated remediation.",
    icon: "🛡️",
    details: "Machine learning models trained on system patterns detect anomalies early, trigger preventive actions, and maintain optimal performance through intelligent resource management.",
    color: "from-orange-600 to-red-600",
    metrics: "99.9% uptime guarantee"
  },
  {
    title: "Workflow Orchestration Platform",
    description: "Connect and coordinate complex business processes across systems with intelligent decision-making and adaptive execution.",
    icon: "🔗",
    details: "Distributed orchestration engine manages multi-system workflows, handles exceptions gracefully, and optimizes process flows based on performance data and business rules.",
    color: "from-indigo-600 to-purple-600",
    metrics: "50% faster process execution"
  },
  {
    title: "Unified Analytics Dashboard",
    description: "Centralized command center with real-time insights, predictive analytics, and automated response capabilities for your entire infrastructure.",
    icon: "📊",
    details: "Comprehensive monitoring and analytics platform with customizable dashboards, intelligent alerting, and automated response workflows powered by machine learning insights.",
    color: "from-amber-600 to-orange-600",
    metrics: "Real-time insights across all systems"
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
                    
                    {/* Metrics badge */}
                    <div className="mb-4 px-3 py-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-lg border border-slate-600/50">
                      <p className="text-cyan-300 font-semibold text-sm text-center">{capability.metrics}</p>
                    </div>
                    
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
