import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const competitors = ['uGrowz', 'Apollo', 'Clay', 'ZoomInfo'];

const features = [
  {
    name: 'Data Quality',
    values: ['95% accuracy', '82% accuracy', '78% accuracy', '85% accuracy'],
  },
  {
    name: 'AI Automation',
    values: ['Advanced AI', 'Basic', 'Limited', 'Basic'],
  },
  {
    name: 'Price (per month)',
    values: ['$49', '$79', '$99', '$149'],
  },
  {
    name: 'Integrations',
    values: ['50+', '30+', '20+', '40+'],
  },
  {
    name: 'Accuracy Score',
    values: [true, false, false, true],
  },
  {
    name: 'Real-time Updates',
    values: [true, false, true, true],
  },
  {
    name: 'Workflow Builder',
    values: [true, false, true, false],
  },
];

export function ComparisonTable() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
            Why uGrowz Outperforms Apollo, Clay & ZoomInfo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we stack up against the competition
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <table className="w-full border-collapse">
            {/* Header */}
            <thead>
              <tr>
                <th className="text-left p-4 border-b-2 border-gray-200"></th>
                {competitors.map((competitor, index) => (
                  <motion.th
                    key={competitor}
                    className="p-4 border-b-2 border-gray-200 text-center relative"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {index === 0 ? (
                      <motion.div
                        className="relative"
                        animate={{
                          boxShadow: [
                            '0 0 0 0 rgba(104, 199, 33, 0.4)',
                            '0 0 0 8px rgba(104, 199, 33, 0)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      >
                        <div
                          className="px-6 py-3 rounded-xl inline-block"
                          style={{
                            background: 'linear-gradient(135deg, var(--brand-primary), #7dd42f)',
                            color: 'white',
                          }}
                        >
                          {competitor}
                        </div>
                      </motion.div>
                    ) : (
                      <div className="text-gray-700">{competitor}</div>
                    )}
                  </motion.th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((feature, rowIndex) => (
                <motion.tr
                  key={feature.name}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: rowIndex * 0.05 }}
                >
                  <td className="p-4 font-medium text-gray-700">{feature.name}</td>
                  {feature.values.map((value, colIndex) => (
                    <motion.td
                      key={colIndex}
                      className="p-4 text-center relative"
                      whileHover={{
                        backgroundColor: colIndex === 0 ? 'rgba(104, 199, 33, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                      }}
                    >
                      {/* uGrowz column glow */}
                      {colIndex === 0 && (
                        <div
                          className="absolute inset-0 border-l-2 border-r-2 opacity-20 pointer-events-none"
                          style={{ borderColor: 'var(--brand-primary)' }}
                        />
                      )}

                      {typeof value === 'boolean' ? (
                        <motion.div
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                          style={{
                            background: value
                              ? colIndex === 0
                                ? 'var(--brand-primary)'
                                : '#10b981'
                              : '#ef4444',
                          }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: rowIndex * 0.05 + colIndex * 0.02, type: 'spring' }}
                        >
                          {value ? (
                            <Check className="w-5 h-5 text-white" />
                          ) : (
                            <X className="w-5 h-5 text-white" />
                          )}
                        </motion.div>
                      ) : (
                        <span
                          className={colIndex === 0 ? 'font-semibold' : ''}
                          style={colIndex === 0 ? { color: 'var(--brand-secondary)' } : {}}
                        >
                          {value}
                        </span>
                      )}
                    </motion.td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA below table */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 rounded-xl text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--brand-primary), #7dd42f)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(104, 199, 33, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
