import React from 'react';
import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Gradient Orb 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, var(--brand-primary), transparent 70%)`,
          top: '-10%',
          left: '10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient Orb 2 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: `radial-gradient(circle, var(--brand-secondary), transparent 70%)`,
          top: '40%',
          right: '5%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient Orb 3 */}
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(circle, var(--brand-primary), transparent 70%)`,
          bottom: '10%',
          left: '30%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
