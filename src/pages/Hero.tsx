import { ArrowRight, Leaf, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Premium Hero Component - WasteZero NGO
 *
 * Design System: Eco-Tech Premium
 * - Layout: Responsive (text top on mobile, side-by-side on desktop)
 * - Typography: Bold Poppins headings with gradient accent
 * - Motion: Staggered entrance animations, floating image
 * - Colors: Deep green primary, lime accent, teal secondary
 * - Image: High-quality green initiatives showcase
 */

interface HeroProps {
  onDonateClick?: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 md:pt-32 pb-20 md:pb-40'>
      {/* Decorative Background Elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10' />

      <div className='container'>
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Left Column: Headline & CTA (Mobile: Top, Desktop: Left) */}
          <motion.div
            className='space-y-8 order-2 lg:order-1'
            variants={itemVariants}
          >
            <div className='space-y-4'>
              {/* Badge */}
              <motion.div
                className='inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full'
                variants={itemVariants}
              >
                <Leaf className='w-4 h-4 text-primary' />
                <span className='text-sm font-semibold text-primary'>
                  Transforming Nigeria's Waste
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight'
                variants={itemVariants}
              >
                <span className='text-foreground'>Waste into</span>
                <br />
                <span className='bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>
                  Opportunity
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className='text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg'
                variants={itemVariants}
              >
                WasteZero is revolutionizing waste management across Nigeria
                through innovative technology, community engagement, and
                sustainable practices. Join us in building a cleaner, greener
                future for every Nigerian community.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4'
              variants={itemVariants}
            >
              <button
                onClick={onDonateClick}
                className='px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold bg-gradient-to-r from-accent to-secondary text-accent-foreground hover:shadow-xl hover:scale-105 active:scale-97 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base'
              >
                Start Your Journey
                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5' />
              </button>
              <a
                href='/learn-more'
                className='px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-300 text-sm sm:text-base'
              >
                Learn More
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className='flex flex-wrap gap-6 pt-4 sm:pt-8'
              variants={containerVariants}
            >
              <motion.div
                className='flex items-center gap-2'
                variants={itemVariants}
              >
                <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Zap className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <p className='text-sm font-semibold text-foreground'>
                    50K+ Tons
                  </p>
                  <p className='text-xs text-foreground/60'>
                    Diverted Annually
                  </p>
                </div>
              </motion.div>

              <motion.div
                className='flex items-center gap-2'
                variants={itemVariants}
              >
                <div className='w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Users className='w-5 h-5 text-secondary' />
                </div>
                <div>
                  <p className='text-sm font-semibold text-foreground'>
                    100K+ People
                  </p>
                  <p className='text-xs text-foreground/60'>Empowered</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image (Mobile: Bottom, Desktop: Right) */}
          <motion.div className='order-1 lg:order-2' variants={imageVariants}>
            <motion.div
              className='relative'
              variants={floatVariants}
              initial='initial'
              animate='animate'
            >
              {/* Glassmorphic Card Container */}
              <div className='relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl'>
                {/* Image */}
                <img
                  src='https://d2xsxph8kpxj0f.cloudfront.net/310519663761245925/BW72bDX7QJmG3tkgJCcNWA/hero-green-initiative-7KmxgpSfdkyYcVbEQZqRDC.webp'
                  alt='Modern waste management facility with solar panels and diverse team'
                  className='w-full h-auto object-cover'
                />

                {/* Gradient Overlay (subtle) */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />

                {/* Floating Badge - Impact Stats */}
                <motion.div
                  className='absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <p className='text-xs font-semibold text-foreground/60 mb-2'>
                    IMPACT DASHBOARD
                  </p>
                  <div className='grid grid-cols-3 gap-2'>
                    <div>
                      <p className='text-lg font-display font-bold text-primary'>
                        25+
                      </p>
                      <p className='text-xs text-foreground/60'>Communities</p>
                    </div>
                    <div>
                      <p className='text-lg font-display font-bold text-secondary'>
                        98%
                      </p>
                      <p className='text-xs text-foreground/60'>Diverted</p>
                    </div>
                    <div>
                      <p className='text-lg font-display font-bold text-accent'>
                        12.5K
                      </p>
                      <p className='text-xs text-foreground/60'>Recycled</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Blur Elements */}
              <div className='absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10' />
              <div className='absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10' />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
