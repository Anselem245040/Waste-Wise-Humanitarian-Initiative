import { motion } from "framer-motion";
import { TrendingUp, Users, Leaf, Award, MapPin, Calendar } from "lucide-react";

/**
 * Premium Impact Details Section Component
 *
 * Design System: Eco-Tech Premium
 * - Case studies and detailed impact metrics
 * - Interactive timeline and statistics
 * - Smooth animations and transitions
 */

export default function ImpactDetailsSection() {
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

  const caseStudies = [
    {
      title: "Lagos Community Cleanup Initiative",
      location: "Lagos State",
      date: "2023-2024",
      description:
        "Mobilized 5,000+ community members across 15 neighborhoods, diverting 500 tons of waste from landfills and creating 200 temporary jobs.",
      metrics: {
        tons: "500+",
        people: "5,000+",
        jobs: "200",
      },
      gradient: "from-primary to-secondary",
    },
    {
      title: "Corporate Recycling Partnership",
      location: "Abuja",
      date: "2023-Present",
      description:
        "Partnered with 50+ corporations to implement waste segregation and recycling programs, reducing corporate waste by 60%.",
      metrics: {
        companies: "50+",
        reduction: "60%",
        recovered: "150T",
      },
      gradient: "from-secondary to-accent",
    },
    {
      title: "School Environmental Education",
      location: "Nationwide",
      date: "2022-2024",
      description:
        "Trained 10,000+ students in 200 schools about sustainable waste management and environmental conservation.",
      metrics: {
        students: "10,000+",
        schools: "200",
        trained: "95%",
      },
      gradient: "from-accent to-primary",
    },
  ];

  const globalMetrics = [
    {
      icon: TrendingUp,
      value: "250K+",
      label: "Tons Diverted",
      description: "From landfills since inception",
    },
    {
      icon: Users,
      value: "500K+",
      label: "Lives Impacted",
      description: "Direct and indirect beneficiaries",
    },
    {
      icon: Leaf,
      value: "100K",
      label: "Trees Saved",
      description: "Through recycling initiatives",
    },
    {
      icon: Award,
      value: "25+",
      label: "Awards Won",
      description: "For environmental excellence",
    },
  ];

  return (
    <section
      id='impact-details'
      className='py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5'
    >
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
            Our Impact Stories
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto'
            variants={itemVariants}
          >
            Real results from communities and organizations we've partnered with
          </motion.p>
        </motion.div>

        {/* Global Metrics */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {globalMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                className='bg-gradient-to-br from-accent/40 to-primary/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300'
                variants={itemVariants}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Icon className='w-6 h-6 text-white' />
                </div>
                <p className='text-3xl md:text-4xl font-display font-bold text-primary mb-2'>
                  {metric.value}
                </p>
                <p className='font-semibold text-foreground mb-1'>
                  {metric.label}
                </p>
                <p className='text-sm text-foreground/60'>
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Case Studies */}
        <motion.div
          className='space-y-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className='text-3xl md:text-4xl font-display font-bold text-center mb-12'
            variants={itemVariants}
          >
            Featured Case Studies
          </motion.h3>

          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${study.gradient} p-8 md:p-12 text-white hover:shadow-2xl transition-all duration-300`}
              variants={itemVariants}
            >
              {/* Overlay */}
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300' />

              {/* Content */}
              <div className='relative z-10'>
                <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-6'>
                  <div>
                    <h4 className='text-2xl md:text-3xl font-display font-bold mb-2'>
                      {study.title}
                    </h4>
                    <div className='flex flex-col md:flex-row gap-4 text-white/80'>
                      <div className='flex items-center gap-2'>
                        <MapPin className='w-4 h-4' />
                        <span>{study.location}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Calendar className='w-4 h-4' />
                        <span>{study.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className='text-lg text-white/90 mb-8 leading-relaxed'>
                  {study.description}
                </p>

                {/* Metrics */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className='text-3xl md:text-4xl font-display font-bold mb-1'>
                        {value}
                      </p>
                      <p className='text-sm text-white/70 capitalize'>{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className='mt-16 text-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className='text-lg text-foreground/70 mb-6'
            variants={itemVariants}
          >
            Want to be part of our impact story?
          </motion.p>
          <motion.button
            className='px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 active:scale-97 transition-all duration-300'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Join Our Movement
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
