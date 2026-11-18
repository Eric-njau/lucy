import {
  CalendarCheck,
  Clock,
  Droplet,
  ExternalLink,
  Facebook,
  Home,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  SprayCan,
} from 'lucide-react';
import { useRef, type MouseEvent } from 'react';
import type { SiteConfig } from '../shared/types.ts';
import { buildWhatsAppUrl } from '../utils/whatsapp.ts';
import { BrandMark } from './BrandMark.tsx';
import { ResilientImage } from './ResilientImage.tsx';

interface ContactSectionProps {
  config: SiteConfig;
  onWhatsAppClick: () => void;
  onBookClick?: () => void;
}

export function ContactSection({ config, onWhatsAppClick, onBookClick }: ContactSectionProps) {
  const socialEntries = [
    { key: 'instagram', label: 'Instagram', url: config.socialLinks.instagram },
    { key: 'facebook', label: 'Facebook', url: config.socialLinks.facebook },
    { key: 'tiktok', label: 'TikTok', url: config.socialLinks.tiktok },
    { key: 'x', label: 'X', url: config.socialLinks.x },
  ] as const;

  const configuredSocials = socialEntries.filter((entry) => Boolean(entry.url));

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-[#F4EFE6]/75 border-b border-[#DDD4C3]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wide text-[#1B4332] mb-2.5">
              Contact
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#222523] [text-wrap:balance] mb-4">
              Ready for a cleaner home? Let&apos;s talk.
            </h1>
            <p className="text-base text-[#525753] leading-relaxed mb-7">
              Reach out to {config.businessName} on WhatsApp, by phone, or via email for quotes
              and home cleaning bookings across {config.serviceAreas.toLowerCase()}.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onWhatsAppClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-medium text-white bg-[#1B4332] hover:bg-[#143325] rounded-xl shadow-[0_10px_24px_-8px_rgba(27,67,50,0.45)] transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Book on WhatsApp</span>
              </button>

              {onBookClick && (
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm sm:text-base font-medium text-[#1B4332] bg-[#FAF8F4] hover:bg-[#E9E2D4] border border-[#DDD4C3] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332]"
                >
                  <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Book Online</span>
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FAF8F4] rounded-2xl border border-[#DDD4C3] divide-y divide-[#DDD4C3] shadow-[0_14px_34px_-18px_rgba(27,67,50,0.14)]">
            <div className="p-6 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#1B4332] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-medium text-[#222523]">Service Location</h2>
                <p className="text-sm text-[#525753] mt-1">
                  {config.city} — {config.serviceAreas}
                </p>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#1B4332] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-medium text-[#222523]">Phone &amp; WhatsApp</h2>
                  {config.telephone ? (
                    <a
                      href={`tel:${config.telephone.replace(/\s+/g, '')}`}
                      className="text-sm text-[#222523] hover:text-[#1B4332] underline-offset-4 hover:underline mt-1 inline-block tabular-nums"
                    >
                      {config.telephone}
                    </a>
                  ) : (
                    <p className="text-sm text-[#525753] mt-1">Available upon enquiry</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#1B4332] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-medium text-[#222523]">Email</h2>
                  {config.email ? (
                    <a
                      href={`mailto:${config.email}`}
                      className="text-sm text-[#222523] hover:text-[#1B4332] underline-offset-4 hover:underline mt-1 inline-block break-all"
                    >
                      {config.email}
                    </a>
                  ) : (
                    <p className="text-sm text-[#525753] mt-1">Available upon enquiry</p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-sm font-medium text-[#222523]">Social Media</h2>
              {configuredSocials.length > 0 ? (
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  {configuredSocials.map((social) => (
                    <a
                      key={social.key}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1B4332] hover:text-[#4F6F58] underline-offset-4 hover:underline"
                    >
                      <span>{social.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#525753] mt-1">
                  Connect with {config.businessName} via phone, email, or WhatsApp.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SiteFooterProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
  onOwnerTrigger?: () => void;
}

const FOOTER_TRUST_BADGES = [
  { label: 'Spotless Homes', sublabel: 'Clean & Care', icon: Home },
  { label: 'Fast Clean-Up', sublabel: 'On-Time Crew', icon: Clock },
  { label: 'Deep Cleaning', sublabel: 'Top to Bottom', icon: SprayCan },
  { label: 'Fresh Kitchens', sublabel: 'Kitchen & Bath', icon: Droplet },
  { label: 'Trusted Care', sublabel: 'Roysambu & Nairobi', icon: ShieldCheck },
] as const;

const FOOTER_FEATURED_SERVICES = [
  {
    title: 'Home & Floor Cleaning',
    subtitle: 'Routine sweeping & mopping',
    imageUrl: '/src/assets/images/service_home_floor_cleaning.jpg',
    path: '/services',
  },
  {
    title: 'Deep Home Cleaning',
    subtitle: 'Intensive room refresh',
    imageUrl: '/src/assets/images/service_deep_home_cleaning.webp',
    path: '/services',
  },
  {
    title: 'Kitchen & Bathroom Care',
    subtitle: 'Degreasing & sanitising',
    imageUrl: '/src/assets/images/service_kitchen_bathroom_care.webp',
    path: '/services',
  },
] as const;

function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
    </svg>
  );
}

export function SiteFooter({
  config,
  onNavigate,
  onOwnerTrigger,
}: SiteFooterProps) {
  const tapStateRef = useRef<{ count: number; lastTapAt: number }>({
    count: 0,
    lastTapAt: 0,
  });

  const handleFooterBrandTap = () => {
    if (!onOwnerTrigger) return;
    const now = Date.now();
    if (now - tapStateRef.current.lastTapAt > 2500) {
      tapStateRef.current.count = 1;
    } else {
      tapStateRef.current.count += 1;
    }
    tapStateRef.current.lastTapAt = now;

    if (tapStateRef.current.count >= 5) {
      tapStateRef.current.count = 0;
      tapStateRef.current.lastTapAt = 0;
      onOwnerTrigger();
    }
  };

  const handleRouteLink = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const whatsAppHref = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hello ${config.businessName}, I would like to enquire about residential home cleaning services in ${config.city}.`
  );

  const pageLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Book Online', href: '/book' },
    { label: 'Contact', href: '/contact' },
    { label: 'Founder', href: '/founder' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ] as const;

  const socialProfiles = [
    {
      label: 'Facebook',
      href: config.socialLinks.facebook || '/contact',
      external: Boolean(config.socialLinks.facebook),
      icon: Facebook,
    },
    {
      label: 'TikTok',
      href: config.socialLinks.tiktok || 'https://www.tiktok.com/@lucycleanandcare',
      external: true,
      icon: TikTokIcon,
    },
    {
      label: 'WhatsApp',
      href: whatsAppHref || '/book',
      external: Boolean(whatsAppHref),
      icon: MessageCircle,
    },
    {
      label: 'Instagram',
      href: config.socialLinks.instagram || '/contact',
      external: Boolean(config.socialLinks.instagram),
      icon: Instagram,
    },
  ] as const;

  return (
    <footer className="bg-[#242625] text-[#D2D6D3]">
      {/* Stepped Top Trust Strip straddling light canvas & dark footer */}
      <div className="bg-[linear-gradient(to_bottom,#FAF8F4_50%,#242625_50%)] pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-[#1B4332] text-white rounded-md shadow-[0_14px_30px_-14px_rgba(0,0,0,0.45)] px-6 py-6 sm:py-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center text-center">
            {FOOTER_TRUST_BADGES.map((badge) => {
              const BadgeIcon = badge.icon;
              return (
                <div key={badge.label} className="flex flex-col items-center justify-center gap-1.5">
                  <div className="flex items-center gap-2 text-white">
                    <BadgeIcon className="w-5 h-5 text-[#F5B718] shrink-0" aria-hidden="true" />
                    <span className="font-display text-sm sm:text-base font-semibold tracking-tight whitespace-nowrap">
                      {badge.label}
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/75">
                    {badge.sublabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main 4-Column Dark Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Page Link */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Page Link
            </h2>
            <ul className="space-y-2.5 text-sm">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleRouteLink(e, link.href)}
                    className="inline-flex items-center gap-2.5 text-[#BFC5C0] hover:text-[#F5B718] transition-colors"
                  >
                    <Droplet className="w-3.5 h-3.5 text-[#7F8882] shrink-0" aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Featured Services */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Our Services
            </h2>
            <ul className="space-y-4">
              {FOOTER_FEATURED_SERVICES.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    onClick={(e) => handleRouteLink(e, item.path)}
                    className="group flex items-start gap-3.5"
                  >
                    <div className="w-20 h-14 shrink-0 overflow-hidden rounded bg-[#333635] border border-white/10">
                      <ResilientImage
                        src={item.imageUrl}
                        alt={item.title}
                        fallbackTitle={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-white group-hover:text-[#F5B718] transition-colors leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#9BA39D] mt-1 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Cleaning Office */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Cleaning Office
            </h2>
            <ul className="space-y-4 text-sm text-[#BFC5C0]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5B718] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {config.city}
                  <span className="block text-xs text-[#9BA39D] mt-0.5">{config.serviceAreas}</span>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5B718] shrink-0" aria-hidden="true" />
                {config.telephone ? (
                  <a
                    href={`tel:${config.telephone.replace(/\s+/g, '')}`}
                    className="hover:text-white transition-colors tabular-nums"
                  >
                    {config.telephone}
                  </a>
                ) : (
                  <span>Available upon enquiry</span>
                )}
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F5B718] shrink-0 mt-0.5" aria-hidden="true" />
                {config.email ? (
                  <a
                    href={`mailto:${config.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {config.email}
                  </a>
                ) : (
                  <span>Available upon enquiry</span>
                )}
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#F5B718] shrink-0" aria-hidden="true" />
                <span>Mon - Sun : 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Profile */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              My Social Profile
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {socialProfiles.map((social) => {
                const SocialIcon = social.icon;
                if (social.external) {
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-sm text-[#D2D6D3] hover:text-white transition-colors"
                    >
                      <span className="w-9 h-9 rounded-full border border-white/75 group-hover:border-[#F5B718] group-hover:bg-[#F5B718] group-hover:text-[#1E2420] flex items-center justify-center shrink-0 transition-colors">
                        <SocialIcon className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <span className="truncate">{social.label}</span>
                    </a>
                  );
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={(e) => handleRouteLink(e, social.href)}
                    className="group inline-flex items-center gap-2.5 text-sm text-[#D2D6D3] hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full border border-white/75 group-hover:border-[#F5B718] group-hover:bg-[#F5B718] group-hover:text-[#1E2420] flex items-center justify-center shrink-0 transition-colors">
                      <SocialIcon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="truncate">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Brand & Copyright Bar (with 5-tap Owner Access trigger) */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9BA39D]">
          <div
            onClick={handleFooterBrandTap}
            className="flex items-center gap-3 select-none touch-manipulation"
          >
            <BrandMark variant="footer" logoText={config.logoText} />
            <div>
              <span className="text-sm font-medium text-white">{config.businessName}</span>
              <span className="mx-2 text-white/30" aria-hidden="true">·</span>
              <span>{config.tagline}</span>
            </div>
          </div>

          <p className="tabular-nums">
            &copy; {new Date().getFullYear()} {config.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface ContactFooterProps {
  config: SiteConfig;
  onWhatsAppClick: () => void;
  onBookClick?: () => void;
  onNavigate: (path: string) => void;
  onOwnerTrigger?: () => void;
}

export function ContactFooter({
  config,
  onWhatsAppClick,
  onBookClick,
  onNavigate,
  onOwnerTrigger,
}: ContactFooterProps) {
  return (
    <>
      <ContactSection
        config={config}
        onWhatsAppClick={onWhatsAppClick}
        onBookClick={onBookClick}
      />
      <SiteFooter
        config={config}
        onNavigate={onNavigate}
        onOwnerTrigger={onOwnerTrigger}
      />
    </>
  );
}
