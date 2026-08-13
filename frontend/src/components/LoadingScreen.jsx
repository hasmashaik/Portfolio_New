import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-dark flex flex-col items-center justify-center z-[9999]">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-neon tracking-wider"
        animate={{ textShadow: ['0 0 10px #39FF14', '0 0 30px #39FF14', '0 0 10px #39FF14'] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        HASMA SHAIK
      </motion.h1>
      <div className="mt-6 w-48 h-1 bg-charcoal rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-neon"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
      <p className="mt-4 text-light-gray text-sm tracking-widest">LOADING PORTFOLIO</p>
    </div>
  );
};

export default LoadingScreen;