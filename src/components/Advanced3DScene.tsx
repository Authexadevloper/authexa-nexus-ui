
import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, Torus, Stars, OrbitControls } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

function RotatingEarth() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.5, 32, 32]} position={[0, 0, -5]}>
      <meshStandardMaterial 
        color="#00F5FF" 
        wireframe 
        transparent 
        opacity={0.3}
      />
    </Sphere>
  );
}

function RoboticOrbiters() {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);
  const group3 = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group1.current) {
      group1.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (group2.current) {
      group2.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (group3.current) {
      group3.current.rotation.x = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <>
      <group ref={group1}>
        <Box args={[0.5, 0.5, 0.5]} position={[4, 0, 0]}>
          <meshStandardMaterial color="#FF6B6B" wireframe transparent opacity={0.6} />
        </Box>
        <Box args={[0.3, 0.3, 0.3]} position={[-4, 1, 0]}>
          <meshStandardMaterial color="#4ECDC4" wireframe transparent opacity={0.6} />
        </Box>
      </group>
      
      <group ref={group2}>
        <Torus args={[0.8, 0.2, 16, 32]} position={[0, 3, 0]}>
          <meshStandardMaterial color="#45B7D1" wireframe transparent opacity={0.5} />
        </Torus>
        <Torus args={[1.2, 0.15, 16, 32]} position={[0, -3, 0]}>
          <meshStandardMaterial color="#96CEB4" wireframe transparent opacity={0.5} />
        </Torus>
      </group>
      
      <group ref={group3}>
        <Sphere args={[0.4, 16, 16]} position={[2, 2, 2]}>
          <meshStandardMaterial color="#FFEAA7" wireframe transparent opacity={0.7} />
        </Sphere>
        <Sphere args={[0.3, 16, 16]} position={[-2, -2, -2]}>
          <meshStandardMaterial color="#DDA0DD" wireframe transparent opacity={0.7} />
        </Sphere>
      </group>
    </>
  );
}

function ScrollControlledCamera() {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();
  
  useFrame(() => {
    const progress = scrollYProgress.get();
    
    camera.position.z = 8 + Math.sin(progress * Math.PI * 4) * 3;
    camera.position.y = Math.cos(progress * Math.PI * 2) * 2;
    camera.position.x = Math.sin(progress * Math.PI * 3) * 1.5;
    
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00F5FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FF6B6B" />
      <pointLight position={[0, 10, -10]} intensity={0.6} color="#4ECDC4" />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={1000} 
        factor={4} 
        saturation={0.5} 
        fade 
        speed={0.5}
      />
      
      <RotatingEarth />
      <RoboticOrbiters />
      <ScrollControlledCamera />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        enabled={false}
      />
    </>
  );
}

export default function Advanced3DScene() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.3]);

  return (
    <motion.div 
      className="absolute inset-0 z-0"
      style={{ scale, opacity }}
    >
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "default"
        }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor('#0B1426', 0);
        }}
      >
        <Scene3D />
      </Canvas>
    </motion.div>
  );
}
