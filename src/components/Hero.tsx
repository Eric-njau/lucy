import { motion } from 'motion/react';
import { HERO_IMAGE_URL } from '../shared/defaults.ts';
import type { SiteConfig } from '../shared/types.ts';
import { ResilientImage } from './ResilientImage.tsx';

interface HeroProps {
  config: SiteConfig;
}

export function Hero({ config }: HeroProps) {
  return (
    <section
      id="top"
      className="relative w-full h-[calc(100svh-4rem)] sm:h-[calc(100svh-4.5rem)] min-h-[520px] max-h-[820px] overflow-hidden bg-[#1B4332] border-b border-[#DDD4C3]"
    >
      {/* Full-Width Hero Cleaning Photograph */}
      <div className="absolute inset-0">
        <ResilientImage
          src={HERO_IMAGE_URL}
          alt="Bright, freshly cleaned modern living room with spotless light wood floors, sectional sofa, and sheer curtains"
          fallbackTitle={config.businessName}
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle bottom-weighted scrim to preserve full visual clarity of the photograph while keeping minimal text readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0F241A]/80 via-[#0F241A]/20 to-transparent"
        />
      </div>

      {/* Minimal Bottom-Anchored Caption */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-7 sm:pb-10 lg:pb-12 flex items-end">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-white [text-wrap:balance] leading-[1.12] mb-2">
            A Cleaner Home, A Happier You.
          </h1>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Reliable residential cleaning for homes in {config.serviceAreas.toLowerCase()}.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
