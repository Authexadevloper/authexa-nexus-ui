
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Float, Text3D, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[2, 0, 0]}>
        <MeshDistortMaterial
          color="#00F5FF"
          wireframe
          distort={0.4}
          speed={2}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 200; i++) {
      temp.push((Math.random() - 0.5) * 20);
      temp.push((Math.random() - 0.5) * 20);
      temp.push((Math.random() - 0.5) * 20);
    }
    return new Float32Array(temp);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00F5FF" transparent opacity={0.6} />
    </points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00F5FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#64748B" />
        
        <AnimatedSphere />
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
