import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Users, BookOpen, Heart } from "lucide-react";
import { Link } from "wouter";

/**
 * Explore All Page - All Initiatives & Programs
 *
 * Design System: Eco-Tech Premium
 * - Comprehensive initiative showcase
 * - Detailed program descriptions
 * - Impact metrics
 * - Smooth entrance animations
 */

interface Initiative {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
  icon: React.ReactNode;
  color: string;
}

export default function ExploreAll() {
  const initiatives: Initiative[] = [
    {
      id: 1,
      title: "Community Cleanups",
      subtitle: "Mobilizing Communities for Change",
      description:
        "Aim: Large-scale cleanup drives that bring together volunteers, local leaders, and residents to restore public spaces and improve environmental quality across Nigeria.",
      stats: [
        { label: "Events to be held Annually", value: "50+" },
        { label: "Volunteers to be Mobilized", value: "5,000+" },
        { label: "Tons to be Collected", value: "500+" },
      ],
      icon: <Leaf className='w-8 h-8' />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      title: "Youth Employment",
      subtitle: "Empowering the Next Generation",
      description:
        "Aim: Training and employment programs for young professionals in waste management, recycling operations, and environmental sustainability.",
      stats: [
        { label: "Youth reached", value: "500+" },
        { label: "Jobs Aimed to be Created", value: "300+" },
        { label: "Wages Aimed to be Generated", value: "₦50M+" },
      ],
      icon: <Users className='w-8 h-8' />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Environmental Education",
      subtitle: "Building Awareness & Consciousness",
      description:
        "Aim: Comprehensive educational programs in schools and communities to raise awareness about waste management and sustainable living practices.",
      stats: [
        { label: "Youths Reached", value: "200+" },
        { label: "Schools Engaged", value: "10+" },
        { label: "Behavior Change", value: "98%" },
      ],
      icon: <BookOpen className='w-8 h-8' />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 7,
      title: "Community Support Fund",
      subtitle: "Direct Impact Investment",
      description:
        "Aim: A dedicated fund that provides grants and support to grassroots environmental initiatives and community-led waste management projects.",
      stats: [
        { label: "Grants to be Awarded", value: "100+" },
        { label: "Communities to be Supported", value: "25+" },
        { label: "Fund Size to be obtained", value: "₦200M+" },
      ],
      icon: <Heart className='w-8 h-8' />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

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
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <div className='relative pt-10 pb-16 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5' />
        <div className='ml-4 relative z-10'>
          <Link href='/'>
            <motion.div
              className='flex items-center gap-2 text-primary hover:text-primary/80 cursor-pointer mb-6 w-fit'
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className='w-5 h-5' />
              <span className='font-medium'>Back to Home</span>
            </motion.div>
          </Link>

          <motion.div
            className='max-w-3xl ml-5 md:ml-0'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4'>
              Explore All <span className='text-primary'>Initiatives</span>
            </h1>
            <p className='text-xl text-foreground/60'>
              Discover the comprehensive range of programs and initiatives we're
              implementing to transform waste management across Nigeria.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Initiatives Grid */}
      <div className='container py-16'>
        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {initiatives.map((initiative) => (
            <motion.div
              key={initiative.id}
              className='group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300'
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className='relative z-10'>
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${initiative.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {initiative.icon}
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-foreground mb-2'>
                  {initiative.title}
                </h3>
                <p className='text-sm text-primary font-medium mb-4'>
                  {initiative.subtitle}
                </p>

                {/* Description */}
                <p className='text-foreground/70 mb-6 text-sm leading-relaxed'>
                  {initiative.description}
                </p>

                {/* Stats */}
                <div className='space-y-2 pt-6 border-t border-border'>
                  {initiative.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className='flex justify-between items-center'
                    >
                      <span className='text-xs text-foreground/60'>
                        {stat.label}
                      </span>
                      <span className='text-sm font-bold text-primary'>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className='container py-16'>
        <motion.div
          className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-6 sm:p-12 md:p-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='relative z-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Get Involved Today
            </h2>
            <p className='text-white/90 text-lg mb-8 max-w-2xl mx-auto'>
              Choose your path to impact. Whether volunteering, donating, or
              partnering, there's a role for you in our mission.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/'>
                <motion.button
                  className='px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Volunteering
                </motion.button>
              </Link>
              <Link href='/'>
                <motion.button
                  className='px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
