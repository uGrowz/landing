import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const testimonials = [
  {
    quote: "UGROWZ transformed our sales process. We're now enriching 10x more leads with better accuracy than ever before.",
    author: 'Sarah Chen',
    role: 'VP of Sales',
    company: 'TechVentures',
    avatar: 'SC',
  },
  {
    quote: "The automation workflows saved our team 15+ hours per week. ROI was immediate and continues to grow.",
    author: 'Michael Rodriguez',
    role: 'Head of Growth',
    company: 'ScaleUp Inc',
    avatar: 'MR',
  },
  {
    quote: "Best sales enrichment tool we've used. The data quality and integration capabilities are unmatched.",
    author: 'Emily Parker',
    role: 'Sales Director',
    company: 'CloudForce',
    avatar: 'EP',
  },
];

const caseStudies = [
  {
    icon: TrendingUp,
    metric: '300%',
    label: 'Increase in qualified leads',
    company: 'SaaS Startup',
  },
  {
    icon: Users,
    metric: '85%',
    label: 'Reduction in research time',
    company: 'Enterprise Team',
  },
  {
    icon: DollarSign,
    metric: '$2.4M',
    label: 'Additional pipeline created',
    company: 'B2B Company',
  },
];

const companies = ['Salesforce', 'HubSpot', 'LinkedIn', 'Stripe', 'Shopify', 'Notion'];

export function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
            Loved by Sales Teams Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies growing faster with UGROWZ
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="mb-16 relative">
          <div className="max-w-4xl mx-auto relative h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-3xl p-12 shadow-xl relative">
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                  />

                  <Quote className="w-12 h-12 mb-6 opacity-20" style={{ color: 'var(--brand-primary)' }} />
                  
                  <p className="text-2xl mb-8 text-gray-700 leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white"
                      style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))' }}
                    >
                      {testimonials[activeIndex].avatar}
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: 'var(--brand-secondary)' }}>
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: index === activeIndex ? 'var(--brand-primary)' : '#d1d5db',
                  width: index === activeIndex ? '24px' : '8px',
                }}
              />
            ))}
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <study.icon className="w-10 h-10 mb-4" style={{ color: 'var(--brand-primary)' }} />
              <div className="text-4xl mb-2" style={{ color: 'var(--brand-secondary)' }}>
                {study.metric}
              </div>
              <div className="text-gray-700 mb-2">{study.label}</div>
              <div className="text-sm text-gray-500">{study.company}</div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          className="border-t border-gray-200 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                className="text-2xl cursor-pointer transition-all duration-300"
                style={{ color: '#9ca3af' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  color: 'var(--brand-secondary)',
                }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}