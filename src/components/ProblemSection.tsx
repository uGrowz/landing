import React from 'react';
import { motion } from 'motion/react';
import { Clock, AlertCircle, Workflow, Target } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Manual lead research takes too long',
    description: 'Sales teams waste hours manually searching for contact information',
  },
  {
    icon: AlertCircle,
    title: 'Inaccurate contact data',
    description: 'Outdated databases lead to bounced emails and wasted outreach',
  },
  {
    icon: Workflow,
    title: 'Hard to automate workflows',
    description: 'Existing tools require complex setups and technical expertise',
  },
  {
    icon: Target,
    title: 'Difficult to identify ideal buyers',
    description: 'Finding decision-makers with actual buying intent is challenging',
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 opacity-20 blur-3xl" 
        style={{ background: 'rgba(39, 61, 93, 0.1)' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
            Why Sales Teams Struggle Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Traditional sales processes are slowing you down
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)',
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <problem.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              <h3 className="text-lg mb-3" style={{ color: 'var(--brand-secondary)' }}>
                {problem.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.description}
              </p>

              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)',
                  filter: 'blur(20px)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}