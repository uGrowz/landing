import React from 'react';
import { motion } from 'motion/react';

export function SocialProof() {
  const companies = [
    'Salesforce',
    'HubSpot',
    'LinkedIn',
    'Stripe',
    'Shopify',
  ];

  return (
    <motion.div
      className="mt-20 hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <p className="text-center text-sm text-gray-500 mb-8">
        Trusted by fast-growing sales teams worldwide
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 ">
        {companies.map((company, index) => (
          <motion.div
            key={company}
            className="text-gray-400 text-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
          >
            {company}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
