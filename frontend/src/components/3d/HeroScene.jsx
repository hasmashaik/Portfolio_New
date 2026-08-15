import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Particles from './Particles';

const SceneContent = () => {
  return (
    <group>
      {/* Removed FloatingGeometry and TechOrbit - only particles remain */}
      <Particles count={150} /> {/* Reduced particle count */}
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#39FF14" />
      <pointLight position={[-10, -5, -10]} intensity={0.4} color="#ffffff" />
    </group>
  );
};

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;