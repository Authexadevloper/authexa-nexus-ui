
import { motion } from 'framer-motion';
import { Database, Shield, Zap, Bot, Settings, BarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';

const solutions = [
  {
    title: "ITSM Portal Suite",
    description: "Complete IT Service Management platform with incident tracking, service catalog, and automated workflows",
    icon: Database,
    features: ["Incident Management", "Service Catalog", "Knowledge Base", "Asset Management", "SLA Monitoring"],
    color: "from-[#00F5FF]/20 to-blue-500/20",
    borderColor: "border-[#00F5FF]/30"
  },
  {
    title: "AI Automation Engine",
    description: "Intelligent automation platform with conversational AI agents and robotic process automation",
    icon: Bot,
    features: ["AI Chat Agents", "Voice Support", "Process Automation", "Smart Routing", "Learning Analytics"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400/30"
  },
  {
    title: "Zero-Touch Deployment",
    description: "Automated software installation and configuration management for enterprise environments",
    icon: Zap,
    features: ["Script Generation", "Silent Installation", "Configuration Management", "Rollback Capability", "Compliance Monitoring"],
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-400/30"
  },
  {
    title: "Security & Compliance",
    description: "Advanced security monitoring with compliance tracking and automated threat response",
    icon: Shield,
    features: ["Security Monitoring", "Compliance Tracking", "Threat Detection", "Access Control", "Audit Trails"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-400/30"
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics dashboard with real-time monitoring and predictive insights",
    icon: BarChart,
    features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Performance Metrics", "Trend Analysis"],
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-400/30"
  },
  {
    title: "Integration Platform",
    description: "Seamless integration with existing enterprise systems and third-party applications",
    icon: Settings,
    features: ["API Gateway", "Data Sync", "Workflow Integration", "Legacy System Support", "Cloud Connectivity"],
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-400/30"
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#0B1426] text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent font-mono">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Comprehensive ITSM platform with AI-powered automation for modern enterprises
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="perspective-1000"
              >
                <div className={`relative p-8 rounded-xl bg-gradient-to-br ${solution.color} border ${solution.borderColor} backdrop-blur-sm h-full`}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-[#00F5FF]/20 border border-[#00F5FF]/30 mr-4">
                      <solution.icon className="h-6 w-6 text-[#00F5FF]" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono">{solution.title}</h3>
                  </div>
                  
                  <p className="text-[#64748B] mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-2">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-[#00F5FF] rounded-full mr-3" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
