import { motion } from 'motion/react';
import type { SiteConfig } from '../shared/types.ts';
import { ResilientImage } from './ResilientImage.tsx';

interface AboutSectionProps {
  config?: SiteConfig;
}

export function AboutSection({ config }: AboutSectionProps) {
  const businessName = config?.businessName || 'Lucy Clean & Care';
  const serviceAreas = config?.serviceAreas || 'Roysambu and nearby estates in Nairobi';

  return (
    <div id="about">
      {/* About Us Page Hero Section */}
      <section className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden bg-[#1B4332] border-b border-[#DDD4C3]">
        <div className="absolute inset-0">
          <ResilientImage
            src="/src/assets/images/about_page_hero.webp"
            alt={`${businessName} residential cleaner scrubbing tiled bathroom flooring and shower glass`}
            fallbackTitle={businessName}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0F241A]/85 via-[#0F241A]/35 to-transparent"
          />
        </div>

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 flex items-end">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5B718] mb-2.5">
              About Us
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-white [text-wrap:balance] leading-[1.15] mb-2">
              Thoughtful home cleaning for a fresher, happier home.
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Dependable residential and domestic care across {serviceAreas.toLowerCase()}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Business Overview */}
      <section className="py-14 sm:py-20 bg-[#F4EFE6]/75 border-b border-[#DDD4C3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center space-y-3"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#222523] [text-wrap:balance]">
              Reliable residential cleaning tailored to your space.
            </h2>
            <p className="text-sm sm:text-base text-[#525753] leading-relaxed">
              {businessName} serves bedsitters, family apartments, and multi-bedroom homes with
              structured room-by-room cleaning, flexible supply choices, and transparent Kenyan
              Shilling quotations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
