import React from 'react';
import { motion } from 'motion/react';
import { Users, TrendingUp, Mail, Phone, MapPin, Building, CheckCircle } from 'lucide-react';

export function DashboardMockup() {
  return (
    <motion.div
      className="relative w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Dashboard Container */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'white',
            border: '1px solid rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Dashboard Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full" style={{ background: 'var(--brand-primary)' }} />
                </div>
                <span className="text-sm text-gray-600 ml-2">Lead Enrichment Dashboard</span>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 bg-gradient-to-br from-white via-gray-50 to-white">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <motion.div
                className="p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                  <span className="text-xs text-gray-500">Leads Enriched</span>
                </div>
                <div className="text-2xl" style={{ color: 'var(--brand-secondary)' }}>2,847</div>
                <div className="text-xs" style={{ color: 'var(--brand-primary)' }}>+23% this week</div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                  <span className="text-xs text-gray-500">Conversion Rate</span>
                </div>
                <div className="text-2xl" style={{ color: 'var(--brand-secondary)' }}>68%</div>
                <div className="text-xs" style={{ color: 'var(--brand-primary)' }}>+12% this week</div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
                  <span className="text-xs text-gray-500">Emails Found</span>
                </div>
                <div className="text-2xl" style={{ color: 'var(--brand-secondary)' }}>1,923</div>
                <div className="text-xs" style={{ color: 'var(--brand-primary)' }}>+18% this week</div>
              </motion.div>
            </div>

            {/* Lead Cards */}
            <div className="space-y-3">
              {[
                { name: 'Sarah Johnson', company: 'TechCorp Inc', email: 'sarah.j@techcorp.com', phone: '+1 (555) 123-4567' },
                { name: 'Michael Chen', company: 'Growth Labs', email: 'm.chen@growthlabs.io', phone: '+1 (555) 987-6543' },
                { name: 'Emily Parker', company: 'Digital Ventures', email: 'emily@digitalventures.com', phone: '+1 (555) 456-7890' },
              ].map((lead, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs">
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-sm" style={{ color: 'var(--brand-secondary)' }}>{lead.name}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Building className="w-3 h-3" />
                            {lead.company}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 ml-10">
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {lead.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {lead.phone}
                        </div>
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Glow effect behind dashboard */}
        <div
          className="absolute inset-0 -z-10 rounded-2xl opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, var(--brand-primary), transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
