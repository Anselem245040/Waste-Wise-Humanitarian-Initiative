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
      className='relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-foreground md:min-h-[calc(100vh-5rem)]'
      style={{
        backgroundImage: `url('Hero.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-primary/10' />
      <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent' />

      <div className=' relative z-10'>
        <motion.div
          // className='max-w-4xl py-20 md:py-28 lg:py-32'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div
            className='mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-white shadow-sm backdrop-blur-md'
            variants={itemVariants}
          >
            <Leaf className='h-4 w-4 flex-shrink-0 text-accent' />
            <span className='text-sm font-semibold'>
              Educating. Empowering. Transforming.
            </span>
          </motion.div>

          <motion.h1
            className='max-w-4xl text-4xl font-display font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl'
            variants={itemVariants}
          >
            Pollution to <br />
            <span className='text-accent'>Possibility</span>
          </motion.h1>

          <motion.p
            className='mt-6 max-w-3xl text-base leading-8 text-white/90 sm:text-lg md:text-xl'
            variants={itemVariants}
          >
            Thousands of our youths lack access to practical skills, livelihood
            opportunities, and environmental education that can prepare them to
            become productive contributors to society.
          </motion.p>

          <motion.div
            className='mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row'
            variants={itemVariants}
          >
            <a
              href='#contact'
              onClick={onDonateClick}
              className='inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-secondary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl'
            >
              Contact us
              <ArrowRight className='h-5 w-5' />
            </a>
            <a
              href='/learn-more'
              className='inline-flex min-h-12 items-center justify-center rounded-lg border border-white/70 bg-white/20 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/30'
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
