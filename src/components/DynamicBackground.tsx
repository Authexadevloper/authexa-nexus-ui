
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DynamicBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced moving circuit patterns with parallax */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-[#00F5FF]/40 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ['-100vh', '150vh'],
              opacity: [0, 1, 0],
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced floating neural nodes with parallax */}
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 bg-[#00F5FF]/50 rounded-full shadow-lg shadow-cyan-400/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </motion.div>

      {/* Robotic geometric shapes */}
      <motion.div className="absolute inset-0" style={{ rotate }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border-2 border-[#00F5FF]/30"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
              scale: [1, 1.3, 1],
              borderColor: ['#00F5FF30', '#FF6B6B30', '#4ECDC430', '#00F5FF30'],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced animated mesh overlay with scroll */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #00F5FF0D 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #A855F70D 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, #FF6B6B0D 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, #4ECDC40D 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.4])
        }}
      />

      {/* Scrolling data streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-1 bg-gradient-to-b from-[#00F5FF]/60 via-[#00F5FF]/20 to-transparent"
            style={{
              height: '200px',
              left: `${15 + i * 15}%`,
              top: '-200px',
            }}
            animate={{
              y: ['0vh', '120vh'],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
