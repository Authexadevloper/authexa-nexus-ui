
import { motion } from 'framer-motion';

export default function DynamicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Moving circuit patterns */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-[#00F5FF]/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating neural nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-[#00F5FF]/40 rounded-full shadow-lg shadow-cyan-400/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Animated mesh overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/5 via-transparent to-purple-500/5"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #00F5FF0D 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #A855F70D 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, #00F5FF0D 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, #A855F70D 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
