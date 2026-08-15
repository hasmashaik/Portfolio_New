import React, { useRef, useMemo } from 'react'; // Added useRef import
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Particles = ({ count = 300 }) => {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const c = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      c[i * 3] = 0.2 + Math.random() * 0.1;
      c[i * 3 + 1] = 1.0;
      c[i * 3 + 2] = 0.1 + Math.random() * 0.1;
    }
    return c;
  }, [count]);

  const particlesRef = useRef(); // Now useRef is defined

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Points ref={particlesRef} positions={positions} colors={colors} size={0.03}>
      <PointMaterial vertexColors transparent opacity={0.8} sizeAttenuation />
    </Points>
  );
};

export default Particles;