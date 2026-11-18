import {
  ArrowRight,
  Building2,
  CalendarCheck,
  ChevronRight,
  ChevronsRight,
  CreditCard,
  Droplets,
  Home,
  KeyRound,
  PhoneCall,
  SprayCan,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { ComponentType } from 'react';
import type { ServiceItem, SiteConfig } from '../shared/types.ts';
import { ResilientImage } from './ResilientImage.tsx';

interface HomePageOverviewProps {
  config: SiteConfig;
  services: ServiceItem[];
  onNavigate: (path: string) => void;
  onBookService: (houseType: string, cleaningType: string) => void;
}

interface ServiceShowcaseCard {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  houseType: string;
  cleaningType: string;
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
}

const SERVICE_SHOWCASE_ITEMS: readonly ServiceShowcaseCard[] = [
  {
    id: 'regular',
    title: 'Home & Floor Cleaning',
    summary: 'Routine surface dusting, sweeping, mopping, kitchen and bathroom care for everyday comfort.',
    imageUrl: '/src/assets/images/service_home_floor_cleaning.jpg',
    imageAlt: 'Microfiber floor mop, cleaning bucket, sponges, and gloves on a clean wood living room floor',
    houseType: 'One Bedroom',
    cleaningType: 'Standard Home Cleaning',
    icon: Home,
  },
  {
    id: 'deep',
    title: 'Deep Home Cleaning',
    summary: 'Thorough attention for kitchens, bathrooms, corners, window tracks and hard-to-reach spots.',
    imageUrl: '/src/assets/images/service_deep_home_cleaning.webp',
    imageAlt: 'Deep cleaning bucket, gloves, spray bottle, and cleaning crew mopping glossy tiles',
    houseType: 'Two Bedrooms',
    cleaningType: 'Deep Cleaning',
    icon: SprayCan,
  },
  {
    id: 'kitchen-bathroom',
    title: 'Kitchen & Bathroom Care',
    summary: 'Focused degreasing and sanitising for countertops, hobs, sinks, showers and tiles.',
    imageUrl: '/src/assets/images/service_kitchen_bathroom_care.webp',
    imageAlt: 'Spotless modern kitchen countertops and gleaming sanitised bathroom',
    houseType: 'One Bedroom',
    cleaningType: 'Kitchen and Bathroom Cleaning',
    icon: Droplets,
  },
  {
    id: 'move-in-out',
    title: 'Move-In / Move-Out Cleaning',
    summary: 'Full empty-room, cupboard, kitchen and floor preparation before property handover.',
    imageUrl: '/src/assets/images/service_move_in_out_1794804175840.jpg',
    imageAlt: 'Freshly cleaned empty apartment ready for move-in',
    houseType: 'Two Bedrooms',
    cleaningType: 'Move-In and Move-Out Cleaning',
    icon: KeyRound,
  },
  {
    id: 'apartments',
    title: 'Apartment & Bedsitter Cleaning',
    summary: 'Tailored residential upkeep across bedsitters, multi-bedroom apartments and family homes.',
    imageUrl: '/src/assets/images/service_two_bedroom_1794804173770.jpg',
    imageAlt: 'Clean and tidy residential apartment living space',
    houseType: 'Bedsitter',
    cleaningType: 'Standard Home Cleaning',
    icon: Building2,
  },
];

function BroomEmblem({ className = 'w-9 h-9 text-[#1B4332]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M35.5 7.5L22.5 23.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M17.5 21.5L26 28.5L19.5 39C18.8 40.1 17.3 40.4 16.2 39.7L7.8 34.1C6.7 33.4 6.4 31.9 7.2 30.8L17.5 21.5Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 26L22.5 32.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M13 37.5L15.5 33.5M18 39.5L20 36"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="29.5" cy="36.5" r="1.6" fill="currentColor" />
      <circle cx="34.5" cy="39" r="1.3" fill="currentColor" />
      <circle cx="33" cy="32.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function CleaningBucketEmblem({ className = 'w-11 h-11 text-[#F5B718]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M11 21H34L31 39C30.8 40.2 29.8 41 28.6 41H16.4C15.2 41 14.2 40.2 14 39L11 21Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M9 21H36"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M15 21V13.5C15 11.8 16.3 10.5 18 10.5H20.5C22.2 10.5 23.5 11.8 23.5 13.5V21"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M27 21V15.5L31.5 11.5L35 14.5V21"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 11.5V8.5H36.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect
        x="26"
        y="31"
        width="13"
        height="8"
        rx="3.5"
        fill="#1B4332"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}

const WORK_STEPS = [
  {
    step: 1,
    title: 'Request a Clean',
    description: 'Reach out online or on WhatsApp with your home size and location.',
    icon: PhoneCall,
  },
  {
    step: 2,
    title: 'Confirm Schedule',
    description: 'Pick a preferred date, time window, and clear KES quotation.',
    icon: CalendarCheck,
  },
  {
    step: 3,
    title: 'Thorough Cleaning',
    description: 'Our team cleans every selected room carefully and on time.',
    icon: CleaningBucketEmblem,
  },
  {
    step: 4,
    title: 'Inspect & Settle',
    description: 'Walk through your spotless home and complete payment smoothly.',
    icon: CreditCard,
  },
] as const;

export function HomePageOverview({
  config,
  services,
  onNavigate,
  onBookService,
}: HomePageOverviewProps) {
  const availableItems = SERVICE_SHOWCASE_ITEMS.filter((card) => {
    const matching = services.filter((item) => item.cleaningTypeValue === card.cleaningType);
    if (matching.length === 0) return true;
    return matching.some((item) => item.available !== false);
  });

  const activeList = availableItems.length > 0 ? availableItems : SERVICE_SHOWCASE_ITEMS;

  const aboutBusinessParagraphs = [
    `${config.businessName} is a trusted residential and domestic cleaning company serving ${config.serviceAreas.toLowerCase()}. Our mission is simple: to keep homes cleaner, fresher, and more comfortable through dependable, thoughtful care.`,
    `Whether it is a bedsitter, a family apartment, or a larger multi-bedroom home, we handle every space with close attention to detail—covering routine upkeep, deep cleaning, kitchen and bathroom sanitising, and move-in or move-out preparation.`,
    `With straightforward booking, flexible supply options, and transparent quotations in Kenyan Shillings, ${config.businessName} makes maintaining a spotless home effortless.`,
  ];

  return (
    <>
      {/* Section 1 (After Hero): About Us */}
      <section
        id="home-about"
        className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F4] border-b border-[#DDD4C3]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <BroomEmblem className="w-10 h-10 text-[#1B4332] shrink-0" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#525753]">
                  About Us
                </p>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#222523] [text-wrap:balance] leading-[1.16]">
                Welcome to {config.businessName}
              </h2>

              <div
                aria-hidden="true"
                className="w-14 h-[3px] bg-[#F5B718] rounded-full mt-4 mb-6"
              />

              <div className="space-y-3.5 text-sm sm:text-base text-[#525753] leading-relaxed max-w-xl mb-8">
                {aboutBusinessParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onNavigate('/book')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] text-sm font-bold uppercase tracking-wide text-[#1E2420] bg-[#F5B718] hover:bg-[#E3A60C] rounded-lg shadow-[0_10px_22px_-10px_rgba(245,183,24,0.6)] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"
              >
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#DDD4C3] bg-[#EFE9DC] shadow-[0_18px_40px_-20px_rgba(27,67,50,0.2)]">
                <ResilientImage
                  src="/src/assets/images/about_welcome_cleaning.jpg"
                  alt={`${config.businessName} cleaning and sanitising a gleaming tiled residential floor`}
                  fallbackTitle={config.businessName}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 (After About Us): Our Cleaning Services */}
      <section
        id="home-services"
        className="py-16 sm:py-20 lg:py-24 bg-[#EDF2EE] border-b border-[#DDD4C3]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto text-center mb-12 sm:mb-14"
          >
            <BroomEmblem className="w-11 h-11 text-[#1B4332] mx-auto mb-3" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#525753] mb-2">
              Provide Services
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1E2420] [text-wrap:balance]">
              Our Cleaning Services
            </h2>
            <div
              aria-hidden="true"
              className="w-14 h-[3px] bg-[#F5B718] rounded-full mx-auto mt-4"
            />
          </motion.div>

          {/* Auto-Scrolling Horizontal Service Cards */}
          <div className="overflow-hidden py-2">
            <div className="services-marquee-track flex w-max">
              {[0, 1].map((copyIndex) => (
                <div
                  key={copyIndex}
                  aria-hidden={copyIndex === 1 ? true : undefined}
                  className="flex shrink-0 gap-7 pr-7"
                >
                  {activeList.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <article
                        key={`${copyIndex}-${item.id}`}
                        className="group w-[290px] sm:w-[330px] lg:w-[344px] shrink-0 flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_14px_30px_-16px_rgba(27,67,50,0.18)] border border-[#DCE3DD]"
                      >
                        <div className="aspect-[16/10] w-full overflow-hidden bg-[#E7E0D3]">
                          <ResilientImage
                            src={item.imageUrl}
                            alt={item.imageAlt}
                            fallbackTitle={item.title}
                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        </div>

                        {/* Overlapping Circular Yellow Badge */}
                        <div className="-mt-8 mx-auto relative z-10 w-16 h-16 rounded-full bg-[#F5B718] text-[#1E2420] flex items-center justify-center shadow-[0_6px_16px_-4px_rgba(0,0,0,0.2)] ring-4 ring-white">
                          <IconComponent className="w-7 h-7 stroke-[1.75]" aria-hidden={true} />
                        </div>

                        <div className="px-6 pt-4 pb-6 text-center flex-1 flex flex-col items-center">
                          <h3 className="font-sans text-base sm:text-[17px] font-bold tracking-tight uppercase text-[#1E2420] mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#525753] leading-relaxed mb-4 flex-1 max-w-[32ch]">
                            {item.summary}
                          </p>
                          <button
                            type="button"
                            tabIndex={copyIndex === 1 ? -1 : 0}
                            onClick={() => onBookService(item.houseType, item.cleaningType)}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[40px] text-xs font-semibold uppercase tracking-wider text-[#1B4332] hover:bg-[#EDF2EE] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332]"
                          >
                            <span>Book this service</span>
                            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B4332] hover:text-[#143325] underline-offset-4 hover:underline whitespace-nowrap shrink-0 cursor-pointer py-2"
            >
              <span>View all services &amp; supply options</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Work Steps / How We Work */}
      <section
        id="how-we-work"
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#1B4332] text-white border-b border-[#143325]"
      >
        <img
          src="/src/assets/images/hero_founder_cleaning.jpg"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none select-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#153628]/88 via-[#1B4332]/82 to-[#143325]/92"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto text-center mb-12 sm:mb-14"
          >
            <BroomEmblem className="w-11 h-11 text-[#F5B718] mx-auto mb-3" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80 mb-2">
              Work Steps
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white [text-wrap:balance]">
              How We Work
            </h2>
            <div
              aria-hidden="true"
              className="w-14 h-[3px] bg-[#F5B718] rounded-full mx-auto mt-4"
            />
          </motion.div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {WORK_STEPS.map((item, idx) => {
              const StepIcon = item.icon;
              return (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex flex-col items-center text-center px-2"
                >
                  <div className="h-14 flex items-center justify-center mb-5">
                    <StepIcon className="w-11 h-11 text-[#F5B718] stroke-[1.5]" aria-hidden={true} />
                  </div>

                  <div className="w-10 h-10 rounded-full border-2 border-white text-white text-sm font-semibold tabular-nums flex items-center justify-center mb-4">
                    {item.step}
                  </div>

                  {idx < WORK_STEPS.length - 1 && (
                    <ChevronsRight
                      className="hidden lg:block w-5 h-5 text-white/55 absolute top-[84px] -right-3 translate-x-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  <h3 className="font-sans text-base sm:text-[17px] font-bold tracking-tight text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-[24ch]">
                    {item.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}
