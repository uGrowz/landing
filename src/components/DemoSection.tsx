import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, TrendingUp, Zap } from 'lucide-react';

export function DemoSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-transparent to-blue-50/30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
            See UGROWZ in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how top sales teams are using UGROWZ to 3x their pipeline
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Video Card */}
          <motion.div
            className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          >
            {/* Video placeholder with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-gray-800/20" />
            
            {/* Dashboard preview overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-2" />
                      <div className="h-2 bg-white/20 rounded w-3/4 mb-1" />
                      <div className="h-2 bg-white/10 rounded w-1/2" />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full" />
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-white/20 rounded w-3/4" />
                        <div className="h-2 bg-white/10 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Play Button */}
            <motion.button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-10"
              style={{
                background: 'linear-gradient(135deg, var(--brand-primary), #7dd42f)',
                boxShadow: '0 10px 40px rgba(104, 199, 33, 0.4)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 10px 40px rgba(104, 199, 33, 0.4)',
                  '0 10px 60px rgba(104, 199, 33, 0.6)',
                  '0 10px 40px rgba(104, 199, 33, 0.4)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </motion.button>

            {/* Glow effect */}
            <div
              className="absolute inset-0 opacity-30 blur-3xl"
              style={{
                background: 'radial-gradient(circle at 50% 50%, var(--brand-primary), transparent 70%)',
              }}
            />
          </motion.div>

          {/* Floating UI Mockups */}
          {/* Left mockup */}
          <motion.div
            className="absolute -left-8 top-1/4 hidden lg:block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 w-48">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                <span className="text-sm">AI Enrichment</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded w-full" />
                <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded w-4/5" />
                <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded w-3/5" />
              </div>
            </div>
          </motion.div>

          {/* Right mockup */}
          <motion.div
            className="absolute -right-8 bottom-1/4 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 w-48">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                <span className="text-sm">Growth Metrics</span>
              </div>
              <div className="text-3xl mb-1" style={{ color: 'var(--brand-secondary)' }}>
                +284%
              </div>
              <div className="text-xs text-gray-500">Pipeline increase</div>
            </div>
          </motion.div>

          {/* Top right mockup */}
          <motion.div
            className="absolute -right-4 -top-4 hidden lg:block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-2">
              <Zap className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
              <span className="text-sm">Real-time sync</span>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl mb-6" style={{ color: 'var(--brand-secondary)' }}>
            See How UGROWZ Works
          </h3>
          <motion.button
            className="px-8 py-4 rounded-xl text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))' }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(104, 199, 33, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}