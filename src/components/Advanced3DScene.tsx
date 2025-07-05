
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function SimpleRotatingEarth() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 16, 16]} position={[0, 0, -3]}>
      <meshStandardMaterial 
        color="#00F5FF" 
        wireframe 
        transparent 
        opacity={0.4}
      />
    </Sphere>
  );
}

function SimpleOrbiters() {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group1.current) {
      group1.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (group2.current) {
      group2.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      <group ref={group1}>
        <Box args={[0.4, 0.4, 0.4]} position={[3, 0, 0]}>
          <meshStandardMaterial color="#FF6B6B" wireframe transparent opacity={0.6} />
        </Box>
      </group>
      
      <group ref={group2}>
        <Box args={[0.3, 0.3, 0.3]} position={[0, 2.5, 0]}>
          <meshStandardMaterial color="#4ECDC4" wireframe transparent opacity={0.6} />
        </Box>
      </group>
    </>
  );
}

function SimpleScene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00F5FF" />
      
      <Stars 
        radius={50} 
        depth={30} 
        count={500} 
        factor={2} 
        saturation={0.5} 
        fade 
        speed={0.3}
      />
      
      <SimpleRotatingEarth />
      <SimpleOrbiters />
    </>
  );
}

function Scene3DFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1426] via-slate-900 to-[#0B1426]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwRjVGRiIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      {/* Animated floating elements as CSS fallback */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#00F5FF] rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000 shadow-lg shadow-purple-400/50" />
      <div className="absolute bottom-40 left-1/4 w-2.5 h-2.5 bg-[#00F5FF] rounded-full animate-pulse delay-2000 shadow-lg shadow-cyan-400/50" />
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500 shadow-lg shadow-purple-400/50" />
    </div>
  );
}

export default function Advanced3DScene() {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Suspense fallback={<Scene3DFallback />}>
        <Canvas 
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{ 
            antialias: false, 
            alpha: true,
            powerPreference: "default",
            preserveDrawingBuffer: false
          }}
          dpr={1}
          onCreated={({ gl }) => {
            gl.setClearColor('#0B1426', 0);
          }}
          onError={(error) => {
            console.log('WebGL Error caught:', error);
          }}
        >
          <SimpleScene3D />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}
