import { ArrowRight, Leaf, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Premium Hero Component - Waste Wise Humanitarian Initiative
 *
 * Design System: Eco-Tech Premium
 * - Full background image with text overlay
 * - Layout: Centered text on image
 * - Typography: Bold headings with white text
 * - Motion: Staggered entrance animations
 * - Colors: Deep green primary, lime accent, teal secondary
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

  return (
    <section
      className='relative overflow-hidden min-h-screen md:min-h-[90vh] flex items-center justify-center'
      style={{
        backgroundImage: `url('Hero.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/10 backdrop-blur-sm' />

      {/* Gradient Overlay for depth */}
      <div className='absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-secondary/13' />

      {/* Content */}
      <div className='container relative z-10'>
        <motion.div
          className='flex flex-col items-center justify-center text-center space-y-8'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Badge */}
          <motion.div
            className='inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full'
            variants={itemVariants}
          >
            <Leaf className='w-4 h-4 text-accent' />
            <span className='text-sm font-semibold text-white'>
              Educating. Empowering. Transforming.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-white max-w-5xl'
            variants={itemVariants}
          >
            Pollution to <br />
            <span className='text-accent'>Possibility</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className='text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl'
            variants={itemVariants}
          >
            Thousands of our youths lack access to practical skills, livelihood
            opportunities, and environmental education that can prepare them to
            become productive contributors to society.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className='flex flex-col sm:flex-row gap-4 pt-4'
            variants={itemVariants}
          >
            <button
              onClick={onDonateClick}
              className='px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-accent to-secondary text-white hover:shadow-2xl hover:scale-105 active:scale-97 transition-all duration-300 flex items-center justify-center gap-2 text-base'
            >
              Start Your Journey
              <ArrowRight className='w-5 h-5' />
            </button>
            <a
              href='/learn-more'
              className='px-8 py-4 rounded-lg font-semibold bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30 active:bg-white/40 transition-all duration-300 text-base'
            >
              Learn More
            </a>
          </motion.div>

          {/* Trust Badges */}
        </motion.div>
      </div>
    </section>
  );
}
