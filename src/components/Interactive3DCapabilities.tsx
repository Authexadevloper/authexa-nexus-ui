
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Bot, Zap, Clipboard, BookOpen, Settings } from 'lucide-react';

const capabilities = [
  {
    title: "Complete ITSM Self-Service Portal",
    description: "Full-featured service desk with incident tracking, service catalog, knowledge base, and asset management - just like enterprise solutions.",
    icon: Database,
    details: "Professional ITSM portal featuring dashboard analytics, automated ticket routing, SLA management, and comprehensive reporting capabilities.",
    color: "from-[#0B1426] to-[#00F5FF]/20",
    borderColor: "border-[#00F5FF]/30 hover:border-[#00F5FF]/60",
    metrics: "Complete ITSM Suite"
  },
  {
    title: "AI Voice & Chat Support Agents",
    description: "Deploy intelligent conversational agents that handle support requests through voice calls and chat interfaces with natural language processing.",
    icon: Bot,
    details: "AI-powered support agents with context awareness, sentiment analysis, and seamless escalation to human agents when needed.",
    color: "from-[#0B1426] to-purple-500/20",
    borderColor: "border-purple-400/30 hover:border-purple-400/60",
    metrics: "24/7 AI Support"
  },
  {
    title: "Automated Software Installation",
    description: "Zero-touch software deployment with intelligent script generation for Windows environments using voice or text commands.",
    icon: Zap,
    details: "Generate PowerShell and batch scripts automatically, handle software dependencies, and provide installation status tracking.",
    color: "from-[#0B1426] to-emerald-500/20",
    borderColor: "border-emerald-400/30 hover:border-emerald-400/60",
    metrics: "Automated Deployments"
  },
  {
    title: "Intelligent Incident Management",
    description: "Smart ticketing system with automated classification, priority assignment, and resolution tracking with real-time dashboards.",
    icon: Clipboard,
    details: "Advanced incident lifecycle management with automated workflows, escalation rules, and comprehensive analytics dashboard.",
    color: "from-[#0B1426] to-orange-500/20",
    borderColor: "border-orange-400/30 hover:border-orange-400/60",
    metrics: "Smart Ticketing"
  },
  {
    title: "Service Catalog & Knowledge Base",
    description: "Comprehensive service offerings with searchable knowledge articles, FAQs, and self-help resources for end users.",
    icon: BookOpen,
    details: "Integrated service catalog with approval workflows, knowledge management system, and user-friendly self-service options.",
    color: "from-[#0B1426] to-[#00F5FF]/20",
    borderColor: "border-[#00F5FF]/30 hover:border-[#00F5FF]/60",
    metrics: "Self-Service Portal"
  },
  {
    title: "Asset & Configuration Management",
    description: "Track and manage IT assets with automated discovery, configuration monitoring, and lifecycle management capabilities.",
    icon: Settings,
    details: "Complete CMDB with automated asset discovery, configuration tracking, and integration with incident management processes.",
    color: "from-[#0B1426] to-purple-500/20",
    borderColor: "border-purple-400/30 hover:border-purple-400/60",
    metrics: "Asset Tracking"
  }
];

export default function Interactive3DCapabilities() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  
  // Create zoom effect based on scroll
  const scale = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0.8, 1.1, 1]);
  const rotateX = useTransform(scrollYProgress, [0.2, 0.6], [-15, 0]);

  return (
    <section className="py-32 bg-gradient-to-b from-[#0B1426] via-slate-950 to-[#0B1426] relative overflow-hidden">
      {/* Enhanced robotic background elements */}
      <div className="absolute inset-0">
        {/* Animated robotic circuit lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + i * 8}%`} y1="0%" x2={`${20 + i * 6}%`} y2="100%"
              stroke="#00F5FF"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ 
                duration: 3 + i * 0.5, 
                repeat: Infinity, 
                repeatType: "reverse",
                delay: i * 0.3 
              }}
            />
          ))}
        </svg>
        
        {/* Floating robotic nodes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`robo-${i}`}
            className="absolute w-4 h-4 border-2 border-[#00F5FF] bg-[#00F5FF]/20 rotate-45"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              rotate: [45, 225, 45],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
          style={{ scale, rotateX }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent font-mono">
            ITSM Platform Features
          </h2>
          <p className="text-2xl text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade IT service management with AI-powered automation and robotic process orchestration
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ scale }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 8,
                rotateX: 5,
                z: 50,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(selectedCard === index ? null : index)}
              className="cursor-pointer perspective-1000"
              style={{ perspective: '1000px' }}
            >
              <Card className={`relative overflow-hidden bg-gradient-to-br ${capability.color} border ${capability.borderColor} transition-all duration-500 h-full backdrop-blur-sm transform-gpu`}>
                {/* Enhanced glowing frame animation */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `conic-gradient(from ${hoveredCard === index ? '0deg' : '180deg'}, 
                        transparent, #00F5FF40, transparent, #FF6B6B40, transparent)`
                    }}
                    animate={{ 
                      rotate: hoveredCard === index ? 360 : 0,
                    }}
                    transition={{ duration: 2, ease: "linear", repeat: hoveredCard === index ? Infinity : 0 }}
                  />
                </div>
                
                {/* Robotic corner elements */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#00F5FF]/50" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-[#00F5FF]/50" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-[#00F5FF]/50" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#00F5FF]/50" />
                
                <CardContent className="p-8 h-full flex flex-col relative z-10">
                  <motion.div 
                    className="mb-6 p-3 rounded-lg bg-[#00F5FF]/20 border border-[#00F5FF]/30 w-fit"
                    animate={{ 
                      scale: hoveredCard === index ? 1.1 : 1,
                      rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                  >
                    <capability.icon className="h-8 w-8 text-[#00F5FF]" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white font-mono leading-tight">
                    {capability.title}
                  </h3>
                  
                  <p className="text-[#64748B] leading-relaxed mb-6 flex-grow">
                    {capability.description}
                  </p>
                  
                  {/* Enhanced metrics badge */}
                  <div className="mb-4 px-4 py-3 bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 rounded-lg border border-[#00F5FF]/30 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F5FF]/10 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-[#00F5FF] font-bold text-center font-mono relative z-10">
                      {capability.metrics}
                    </p>
                  </div>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: selectedCard === index ? 'auto' : 0,
                      opacity: selectedCard === index ? 1 : 0
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
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
                    className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 border border-[#00F5FF]/30 text-[#00F5FF] font-semibold text-sm transition-all duration-300 hover:border-[#00F5FF]/60 font-mono relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#00F5FF]/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">
                      {selectedCard === index ? 'Show Less' : 'Learn More'}
                    </span>
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
