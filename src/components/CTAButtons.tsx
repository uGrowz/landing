import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
      {/* Primary CTA */}
      <motion.button
        className="relative z-0 px-8 py-4 rounded-xl overflow-hidden group cursor-pointer"
        style={{
          background: 'var(--brand-primary)',
          color: 'white',
          boxShadow: '0 12px 30px rgba(var(--brand-primary-rgb), 0.35)',
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 16px 40px rgba(var(--brand-primary-rgb), 0.5)',
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl"
          style={{
            background: 'var(--brand-primary)',
            zIndex: 0,
          }}
          aria-hidden
        />
        <span className="relative z-10">Get Started Free</span>
      </motion.button>

      {/* Secondary CTA */}
      <motion.button
        className="relative z-0 px-8 py-4 rounded-xl border-2 group overflow-hidden cursor-pointer"
        style={{
          borderColor: 'var(--brand-secondary)',
          color: 'var(--brand-secondary)',
          background: 'transparent',
          boxShadow: '0 8px 24px rgba(var(--brand-secondary-rgb), 0.2)',
        }}
        whileHover={{
          scale: 1.02,
          color: 'white',
          background: 'var(--brand-secondary)',
          boxShadow: '0 14px 36px rgba(var(--brand-secondary-rgb), 0.35)',
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl"
          style={{
            background: 'var(--brand-secondary)',
            zIndex: 0,
          }}
          aria-hidden
        />
        <span className="relative z-10 flex items-center gap-2">
          <Play className="w-4 h-4" />
          Watch Demo
        </span>
      </motion.button>
    </div>
  );
}
