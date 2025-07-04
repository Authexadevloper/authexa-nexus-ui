
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, OrbitControls, Stars, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function FloatingGeometry({ position, color, type = 'sphere', speed = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  if (type === 'box') {
    return (
      <Box ref={meshRef} args={[1, 1, 1]} position={position}>
        <meshStandardMaterial color={color} wireframe transparent opacity={0.7} />
      </Box>
    );
  }

  if (type === 'torus') {
    return (
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} position={position}>
        <meshStandardMaterial color={color} wireframe transparent opacity={0.7} />
      </Torus>
    );
  }

  return (
    <Sphere ref={meshRef} args={[0.8, 32, 32]} position={position}>
      <meshStandardMaterial color={color} wireframe transparent opacity={0.7} />
    </Sphere>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00F5FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00FF" />
      
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
      
      <FloatingGeometry position={[-3, 0, 0]} color="#00F5FF" type="sphere" speed={1} />
      <FloatingGeometry position={[3, 0, 0]} color="#FF00FF" type="box" speed={0.8} />
      <FloatingGeometry position={[0, 2, -2]} color="#00FF00" type="torus" speed={1.2} />
      <FloatingGeometry position={[0, -2, 2]} color="#FFFF00" type="sphere" speed={0.6} />
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxDistance={15}
        minDistance={5}
      />
    </>
  );
}

export default function Advanced3DHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setIsLoaded(true)}
      >
        <Scene3D />
      </Canvas>
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-cyan-400 text-xl animate-pulse">Loading 3D Experience...</div>
        </div>
      )}
    </div>
  );
}
