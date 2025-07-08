
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function InteractiveGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      if (hovered) {
        globeRef.current.scale.setScalar(1.1);
      } else {
        globeRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Sphere 
      ref={globeRef}
      args={[2, 32, 32]} 
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color="#00F5FF" 
        wireframe 
        transparent 
        opacity={0.6}
        emissive="#00F5FF"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

function FloatingRobots() {
  const robot1 = useRef<THREE.Mesh>(null);
  const robot2 = useRef<THREE.Mesh>(null);
  const robot3 = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (robot1.current) {
      robot1.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 4;
      robot1.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 2;
      robot1.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    
    if (robot2.current) {
      robot2.current.position.x = Math.sin(state.clock.elapsedTime * 0.4) * 3;
      robot2.current.position.z = Math.cos(state.clock.elapsedTime * 0.4) * 3;
      robot2.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    
    if (robot3.current) {
      robot3.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 3;
      robot3.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      robot3.current.rotation.x = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <>
      {/* Robot 1 - Cube with antennas */}
      <group ref={robot1}>
        <mesh>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#FF6B6B" emissive="#FF6B6B" emissiveIntensity={0.1} />
        </mesh>
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.2]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      </group>
      
      {/* Robot 2 - Sphere with rings */}
      <group ref={robot2}>
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#4ECDC4" emissive="#4ECDC4" emissiveIntensity={0.1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.02, 8, 16]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      </group>
      
      {/* Robot 3 - Pyramid */}
      <group ref={robot3}>
        <mesh>
          <coneGeometry args={[0.2, 0.4, 6]} />
          <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.1} />
        </mesh>
      </group>
    </>
  );
}

function RobotScene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00F5FF" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#A855F7" />
      
      <Stars 
        radius={50} 
        depth={30} 
        count={800} 
        factor={3} 
        saturation={0.8} 
        fade 
        speed={0.5}
      />
      
      <InteractiveGlobe />
      <FloatingRobots />
    </>
  );
}

interface RobotGlobeLandingProps {
  onEnter: () => void;
}

export default function RobotGlobeLanding({ onEnter }: RobotGlobeLandingProps) {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0B1426] via-slate-900 to-[#0B1426] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ 
            antialias: false, 
            alpha: true,
            powerPreference: "default"
          }}
          dpr={1}
        >
          <RobotScene3D />
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
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
          transition={{ duration: 0.8, delay: 1.2 }}
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
          
          <div className="text-[#64748B] font-mono text-sm">
            Click and drag the globe • Hover over robots
          </div>
        </motion.div>
        
        {/* Animated indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
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
