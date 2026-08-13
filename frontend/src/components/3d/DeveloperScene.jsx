import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Torus, Sphere } from '@react-three/drei';

const DeveloperScene = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <Box position={[-1, 0, 0]} args={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#39FF14" wireframe emissive="#39FF14" emissiveIntensity={0.2} />
      </Box>
      <Torus position={[1, 0, 0]} args={[0.4, 0.05, 8, 16]}>
        <meshStandardMaterial color="#39FF14" wireframe emissive="#39FF14" emissiveIntensity={0.15} />
      </Torus>
      <Sphere position={[0, 0.7, 0]} args={[0.15, 8, 8]}>
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere position={[0, -0.7, 0]} args={[0.15, 8, 8]}>
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.3} />
      </Sphere>
    </group>
  );
};

export default DeveloperScene;