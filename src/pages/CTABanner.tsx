import { motion } from "framer-motion";
import { Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Premium CTA Banner Component
 *
 * Design System: Eco-Tech Premium
 * - Full-width banner with gradient background
 * - Engaging hover motion effects
 * - Multiple CTA options (Volunteer, Partner, Donate)
 * - Smooth animations and transitions
 */

export default function CTABanner() {
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

  const ctaOptions = [
    {
      icon: Users,
      title: "Become a Volunteer",
      description: "Join our team and make direct impact in your community",
      cta: "Sign Up Now",
      gradient: "from-primary to-secondary",
      hoverGradient: "from-primary/80 to-secondary/80",
    },

    {
      icon: Zap,
      title: "Partner With Us",
      description: "Collaborate on sustainable waste management solutions",
      cta: "Let's Talk",
      gradient: "from-accent to-primary",
      hoverGradient: "from-accent/80 to-primary/80",
    },
  ];

  return (
    <section className='py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5'>
      <div className='r'>
        {/* Main CTA Banner */}
        <motion.div
          className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-8 sm:p-12 md:p-20 text-white shadow-2xl'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated Background Elements */}
          <motion.div
            className='absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl pointer-events-none'
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className='absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-white/5 rounded-full blur-3xl pointer-events-none'
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className='relative z-10'>
            <motion.div
              className='text-center mb-12'
              variants={containerVariants}
            >
              <motion.h2
                className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4'
                variants={itemVariants}
              >
                The Crisis Won't Solve Itself
              </motion.h2>
              <motion.p
                className='text-lg md:text-xl text-white/90 max-w-2xl mx-auto'
                variants={itemVariants}
              >
                Communities are suffering. Youth are waiting for opportunity.
                The environment is crying for help. Your support transforms
                lives, cleans communities, and builds sustainable futures.
              </motion.p>
            </motion.div>

            {/* CTA Buttons Grid */}
            <motion.div
              className='flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto w-full'
              variants={containerVariants}
            >
              {ctaOptions.map((option, idx) => {
                const Icon = option.icon;
                return (
                  <Link key={idx} href='/learn-more' asChild>
                  <motion.a
                    href='/learn-more'
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${option.gradient} p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full md:w-1/2 flex flex-col items-center justify-center text-center`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Hover Background Shift */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${option.hoverGradient}`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Animated Glow on Hover */}
                    <motion.div
                      className='absolute inset-0 rounded-2xl'
                      initial={{ boxShadow: "0 0 0px rgba(255,255,255,0)" }}
                      whileHover={{
                        boxShadow: "inset 0 0 20px rgba(255,255,255,0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content */}
                    <div className='relative z-10 w-full flex flex-col items-center'>
                      <motion.div
                        className='w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors mx-auto'
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className='w-7 h-7 text-white' />
                      </motion.div>

                      <h3 className='text-xl md:text-2xl font-display font-bold mb-2 text-center w-full'>
                        {option.title}
                      </h3>
                      <p className='text-white/90 mb-6 text-center text-sm md:text-base w-full'>
                        {option.description}
                      </p>

                      <motion.div
                        className='flex items-center justify-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300 w-full'
                        whileHover={{ x: 5 }}
                      >
                        <span>{option.cta}</span>
                        <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                      </motion.div>
                    </div>

                    {/* Ripple Effect on Hover */}
                    <motion.div
                      className='absolute inset-0 rounded-2xl'
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                      }}
                    />
                  </motion.a>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Secondary CTA Section */}
        <motion.div
          className='mt-16 text-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className='text-lg text-foreground/70 mb-8'
            variants={itemVariants}
          >
            Have questions? We're here to help.
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            variants={containerVariants}
          >
            <Link
              href='/learn-more'
              className='px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 active:scale-97 transition-all duration-300 inline-block text-center'
            >
              Contact Us
            </Link>
            <Link
              href='/learn-more'
              className='px-8 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300 inline-block text-center'
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section Below Banner */}
      </div>
    </section>
  );
}
