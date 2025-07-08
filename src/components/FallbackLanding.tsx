import { motion } from 'framer-motion';

interface FallbackLandingProps {
  onEnter: () => void;
}

export default function FallbackLanding({ onEnter }: FallbackLandingProps) {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0B1426] via-slate-900 to-[#0B1426] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs with CSS animations */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00F5FF]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#00F5FF]/40 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-purple-400/25 rounded-full animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/0ce76609-2adc-44e4-9208-f73401fc60f2.png" 
            alt="Authexa Logo" 
            className="h-20 w-auto mx-auto mb-6 filter drop-shadow-2xl"
          />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent leading-tight font-mono">
            Welcome to Authexa
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-transparent bg-gradient-to-r from-[#00F5FF] to-purple-300 bg-clip-text font-medium">
            AI-Powered Autonomous Systems
          </p>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto mb-12">
            Experience the future of enterprise automation with our intelligent robotic solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          <motion.button
            onClick={onEnter}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 border-2 border-[#00F5FF] rounded-lg text-[#00F5FF] font-bold text-xl transition-all duration-300 hover:border-white hover:text-white font-mono backdrop-blur-sm"
          >
            Enter Authexa Universe
          </motion.button>
        </motion.div>
        
        {/* Animated indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-8 bg-gradient-to-t from-[#00F5FF] to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}