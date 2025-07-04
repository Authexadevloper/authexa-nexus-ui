
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
          text-lg px-12 py-6 font-semibold transition-all duration-300 relative overflow-hidden
          ${variant === 'primary' 
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-2xl shadow-cyan-500/25' 
            : 'border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/25'
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
          className="absolute inset-0 rounded-lg border-2 border-cyan-400 pointer-events-none"
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowDemo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl max-w-md w-full border border-cyan-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Request Live Demo</h3>
            <p className="text-slate-300 mb-6">
              Experience Authexa's AI-powered automation in action. Our team will showcase how our platform can transform your enterprise operations.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
              />
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
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
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowContact(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl max-w-md w-full border border-cyan-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Get Started with Authexa</h3>
            <p className="text-slate-300 mb-6">
              Ready to transform your enterprise with AI? Let's discuss your specific needs and create a customized solution.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
              />
              <textarea
                placeholder="Tell us about your automation needs..."
                rows={4}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none resize-none"
              />
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
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
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
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
