
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Hero3D from '@/components/Hero3D';
import FeatureCard from '@/components/FeatureCard';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import InteractiveDemo from '@/components/InteractiveDemo';

const features = [
  {
    title: "Automated ITSM Workflows",
    description: "Streamline ticket management, incident response, and service delivery with intelligent automation that learns from your processes.",
    icon: "⚙️"
  },
  {
    title: "AI-Powered Support Agents",
    description: "Deploy conversational AI agents that handle complex customer inquiries across chat, voice, and email channels with human-like understanding.",
    icon: "🤖"
  },
  {
    title: "Software Installations on Autopilot",
    description: "Autonomous deployment and configuration of enterprise software across your entire device fleet with zero-touch automation.",
    icon: "📦"
  },
  {
    title: "Agentic AI Enterprise Tasks",
    description: "Advanced AI agents that execute complex multi-step workflows, make decisions, and adapt to changing business requirements.",
    icon: "🧠"
  },
  {
    title: "Remote Device Control & Self-Healing",
    description: "Proactive system monitoring with autonomous remediation capabilities that fix issues before they impact users.",
    icon: "🖥️"
  }
];

function HeroSection() {
  console.log('HeroSection rendering');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">
      <Suspense fallback={
        <div className="text-cyan-400 text-xl animate-pulse">Loading 3D scene...</div>
      }>
        <Hero3D />
      </Suspense>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRjVGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent leading-tight">
            Authexa
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-cyan-300 font-light">
            Orchestrating the Future with AI
          </p>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience AI-driven ITSM automation, autonomous support, and intelligent control of systems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button 
            size="lg"
            className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25"
          >
            Request a Live Demo
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  console.log('FeaturesSection rendering');
  
  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Core Capabilities
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover how our AI agents transform enterprise IT operations with unprecedented automation and intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Authexa reduced our IT ticket resolution time by 80%. Their AI agents handle complex tasks that used to take our team hours.",
      author: "Sarah Chen",
      title: "CTO, TechCorp Industries",
      company: "Fortune 500 Manufacturing"
    },
    {
      quote: "The autonomous software deployment capabilities are game-changing. We now manage 10,000+ devices with minimal manual intervention.",
      author: "Michael Rodriguez",
      title: "IT Director, GlobalTech Solutions",
      company: "Enterprise Software Company"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Trusted by Enterprise Leaders
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-6xl text-cyan-400/30 mb-4">"</div>
                <p className="text-lg text-slate-200 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-cyan-400">{testimonial.title}</p>
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
    <footer className="bg-black text-white py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h3 
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to experience AI-led transformation?
          </motion.h3>
          <motion.p 
            className="text-xl text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's build the future of enterprise automation together
          </motion.p>
          <Button 
            size="lg"
            className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
          >
            Connect With Us
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-slate-400">
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <p className="hover:text-cyan-400 cursor-pointer transition-colors">About</p>
            <p className="hover:text-cyan-400 cursor-pointer transition-colors">Careers</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Services</h4>
            <p className="hover:text-cyan-400 cursor-pointer transition-colors">AI Automation</p>
            <p className="hover:text-cyan-400 cursor-pointer transition-colors">ITSM Solutions</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <p className="hover:text-cyan-400 cursor-pointer transition-colors">Documentation</p>
            <p className="hover:text-cyan-400 cursor-pointer transition-colors">Case Studies</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p className="hover:text-cyan-400 cursor-pointer transition-colors">Request Demo</p>
            <p className="hover:text-cyan-400 cursor-pointer transition-colors">Support</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Authexa Inc. All rights reserved. | Orchestrating the Future with AI</p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  console.log('Index page rendering - Start');
  
  try {
    return (
      <main className="bg-black text-white min-h-screen overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <Suspense fallback={<div className="text-cyan-400 p-8">Loading workflow...</div>}>
          <WorkflowVisualization />
        </Suspense>
        <Suspense fallback={<div className="text-cyan-400 p-8">Loading demo...</div>}>
          <InteractiveDemo />
        </Suspense>
        <TestimonialsSection />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error in Index component:', error);
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-cyan-400 mb-4">Authexa</h1>
          <p className="text-xl text-slate-300">Loading...</p>
        </div>
      </div>
    );
  }
}
