import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
      {/* Primary CTA */}
      <motion.button
        className="relative px-8 py-4 rounded-xl overflow-hidden group"
        style={{
          background: 'var(--brand-primary)',
          color: 'white',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'var(--brand-primary)',
            filter: 'blur(20px)',
            zIndex: -1,
          }}
        />
        <span className="relative z-10">Get Started Free</span>
      </motion.button>

      {/* Secondary CTA */}
      <motion.button
        className="relative px-8 py-4 rounded-xl border-2 group overflow-hidden"
        style={{
          borderColor: 'var(--brand-secondary)',
          color: 'var(--brand-secondary)',
          background: 'transparent',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'var(--brand-secondary)',
            filter: 'blur(20px)',
            zIndex: -1,
          }}
        />
        <span className="relative z-10 flex items-center gap-2">
          <Play className="w-4 h-4" />
          Watch Demo
        </span>
      </motion.button>
    </div>
  );
}
