import { motion } from "framer-motion";
import { BarChart3, Droplet, Globe, Zap } from "lucide-react";

/**
 * Premium Global Statistics Component
 *
 * Design System: Eco-Tech Premium
 * - Displays critical global plastic pollution statistics
 * - Icon-based visual hierarchy
 * - Smooth animations and transitions
 */

export default function GlobalStatistics() {
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

  const statistics = [
    {
      icon: BarChart3,
      value: "432+",
      unit: "Million Tonnes",
      description: "of plastic waste generated annually",
      color: "from-primary to-secondary",
    },
    {
      icon: Zap,
      value: "1,000+",
      unit: "Years",
      description: "for plastic to decompose naturally",
      color: "from-secondary to-accent",
    },
    {
      icon: Droplet,
      value: "199+",
      unit: "Million Tonnes",
      description: "of plastic litter our Ocean damaging the ecosystem",
      color: "from-accent to-primary",
    },
    {
      icon: Globe,
      value: "1M+",
      unit: "Sea Creatures",
      description: "killed by plastic every year",
      color: "from-primary to-accent",
    },
  ];

  return (
    <section className='py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5'>
      <div className='container'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className='text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4'
            variants={itemVariants}
          >
            Global Statistics
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto'
            variants={itemVariants}
          >
            Understanding the scale of the plastic crisis we face
          </motion.p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {statistics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className='relative group overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 border-2 border-white/20 p-8 hover:shadow-2xl transition-all duration-300'
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Gradient Background Overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${stat.color}`}
                />

                {/* Content */}
                <div className='relative z-10 flex flex-col items-center text-center space-y-4'>
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow bg-gradient-to-br ${stat.color}`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className='w-8 h-8 text-white' />
                  </motion.div>

                  {/* Value */}
                  <h3 className='text-3xl md:text-4xl font-display font-bold text-foreground'>
                    {stat.value}
                  </h3>

                  {/* Unit */}
                  <p className='text-sm font-semibold text-primary'>
                    {stat.unit}
                  </p>

                  {/* Description */}
                  <p className='text-sm text-foreground/70 leading-relaxed'>
                    {stat.description}
                  </p>
                </div>

                {/* Border Glow Effect */}
                <motion.div
                  className='absolute inset-0 rounded-2xl pointer-events-none'
                  style={{
                    border: `2px solid transparent`,
                    backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
