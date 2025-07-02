
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const workflowSteps = [
  {
    title: "AI Detects Event",
    description: "Intelligent monitoring identifies system anomalies or automation opportunities",
    icon: "🔍",
    position: { x: 0, y: 0 }
  },
  {
    title: "Agent Takes Action",
    description: "Autonomous execution of complex enterprise tasks without human intervention",
    icon: "⚡",
    position: { x: 200, y: 100 }
  },
  {
    title: "System Resolves",
    description: "Real-time resolution with comprehensive logging and status updates",
    icon: "✅",
    position: { x: 400, y: 0 }
  }
];

export default function WorkflowVisualization() {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How AI Agents Work
        </motion.h2>
        
        <div className="relative">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <motion.path
              d="M 150 200 Q 300 150 450 200"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M 550 200 Q 700 150 850 200"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F5FF" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#00F5FF" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Workflow steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="relative"
              >
                <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="text-6xl mb-6"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
