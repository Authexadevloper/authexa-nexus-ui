
import { motion } from 'framer-motion';
import { Clock, Users, Wrench, Headphones, Code, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';

const services = [
  {
    title: "24/7 AI Support",
    description: "Round-the-clock intelligent support with AI agents handling routine queries and escalating complex issues",
    icon: Headphones,
    price: "Enterprise",
    features: ["AI Chat Support", "Voice Assistant", "Multi-language", "Smart Escalation"]
  },
  {
    title: "Implementation Services",
    description: "Complete setup and configuration of your ITSM environment with expert guidance",
    icon: Wrench,
    price: "Contact Us",
    features: ["System Setup", "Data Migration", "Customization", "Training"]
  },
  {
    title: "Managed Services",
    description: "Ongoing management and maintenance of your IT infrastructure with proactive monitoring",
    icon: Users,
    price: "Monthly",
    features: ["Proactive Monitoring", "Maintenance", "Updates", "Optimization"]
  },
  {
    title: "Custom Development",
    description: "Tailored solutions and integrations to meet your specific business requirements",
    icon: Code,
    price: "Quote",
    features: ["Custom Workflows", "API Development", "Integrations", "Automation Scripts"]
  },
  {
    title: "Consulting Services",
    description: "Strategic guidance for digital transformation and IT process optimization",
    icon: TrendingUp,
    price: "Hourly",
    features: ["Strategy Planning", "Process Design", "Best Practices", "Transformation Roadmap"]
  },
  {
    title: "Emergency Response",
    description: "Rapid response team for critical incidents and system outages",
    icon: Clock,
    price: "SLA Based",
    features: ["Immediate Response", "Expert Team", "Root Cause Analysis", "Prevention Planning"]
  }
];

export default function Services() {
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
              Professional Services
            </h1>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Expert services to maximize your investment in AI-powered ITSM solutions
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02, rotateX: 5 }}
                className="perspective-1000"
              >
                <div className="relative p-8 rounded-xl bg-gradient-to-br from-[#0B1426] to-slate-800/50 border border-[#00F5FF]/30 backdrop-blur-sm h-full hover:border-[#00F5FF]/60 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-lg bg-[#00F5FF]/20 border border-[#00F5FF]/30">
                      <service.icon className="h-6 w-6 text-[#00F5FF]" />
                    </div>
                    <span className="text-[#00F5FF] font-mono text-sm font-bold">{service.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 font-mono">{service.title}</h3>
                  <p className="text-[#64748B] mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-[#00F5FF] rounded-full mr-3" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 border border-[#00F5FF]/50 rounded-lg text-[#00F5FF] font-semibold text-sm transition-all duration-300 hover:border-[#00F5FF] font-mono"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
