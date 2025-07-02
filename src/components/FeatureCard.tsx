
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: isFlipped ? 180 : 5,
        z: 50,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      className="group perspective-1000 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 overflow-hidden backface-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <CardContent className="p-8 relative z-10 h-full flex flex-col justify-center">
            <motion.div 
              className="text-5xl mb-6 filter drop-shadow-lg"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
              {title}
            </h3>
            <p className="text-slate-300 leading-relaxed line-clamp-3">
              {description}
            </p>
          </CardContent>
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-cyan-900/90 border border-cyan-400/40 backdrop-blur-sm overflow-hidden backface-hidden rotate-y-180">
          <CardContent className="p-8 relative z-10 h-full flex flex-col justify-center">
            <motion.div 
              className="text-4xl mb-4 text-cyan-300"
              initial={{ scale: 0 }}
              animate={{ scale: isFlipped ? 1 : 0 }}
              transition={{ delay: isFlipped ? 0.3 : 0 }}
            >
              ✨
            </motion.div>
            <h3 className="text-xl font-bold mb-4 text-cyan-200">
              Advanced Features
            </h3>
            <p className="text-cyan-100 leading-relaxed text-sm">
              {description}
            </p>
            <motion.div 
              className="mt-4 text-xs text-cyan-300 opacity-70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isFlipped ? 0.7 : 0, y: isFlipped ? 0 : 20 }}
              transition={{ delay: isFlipped ? 0.5 : 0 }}
            >
              Powered by advanced AI algorithms
            </motion.div>
          </CardContent>
          
          {/* Enhanced glow for back */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-cyan-400/30 rounded-lg blur opacity-100 -z-10" />
        </Card>
      </motion.div>
    </motion.div>
  );
}
