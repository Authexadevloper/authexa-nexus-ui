
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function About() {
  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime SLA", icon: Target },
    { number: "50+", label: "Industry Awards", icon: Award },
    { number: "24/7", label: "AI Support", icon: Zap }
  ];

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
              About Authexa
            </h1>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Leading the future of enterprise automation with AI-powered ITSM solutions
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#00F5FF]/20 to-purple-500/20 border border-[#00F5FF]/30 mb-4 inline-block">
                  <stat.icon className="h-8 w-8 text-[#00F5FF]" />
                </div>
                <div className="text-3xl font-bold text-white font-mono mb-2">{stat.number}</div>
                <div className="text-[#64748B]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-[#00F5FF] bg-clip-text text-transparent font-mono">
                Our Mission
              </h2>
              <p className="text-[#64748B] mb-6 leading-relaxed text-lg">
                We're revolutionizing enterprise IT operations through intelligent automation and AI-powered solutions. 
                Our mission is to eliminate manual processes, reduce operational overhead, and enable organizations 
                to focus on innovation rather than maintenance.
              </p>
              <p className="text-[#64748B] leading-relaxed text-lg">
                With cutting-edge technology and deep industry expertise, we deliver ITSM solutions that adapt, 
                learn, and evolve with your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="p-8 rounded-xl bg-gradient-to-br from-[#0B1426] to-slate-800/50 border border-[#00F5FF]/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-white font-mono">Why Choose Authexa?</h3>
                <div className="space-y-4">
                  {[
                    "AI-First Approach to ITSM",
                    "Zero-Touch Automation",
                    "Enterprise-Grade Security",
                    "24/7 Intelligent Support",
                    "Seamless Integration",
                    "Scalable Architecture"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <div className="w-3 h-3 bg-[#00F5FF] rounded-full mr-4" />
                      <span className="text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
