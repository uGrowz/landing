import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does uGrowz ensure data accuracy?',
    answer: 'We use a combination of AI-powered verification, real-time data sources, and manual quality checks to maintain a 95% accuracy rate. All contact information is verified across multiple databases before being delivered to you.',
  },
  {
    question: 'Can I integrate uGrowz with my existing CRM?',
    answer: 'Yes! uGrowz integrates seamlessly with all major CRMs including Salesforce, HubSpot, Pipedrive, and 50+ other platforms. Our two-way sync ensures your data stays up-to-date across all tools.',
  },
  {
    question: 'What is included in the free tier?',
    answer: 'The free tier includes 100 enrichments per month, basic integrations, email support, and access to our core enrichment features. It\'s perfect for trying out uGrowz and small-scale projects.',
  },
  {
    question: 'How quickly can I get started?',
    answer: 'You can start enriching leads in under 5 minutes. Simply sign up, connect your data source or CRM, and start your first enrichment workflow. No technical setup required.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! All paid plans come with a 14-day free trial with full access to features. No credit card required to start your trial.',
  },
  {
    question: 'What makes uGrowz different from competitors?',
    answer: 'uGrowz combines superior data accuracy (95%+), advanced AI automation, affordable pricing, and seamless integrations. Our no-code workflow builder and real-time verification set us apart.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time with no penalties or hidden fees. You\'ll retain access until the end of your billing period.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'Free tier users get email support, Growth plan users get priority email support, and Pro plan users get a dedicated success manager plus phone support.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use enterprise-grade encryption, SOC 2 Type II compliance, and follow strict data privacy regulations including GDPR and CCPA. Your data is never shared with third parties.',
  },
  {
    question: 'How does pricing work for teams?',
    answer: 'Our pricing is based on the number of enrichments per month, not team size. You can add unlimited team members to collaborate on workflows without additional cost.',
  },
  {
    question: 'Can I customize workflows and automation?',
    answer: 'Yes! Our no-code workflow builder allows you to create custom automation sequences with triggers, conditions, and actions tailored to your exact needs.',
  },
  {
    question: 'Do you offer API access?',
    answer: 'API access is available on the Pro plan, allowing you to integrate uGrowz enrichment capabilities directly into your custom applications and workflows.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about uGrowz
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg pr-4" style={{ color: 'var(--brand-secondary)' }}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.button
            className="px-8 py-3 rounded-xl border-2 transition-all duration-300"
            style={{
              borderColor: 'var(--brand-primary)',
              color: 'var(--brand-secondary)',
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--brand-primary)',
              color: 'white',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
