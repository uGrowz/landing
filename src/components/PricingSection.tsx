import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free Tier',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for trying out uGrowz',
    features: [
      '100 enrichments/month',
      'Basic integrations',
      'Email support',
      'Data accuracy guarantee',
      'CRM sync',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: { monthly: 49, yearly: 470 },
    description: 'For growing sales teams',
    features: [
      '2,500 enrichments/month',
      'Advanced automation',
      'Priority support',
      'All integrations',
      'Custom workflows',
      'Team collaboration',
      'Advanced analytics',
    ],
    cta: 'Start 14-Day Trial',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: { monthly: 99, yearly: 950 },
    description: 'For high-velocity teams',
    features: [
      'Unlimited enrichments',
      'Unlimited workflows',
      'Dedicated success manager',
      'API access',
      'Custom integrations',
      'White-label options',
      'Advanced AI features',
      'SLA guarantee',
    ],
    cta: 'Start 14-Day Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--brand-secondary)' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            14-day free trial · No credit card required
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isYearly ? 'text-white' : 'text-gray-600'
              }`}
              style={{
                background: !isYearly ? 'var(--brand-primary)' : 'transparent',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                isYearly ? 'text-white' : 'text-gray-600'
              }`}
              style={{
                background: isYearly ? 'var(--brand-primary)' : 'transparent',
              }}
            >
              Yearly
              <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative ${plan.highlighted ? 'md:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm text-white shadow-lg z-10"
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                >
                  {plan.badge}
                </div>
              )}

              <motion.div
                className={`bg-white rounded-2xl p-8 h-full shadow-md border-2 ${
                  plan.highlighted ? 'border-transparent' : 'border-gray-100'
                } relative overflow-hidden`}
                whileHover={{ 
                  y: -8,
                  boxShadow: plan.highlighted 
                    ? '0 25px 50px rgba(102, 126, 234, 0.25)' 
                    : '0 20px 40px rgba(0,0,0,0.1)',
                }}
              >
                {/* Gradient border for Pro plan */}
                {plan.highlighted && (
                  <>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-30 blur-xl"
                      style={{
                        background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
                      }}
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </>
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl mb-2" style={{ color: 'var(--brand-secondary)' }}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <motion.div
                      key={isYearly ? 'yearly' : 'monthly'}
                      className="flex items-baseline gap-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <span className="text-5xl" style={{ color: 'var(--brand-secondary)' }}>
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-600">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </motion.div>
                    {isYearly && plan.price.yearly > 0 && (
                      <p className="text-sm text-gray-500 mt-1">
                        ${(plan.price.yearly / 12).toFixed(0)}/month billed annually
                      </p>
                    )}
                  </div>

                  <motion.button
                    className="w-full py-3 px-6 rounded-xl mb-6 transition-all duration-300"
                    style={{
                      background: plan.highlighted
                        ? 'linear-gradient(135deg, var(--brand-primary), #7dd42f)'
                        : 'white',
                      color: plan.highlighted ? 'white' : 'var(--brand-secondary)',
                      border: plan.highlighted ? 'none' : '2px solid var(--brand-primary)',
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: plan.highlighted 
                        ? '0 10px 30px rgba(104, 199, 33, 0.4)'
                        : '0 10px 20px rgba(0,0,0,0.1)',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-primary)' }} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm">
            All plans include data accuracy guarantee · Cancel anytime · No hidden fees
          </p>
        </motion.div>
      </div>
    </section>
  );
}