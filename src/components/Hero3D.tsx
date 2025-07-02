
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Float, Text3D, MeshDistortMaterial, Stars, Ring } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group>
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
      
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Ring ref={ringRef} args={[3, 3.2, 32]} position={[-2, 1, 0]}>
          <meshBasicMaterial color="#64748B" transparent opacity={0.6} />
        </Ring>
      </Float>
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
        <Sphere args={[0.5, 32, 32]} position={[-3, -2, 1]}>
          <meshBasicMaterial color="#0EA5E9" transparent opacity={0.8} />
        </Sphere>
      </Float>
    </group>
  );
}

function ParticleField() {
  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 300; i++) {
      temp.push((Math.random() - 0.5) * 25);
      temp.push((Math.random() - 0.5) * 25);
      temp.push((Math.random() - 0.5) * 25);
    }
    return new Float32Array(temp);
  }, []);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
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

function FloatingCubes() {
  const cubes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.02 + 0.01
    }));
  }, []);

  return (
    <>
      {cubes.map((cube, index) => (
        <Float
          key={index}
          speed={cube.speed * 50}
          rotationIntensity={2}
          floatIntensity={1}
        >
          <mesh position={cube.position} scale={cube.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial 
              color={index % 2 === 0 ? "#00F5FF" : "#64748B"} 
              wireframe 
              transparent 
              opacity={0.3} 
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00F5FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#64748B" />
        <spotLight
          position={[0, 15, 5]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#00F5FF"
        />
        
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        
        <AnimatedSphere />
        <ParticleField />
        <FloatingCubes />
        
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
