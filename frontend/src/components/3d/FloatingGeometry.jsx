import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Torus, Sphere } from '@react-three/drei';

const FloatingGeometry = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(clock.getElapsedTime() * 0.5 + i) * 0.001;
        child.rotation.x += 0.002;
        child.rotation.y += 0.003;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Box position={[-1.2, 0.5, 0]} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color="#39FF14" wireframe emissive="#39FF14" emissiveIntensity={0.2} />
      </Box>
      <Torus position={[1.5, -0.3, -0.5]} args={[0.5, 0.1, 16, 32]}>
        <meshStandardMaterial color="#39FF14" wireframe emissive="#39FF14" emissiveIntensity={0.15} />
      </Torus>
      <Sphere position={[-0.8, -0.6, 0.8]} args={[0.3, 16, 16]}>
        <meshStandardMaterial color="#39FF14" wireframe emissive="#39FF14" emissiveIntensity={0.1} />
      </Sphere>
      <Box position={[0.8, 0.9, -0.7]} args={[0.5, 0.5, 0.5]} rotation={[0.5, 0.5, 0]}>
        <meshStandardMaterial color="#39FF14" wireframe emissive="#39FF14" emissiveIntensity={0.2} />
      </Box>
    </group>
  );
};

export default FloatingGeometry;