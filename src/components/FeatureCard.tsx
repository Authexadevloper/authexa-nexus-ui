
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50
      }}
      className="group perspective-1000"
    >
      <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardContent className="p-8 relative z-10">
          <div className="text-5xl mb-6 filter drop-shadow-lg">{icon}</div>
          <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-slate-300 leading-relaxed">
            {description}
          </p>
        </CardContent>
        
        {/* Subtle glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </Card>
    </motion.div>
  );
}
