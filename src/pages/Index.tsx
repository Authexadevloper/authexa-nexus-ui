
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Advanced3DHero from '@/components/Advanced3DHero';
import Interactive3DCapabilities from '@/components/Interactive3DCapabilities';
import InteractiveButtons from '@/components/InteractiveButtons';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import InteractiveDemo from '@/components/InteractiveDemo';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Simplified hero without 3D for now */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRjVGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Authexa
          </h1>
          <p className="text-3xl md:text-4xl mb-6 text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text font-light">
            Orchestrating the Future with AI
          </p>
          <p className="text-xl md:text-2xl mb-16 text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience next-generation AI-driven automation, autonomous enterprise management, and intelligent system orchestration
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
      quote: "Authexa's automation platform transformed our IT operations. The intelligent workflow optimization reduced our incident response time significantly.",
      author: "David Park",
      title: "IT Director",
      company: "TechFlow Solutions",
      metric: "75% faster response times"
    },
    {
      quote: "The deployment automation handles our infrastructure seamlessly. It's like having a dedicated DevOps team working around the clock.",
      author: "Sarah Mitchell",
      title: "VP of Engineering",
      company: "CloudFirst Technologies",
      metric: "Zero deployment failures"
    },
    {
      quote: "Their predictive monitoring caught issues we didn't even know were coming. The proactive approach has been game-changing for our uptime.",
      author: "Marcus Chen",
      title: "Head of Infrastructure",
      company: "InnovateTech Group",
      metric: "99.8% system availability"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          What Our Clients Say
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
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 h-full flex flex-col">
                <div className="text-6xl text-cyan-400/30 mb-6">"</div>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed italic flex-grow">
                  {testimonial.quote}
                </p>
                
                <div className="border-t border-slate-700 pt-6">
                  <div className="mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30">
                    <p className="text-cyan-300 font-bold text-center">{testimonial.metric}</p>
                  </div>
                  <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                  <p className="text-cyan-400 font-medium">{testimonial.title}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
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
    <footer className="bg-black text-white py-20 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to Transform Your Enterprise?
          </motion.h3>
          <motion.p 
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join the future of AI-driven enterprise automation and experience unprecedented efficiency
          </motion.p>
          <InteractiveButtons />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-slate-400 mb-12">
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Platform</h4>
            <div className="space-y-2">
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">AI Automation</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">ITSM Solutions</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">System Healing</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Solutions</h4>
            <div className="space-y-2">
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">Enterprise AI</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">Zero-Touch Deploy</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">Predictive Ops</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Resources</h4>
            <div className="space-y-2">
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">Documentation</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">Case Studies</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">White Papers</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Support</h4>
            <div className="space-y-2">
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">Live Demo</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">Contact Sales</p>
              <p className="hover:text-cyan-400 cursor-pointer transition-colors">24/7 Support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p className="text-lg">&copy; 2025 Authexa Inc. All rights reserved. | Orchestrating the Future with AI</p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <Interactive3DCapabilities />
      <Suspense fallback={<div className="text-cyan-400 p-8 text-center">Loading workflow visualization...</div>}>
        <WorkflowVisualization />
      </Suspense>
      <Suspense fallback={<div className="text-cyan-400 p-8 text-center">Loading interactive demo...</div>}>
        <InteractiveDemo />
      </Suspense>
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
