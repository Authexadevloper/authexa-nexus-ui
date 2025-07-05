
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const capabilities = [
  {
    title: "Autonomous ITSM Ticketing",
    description: "AI agents automatically classify, route, and resolve support tickets without human intervention, learning from each interaction.",
    icon: "🎯",
    details: "Advanced machine learning algorithms analyze ticket patterns, user behavior, and system context to provide intelligent automated resolution paths with full audit trails.",
    color: "from-[#0B1426] to-[#00F5FF]/20",
    borderColor: "border-[#00F5FF]/30 hover:border-[#00F5FF]/60",
    metrics: "Saved 120+ hours/week"
  },
  {
    title: "AI Agents for Voice + Chat",
    description: "Deploy conversational AI agents that understand context, sentiment, and intent across multiple communication channels.",
    icon: "🤖",
    details: "Natural language processing engines with contextual memory provide human-like interactions while seamlessly escalating complex issues to appropriate teams.",
    color: "from-[#0B1426] to-purple-500/20",
    borderColor: "border-purple-400/30 hover:border-purple-400/60",
    metrics: "24/7 intelligent support"
  },
  {
    title: "Zero-Touch Software Installation",
    description: "Automated software deployment with intelligent dependency management, conflict detection, and rollback capabilities.",
    icon: "⚡",
    details: "Autonomous deployment engine validates system compatibility, manages dependencies, and executes installations with real-time monitoring and automatic rollback on failure detection.",
    color: "from-[#0B1426] to-emerald-500/20",
    borderColor: "border-emerald-400/30 hover:border-emerald-400/60",
    metrics: "Zero-downtime deployments"
  },
  {
    title: "Agentic Task Resolution",
    description: "Intelligent agents that understand complex multi-step processes and execute them autonomously with decision-making capabilities.",
    icon: "🔄",
    details: "AI-powered task orchestration with contextual decision trees, exception handling, and adaptive learning to optimize process execution over time.",
    color: "from-[#0B1426] to-orange-500/20",
    borderColor: "border-orange-400/30 hover:border-orange-400/60",
    metrics: "85% auto-resolution rate"
  },
  {
    title: "Remote Access & System Self-Healing",
    description: "Proactive system monitoring with predictive analytics and automated remediation to prevent issues before they impact operations.",
    icon: "🛡️",
    details: "Continuous system health monitoring with machine learning models that detect anomalies, predict failures, and execute preventive maintenance automatically.",
    color: "from-[#0B1426] to-[#00F5FF]/20",
    borderColor: "border-[#00F5FF]/30 hover:border-[#00F5FF]/60",
    metrics: "99.2% system uptime"
  },
  {
    title: "Intelligent Workflow Orchestration",
    description: "Connect and coordinate complex business processes across systems with adaptive AI decision-making and exception handling.",
    icon: "🔗",
    details: "Distributed orchestration platform manages cross-system workflows, handles edge cases intelligently, and continuously optimizes process flows based on performance data.",
    color: "from-[#0B1426] to-purple-500/20",
    borderColor: "border-purple-400/30 hover:border-purple-400/60",
    metrics: "60% faster process execution"
  }
];

export default function Interactive3DCapabilities() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-[#0B1426] via-slate-950 to-[#0B1426] relative overflow-hidden">
      {/* Animated background circuit elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#00F5FF] rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000 shadow-lg shadow-purple-400/50" />
        <div className="absolute bottom-40 left-1/4 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse delay-2000 shadow-lg shadow-emerald-400/50" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-500 shadow-lg shadow-orange-400/50" />
        
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 15}%`} y1="10%" x2={`${30 + i * 10}%`} y2="90%"
              stroke="#00F5FF"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ 
                duration: 3 + i, 
                repeat: Infinity, 
                repeatType: "reverse",
                delay: i * 0.5 
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent font-mono">
            Core Capabilities
          </h2>
          <p className="text-2xl text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            Experience the future of autonomous enterprise operations with our AI-driven platform
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
              <Card className={`relative overflow-hidden bg-gradient-to-br ${capability.color} border ${capability.borderColor} transition-all duration-300 h-full backdrop-blur-sm`}>
                {/* Glowing frame animation */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredCard === index ? '100%' : '-100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
                
                <CardContent className="p-8 h-full flex flex-col relative z-10">
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
                  
                  <h3 className="text-2xl font-bold mb-4 text-white font-mono">
                    {capability.title}
                  </h3>
                  
                  <p className="text-[#64748B] leading-relaxed mb-6 flex-grow">
                    {capability.description}
                  </p>
                  
                  {/* Metrics badge */}
                  <div className="mb-4 px-3 py-2 bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 rounded-lg border border-[#00F5FF]/30">
                    <p className="text-[#00F5FF] font-semibold text-sm text-center font-mono">{capability.metrics}</p>
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
                    <div className="border-t border-[#64748B]/30 pt-4 mt-4">
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {capability.details}
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 border border-[#00F5FF]/30 text-[#00F5FF] font-semibold text-sm transition-all duration-300 hover:border-[#00F5FF]/60 font-mono"
                  >
                    {selectedCard === index ? 'Show Less' : 'Learn More'}
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
