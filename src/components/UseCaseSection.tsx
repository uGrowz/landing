import React from 'react';
import { motion } from 'motion/react';
import { UserSearch, ListChecks, RefreshCw, Activity } from 'lucide-react';

const useCases = [
  {
    icon: UserSearch,
    title: 'Find decision-makers instantly',
    description: 'Identify and connect with C-level executives and key stakeholders in your target accounts.',
    color: 'from-green-500 to-blue-600',
  },
  {
    icon: ListChecks,
    title: 'Build targeted prospect lists',
    description: 'Create highly-targeted lists based on firmographics, technographics, and buying signals.',
    color: 'from-green-600 to-teal-600',
  },
  {
    icon: RefreshCw,
    title: 'Automate enrichment + CRM sync',
    description: 'Keep your CRM data fresh with automated enrichment and two-way synchronization.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Activity,
    title: 'Track buying signals & reach out',
    description: 'Monitor prospect behavior and engagement signals to reach out at the perfect moment.',
    color: 'from-teal-500 to-green-500',
  },
];

export function UseCaseSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
            What You Can Do With uGrowz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock powerful capabilities to accelerate your sales pipeline
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 h-full shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ y: -6 }}
              >
                {/* Illustration container */}
                <motion.div
                  className="mb-6 relative"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center relative z-10`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Decorative circles */}
                  <div className={`absolute top-2 left-2 w-20 h-20 rounded-full bg-gradient-to-br ${useCase.color} opacity-20 blur-xl`} />
                </motion.div>

                <h3 className="text-xl mb-3" style={{ color: 'var(--brand-secondary)' }}>
                  {useCase.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-primary/30 transition-colors duration-300" />

                {/* Top accent border */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${useCase.color.replace('from-', '').replace(' to-', ', ')})`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}