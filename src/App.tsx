import React from 'react';
import { motion } from 'motion/react';
import { CTAButtons } from './components/CTAButtons';
import { DashboardMockup } from './components/DashboardMockup';
import { SocialProof } from './components/SocialProof';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeatureBlocks } from './components/FeatureBlocks';
import { UseCaseSection } from './components/UseCaseSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingSection } from './components/PricingSection';
import { DemoSection } from './components/DemoSection';
import { FAQSection } from './components/FAQSection';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import logo from 'figma:asset/c628eacde29ae738913b43a07545405a65421cd3.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== SECTION 1: HERO SECTION ========== */}
      <div className="relative overflow-hidden">
        <AnimatedBackground />

        {/* Header */}
        <header className="relative z-20 px-6 py-6">
          <div className="max-w-7xl mx-auto">
            <img src={logo} alt="UGROWZ" className="h-10" />
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 px-6 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                {/* Headline */}
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl mb-6"
                  style={{
                    color: 'var(--brand-secondary)',
                    lineHeight: '1.1',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Grow Faster with{' '}
                  <span
                    className="inline-block"
                    style={{
                      background: `linear-gradient(135deg, var(--brand-primary), #7dd42f)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Intelligent Sales Enrichment
                  </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                  className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Find, enrich, and convert leads faster with AI-powered data workflows.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <CTAButtons />
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div>
                    <div className="text-3xl mb-1" style={{ color: 'var(--brand-primary)' }}>
                      95%
                    </div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1" style={{ color: 'var(--brand-primary)' }}>
                      2.5M+
                    </div>
                    <div className="text-sm text-gray-600">Leads</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-1" style={{ color: 'var(--brand-primary)' }}>
                      3x
                    </div>
                    <div className="text-sm text-gray-600">Faster</div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Dashboard Mockup */}
              <div className="relative">
                <DashboardMockup />
              </div>
            </div>

            {/* Social Proof */}
            <SocialProof />
          </div>
        </section>
      </div>

      {/* ========== SECTION 2: PROBLEM SECTION ========== */}
      <ProblemSection />

      {/* ========== SECTION 3: SOLUTION SECTION ========== */}
      <SolutionSection />

      {/* ========== SECTION 4: FEATURE BLOCKS ========== */}
      <FeatureBlocks />

      {/* ========== SECTION 5: USE CASE SECTION ========== */}
      <UseCaseSection />

      {/* ========== SECTION 6: SOCIAL PROOF SECTION ========== */}
      <SocialProofSection />

      {/* ========== SECTION 7: COMPARISON TABLE ========== */}
      <ComparisonTable />

      {/* ========== SECTION 8: PRICING SECTION ========== */}
      <PricingSection />

      {/* ========== SECTION 9: DEMO SECTION ========== */}
      <DemoSection />

      {/* ========== SECTION 10: FAQ SECTION ========== */}
      <FAQSection />

      {/* ========== SECTION 11: FINAL CTA BANNER ========== */}
      <CTABanner />

      {/* ========== SECTION 12: FOOTER ========== */}
      <Footer />
    </div>
  );
}
