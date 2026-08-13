import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus } from '@react-three/drei';

const TechOrbit = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
      groupRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.08) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Torus args={[1.2, 0.02, 8, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.1} />
      </Torus>
      <Torus args={[1.5, 0.02, 8, 32]} rotation={[0, 0, Math.PI / 3]}>
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.08} />
      </Torus>
      <Sphere args={[0.08, 8, 8]} position={[1.5, 0, 0]}>
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.08, 8, 8]} position={[-1.5, 0, 0]}>
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.08, 8, 8]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.08, 8, 8]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  );
};

export default TechOrbit;