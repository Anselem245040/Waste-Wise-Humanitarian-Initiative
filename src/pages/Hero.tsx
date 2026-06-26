import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onDonateClick?: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
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
      className='w-full relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-foreground md:min-h-[calc(100vh-5rem)]'
      style={{
        backgroundImage: `url('Hero.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-primary/10' />
      <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent' />

      <div>
        <motion.div
          className='max-w-4xl py-14 sm:py-20 md:py-28 lg:py-32'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div
            className='mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-white shadow-sm backdrop-blur-md sm:mb-6 sm:px-4'
            variants={itemVariants}
          >
            <Leaf className='h-4 w-4 flex-shrink-0 text-accent' />
            <span className='text-xs font-semibold sm:text-sm'>
              Educating. Empowering. Transforming.
            </span>
          </motion.div>

          <motion.h1
            className='max-w-4xl text-[2.45rem] font-display font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl'
            variants={itemVariants}
          >
            Pollution to <br />
            <span className='text-accent'>Possibility</span>
          </motion.h1>

          <motion.p
            className='mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/95 sm:mt-6 sm:text-lg md:text-xl md:leading-8'
            variants={itemVariants}
          >
            Thousands of our youths lack access to practical skills, livelihood
            opportunities, and environmental education that can prepare them to
            become productive contributors to society.
          </motion.p>

          <motion.div
            className='mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row'
            variants={itemVariants}
          >
            <a
              href='#contact'
              onClick={onDonateClick}
              className='inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-7 sm:py-3.5 sm:text-base'
            >
              Contact us
              <ArrowRight className='h-5 w-5' />
            </a>
            <a
              href='/learn-more'
              className='inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/70 bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/30 sm:w-auto sm:px-7 sm:py-3.5 sm:text-base'
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

