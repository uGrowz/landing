import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Zap, TrendingUp, Database } from 'lucide-react';

const valuePoints = [
  { icon: Sparkles, text: 'AI-powered lead enrichment' },
  { icon: CheckCircle2, text: 'Real-time verified data' },
  { icon: Zap, text: 'Automation workflows' },
  { icon: TrendingUp, text: 'Dynamic prospect scoring' },
  { icon: Database, text: 'CRM-ready contact records' },
];

export function SolutionSection() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(104, 199, 33, 0.1), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
            How UGROWZ Solves These Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Intelligent automation meets verified data
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Value Points */}
          <div className="space-y-6">
            {valuePoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--brand-primary), #7dd42f)',
                  }}
                >
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-1" style={{ color: 'var(--brand-secondary)' }}>
                    {point.text}
                  </h3>
                  <p className="text-gray-600">
                    Streamline your sales process with intelligent automation and verified contact data.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Product UI Cards */}
          <div className="relative">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Card 1 */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -3, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm text-gray-500 ml-2">Lead Enrichment Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <span className="text-sm">Email verified</span>
                    <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <span className="text-sm">Phone validated</span>
                    <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <span className="text-sm">LinkedIn synced</span>
                    <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ml-8"
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -3, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                  <span className="text-sm">Automation Workflow</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full w-full" 
                    style={{ background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))' }} />
                  <div className="h-2 rounded-full w-4/5" 
                    style={{ background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))' }} />
                  <div className="h-2 rounded-full w-3/5" 
                    style={{ background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))' }} />
                  <p className="text-xs text-gray-500 mt-3">847 leads enriched today</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Soft glow behind cards */}
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-30"
              style={{
                background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}