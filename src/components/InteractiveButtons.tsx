
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

function InteractiveButton({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        onClick={handleClick}
        size="lg"
        className={`
          text-lg px-12 py-6 font-semibold transition-all duration-300 relative overflow-hidden font-mono
          ${variant === 'primary' 
            ? 'bg-gradient-to-r from-[#00F5FF] to-blue-500 hover:from-[#00F5FF] hover:to-blue-600 text-[#0B1426] shadow-2xl shadow-[#00F5FF]/25 border border-[#00F5FF]/50' 
            : 'border-2 border-[#00F5FF] text-[#00F5FF] bg-transparent hover:bg-[#00F5FF]/10 hover:shadow-lg hover:shadow-[#00F5FF]/25'
          }
          ${className}
        `}
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          animate={{ x: isClicked ? '100%' : '-100%' }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </Button>
      
      {isClicked && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 rounded-lg border-2 border-[#00F5FF] pointer-events-none"
        />
      )}
    </motion.div>
  );
}

export default function InteractiveButtons() {
  const [showDemo, setShowDemo] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleRequestDemo = () => {
    console.log('Demo requested');
    setShowDemo(true);
  };

  const handleGetStarted = () => {
    console.log('Get started clicked');
    setShowContact(true);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
        <InteractiveButton onClick={handleRequestDemo} variant="primary">
          Request a Live Demo
        </InteractiveButton>
        <InteractiveButton onClick={handleGetStarted} variant="secondary">
          Get Started
        </InteractiveButton>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#0B1426]/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setShowDemo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#0B1426] to-slate-800 p-8 rounded-2xl max-w-md w-full border border-[#00F5FF]/30 shadow-2xl shadow-[#00F5FF]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">Request Live Demo</h3>
            <p className="text-[#64748B] mb-6">
              Experience Authexa's AI-powered automation in action. Our team will showcase how our agentic platform can transform your enterprise operations.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-slate-800/50 border border-[#64748B]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none transition-colors font-mono"
              />
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-3 bg-slate-800/50 border border-[#64748B]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none transition-colors font-mono"
              />
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-[#00F5FF] to-blue-500 hover:from-[#00F5FF] hover:to-blue-600 text-[#0B1426] font-mono font-semibold"
                  onClick={() => {
                    alert('Demo request submitted! We\'ll contact you within 24 hours.');
                    setShowDemo(false);
                  }}
                >
                  Schedule Demo
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowDemo(false)}
                  className="border-[#64748B]/30 text-[#64748B] hover:bg-slate-800/50 hover:text-white font-mono"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Contact Modal */}
      {showContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#0B1426]/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setShowContact(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-[#0B1426] to-slate-800 p-8 rounded-2xl max-w-md w-full border border-[#00F5FF]/30 shadow-2xl shadow-[#00F5FF]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">Get Started with Authexa</h3>
            <p className="text-[#64748B] mb-6">
              Ready to transform your enterprise with AI agents? Let's discuss your specific automation needs and create a customized solution.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-slate-800/50 border border-[#64748B]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none transition-colors font-mono"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-slate-800/50 border border-[#64748B]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none transition-colors font-mono"
              />
              <textarea
                placeholder="Tell us about your automation needs..."
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-[#64748B]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none resize-none transition-colors font-mono"
              />
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-[#00F5FF] to-blue-500 hover:from-[#00F5FF] hover:to-blue-600 text-[#0B1426] font-mono font-semibold"
                  onClick={() => {
                    alert('Thank you for your interest! Our team will reach out to you shortly.');
                    setShowContact(false);
                  }}
                >
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowContact(false)}
                  className="border-[#64748B]/30 text-[#64748B] hover:bg-slate-800/50 hover:text-white font-mono"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
