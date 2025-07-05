
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Interactive3DCapabilities from '@/components/Interactive3DCapabilities';
import InteractiveButtons from '@/components/InteractiveButtons';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import InteractiveDemo from '@/components/InteractiveDemo';
import DynamicBackground from '@/components/DynamicBackground';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1426] via-slate-900 to-[#0B1426] overflow-hidden">
      <DynamicBackground />
      
      {/* Neural network grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRjVGRiIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      
      {/* Floating circuit elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#00F5FF] rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000 shadow-lg shadow-purple-400/50" />
        <div className="absolute bottom-40 left-1/4 w-2.5 h-2.5 bg-[#00F5FF] rounded-full animate-pulse delay-2000 shadow-lg shadow-cyan-400/50" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500 shadow-lg shadow-purple-400/50" />
        
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <motion.line
            x1="10%" y1="20%" x2="90%" y2="40%"
            stroke="#00F5FF"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="20%" y1="80%" x2="80%" y2="20%"
            stroke="#A855F7"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/ebc0cc5c-ee6c-4c12-a43e-ee9ef52e068f.png" 
            alt="Authexa Logo" 
            className="h-24 w-auto mx-auto mb-4 filter drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent leading-tight font-mono">
            Orchestrating the Future with AI
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-transparent bg-gradient-to-r from-[#00F5FF] to-purple-300 bg-clip-text font-medium">
            Agentic Automation
          </p>
          <p className="text-lg md:text-xl mb-16 text-[#64748B] max-w-5xl mx-auto leading-relaxed">
            AI-driven ITSM workflows, autonomous support agents, and intelligent systems control for next-generation enterprise automation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <InteractiveButtons />
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Authexa's AI agents transformed our support operations. What used to take hours now happens automatically.",
      author: "Sarah Chen",
      title: "IT Operations Manager",
      company: "TechFlow Solutions",
      metric: "Saved 120+ hours/week"
    },
    {
      quote: "The zero-touch deployment capabilities eliminated our manual installation bottlenecks completely.",
      author: "Michael Rodriguez",
      title: "DevOps Lead",
      company: "CloudFirst Inc",
      metric: "Reduced escalations by 85%"
    },
    {
      quote: "Their autonomous ticketing system catches and resolves issues before our users even notice them.",
      author: "Jennifer Park",
      title: "Head of IT Services",
      company: "InnovateTech",
      metric: "99.2% uptime achieved"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0B1426] to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent font-mono"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Trusted by Forward-Thinking Teams
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#0B1426]/90 to-slate-800/90 border border-[#00F5FF]/20 rounded-2xl p-8 backdrop-blur-sm hover:border-[#00F5FF]/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                {/* Glowing frame animation */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                </div>
                
                <div className="text-5xl text-[#00F5FF]/30 mb-6 font-mono">"</div>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed italic flex-grow relative z-10">
                  {testimonial.quote}
                </p>
                
                <div className="border-t border-[#64748B]/30 pt-6 relative z-10">
                  <div className="mb-4 px-4 py-2 bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 rounded-lg border border-[#00F5FF]/30">
                    <p className="text-[#00F5FF] font-bold text-center font-mono">{testimonial.metric}</p>
                  </div>
                  <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                  <p className="text-[#00F5FF] font-medium">{testimonial.title}</p>
                  <p className="text-[#64748B] text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B1426] text-white py-20 border-t border-[#64748B]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent font-mono"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to experience AI-led transformation?
          </motion.h3>
          <motion.p 
            className="text-xl text-[#64748B] mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's talk about how Authexa can revolutionize your enterprise operations
          </motion.p>
          <InteractiveButtons />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#64748B] mb-12">
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">Platform</h4>
            <div className="space-y-2">
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">AI Agents</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">ITSM Automation</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">System Healing</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">Solutions</h4>
            <div className="space-y-2">
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Autonomous Support</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Zero-Touch Deploy</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Agentic Workflows</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">Resources</h4>
            <div className="space-y-2">
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Documentation</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Case Studies</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">API Reference</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">Support</h4>
            <div className="space-y-2">
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Live Demo</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Contact</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Community</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#64748B]/20 pt-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/ebc0cc5c-ee6c-4c12-a43e-ee9ef52e068f.png" 
              alt="Authexa Logo" 
              className="h-8 w-auto opacity-80"
            />
            <p className="text-[#64748B] font-mono">&copy; 2025 Authexa Inc. All rights reserved.</p>
          </div>
          <div className="text-[#64748B] font-mono">
            Orchestrating the Future with AI
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <main className="bg-[#0B1426] text-white min-h-screen overflow-x-hidden font-sans">
      <HeroSection />
      <Interactive3DCapabilities />
      <Suspense fallback={<div className="text-[#00F5FF] p-8 text-center font-mono">Loading workflow visualization...</div>}>
        <WorkflowVisualization />
      </Suspense>
      <Suspense fallback={<div className="text-[#00F5FF] p-8 text-center font-mono">Loading interactive demo...</div>}>
        <InteractiveDemo />
      </Suspense>
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
