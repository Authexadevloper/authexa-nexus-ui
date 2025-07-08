import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Interactive3DCapabilities from '@/components/Interactive3DCapabilities';
import InteractiveButtons from '@/components/InteractiveButtons';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import InteractiveDemo from '@/components/InteractiveDemo';
import DynamicBackground from '@/components/DynamicBackground';
import Advanced3DScene from '@/components/Advanced3DScene';
import ErrorBoundary from '@/components/ErrorBoundary';
import Navbar from '@/components/Navbar';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1426] via-slate-900 to-[#0B1426] overflow-hidden">
      <DynamicBackground />
      
      <ErrorBoundary fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1426] via-slate-900 to-[#0B1426]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRjVGRiIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        </div>
      }>
        <Advanced3DScene />
      </ErrorBoundary>
      
      {/* Enhanced neural network grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRjVGRiIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      {/* Professional floating elements - removed emojis, using geometric shapes */}
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent leading-tight font-mono">
            Orchestrating the Future with AI
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-transparent bg-gradient-to-r from-[#00F5FF] to-purple-300 bg-clip-text font-medium">
            Agentic Automation & ITSM Solutions
          </p>
          <p className="text-lg md:text-xl mb-16 text-[#64748B] max-w-5xl mx-auto leading-relaxed">
            Complete ITSM portal with autonomous support agents, zero-touch software installation, intelligent ticketing system, and robotic process automation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <InteractiveButtons />
        </motion.div>
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
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">ITSM Portal</h4>
            <div className="space-y-2">
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Incident Management</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Service Catalog</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Knowledge Base</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">AI Automation</h4>
            <div className="space-y-2">
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Autonomous Agents</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Chat Support</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Voice Support</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">Installation</h4>
            <div className="space-y-2">
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Zero-Touch Deploy</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Script Generation</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Asset Management</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">Support</h4>
            <div className="space-y-2">
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Live Demo</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Contact</p>
              <p className="hover:text-[#00F5FF] cursor-pointer transition-colors">Documentation</p>
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
      <Navbar />
      <HeroSection />
      <Interactive3DCapabilities />
      <Suspense fallback={<div className="text-[#00F5FF] p-8 text-center font-mono">Loading workflow visualization...</div>}>
        <WorkflowVisualization />
      </Suspense>
      <Suspense fallback={<div className="text-[#00F5FF] p-8 text-center font-mono">Loading interactive demo...</div>}>
        <InteractiveDemo />
      </Suspense>
      <Footer />
    </main>
  );
}
