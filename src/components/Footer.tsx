import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Youtube, Mail } from 'lucide-react';
import logo from 'figma:asset/c628eacde29ae738913b43a07545405a65421cd3.png';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Guides', href: '#' },
    { label: 'Templates', href: '#' },
    { label: 'Webinars', href: '#' },
    { label: 'Case Studies', href: '#' },
  ],
  'Help Center': [
    { label: 'Contact Support', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={logo} alt="UGROWZ" className="h-8 mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                AI-powered sales enrichment for modern teams
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 text-sm" style={{ color: 'var(--brand-secondary)' }}>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.02 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group inline-block"
                    >
                      {link.label}
                      <span
                        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                        style={{ background: 'var(--brand-primary)' }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} UGROWZ. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors duration-200">
              Security
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-200">
              Sitemap
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
