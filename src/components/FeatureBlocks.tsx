import React from 'react';
import { motion } from 'motion/react';
import { Search, Database, Workflow, Puzzle } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Lead Discovery',
    description: 'Find your ideal customers with AI-powered search algorithms that identify high-intent prospects across multiple channels.',
    benefits: ['Advanced filtering', 'Real-time updates', 'Intent signals'],
  },
  {
    icon: Database,
    title: 'Enrichment Engine',
    description: 'Automatically enrich leads with verified contact information, company data, and buying signals from trusted sources.',
    benefits: ['95% accuracy rate', 'Multi-source verification', 'Auto-update records'],
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    description: 'Build sophisticated automation workflows without code. Set triggers, actions, and conditions to streamline your process.',
    benefits: ['No-code builder', 'Custom triggers', 'Smart sequencing'],
  },
  {
    icon: Puzzle,
    title: 'Seamless Integrations',
    description: 'Connect with your existing tools like HubSpot, Salesforce, LinkedIn, and Outreach for a unified sales workflow.',
    benefits: ['Two-way sync', 'Real-time updates', '50+ integrations'],
  },
];

export function FeatureBlocks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="mb-32 last:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content - Left or Right based on index */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Icon with pulse animation */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{
                    background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
                  }}
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(104, 199, 33, 0.4)',
                      '0 0 0 20px rgba(104, 199, 33, 0)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    },
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
                  {feature.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: 'var(--brand-primary)' }}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mockup - Right or Left based on index */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))',
                    }}
                  />

                  {/* Mockup content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, var(--brand-primary), #7dd42f)' }}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Feature Demo</div>
                        <div className="font-medium" style={{ color: 'var(--brand-secondary)' }}>
                          {feature.title}
                        </div>
                      </div>
                    </div>

                    {/* Visual elements */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-12 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 flex items-center px-4"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      >
                        <div className="w-6 h-6 rounded-full" style={{ background: 'var(--brand-primary)' }} />
                        <div className="ml-3 h-3 bg-gray-300 rounded-full flex-1 max-w-xs" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Looping gradient animation */}
                  <motion.div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, transparent 0%, rgba(104, 199, 33, 0.3) 50%, transparent 100%)',
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>

                {/* Soft glow */}
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-20"
                  style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))'
                      : 'linear-gradient(135deg, var(--brand-primary), #7dd42f)',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}