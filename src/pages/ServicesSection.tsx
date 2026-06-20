import { motion } from "framer-motion";
import {
  Truck,
  Users,
  BarChart3,
  Lightbulb,
  Shield,
  ArrowRight,
} from "lucide-react";

/**
 * Premium Services Section Component
 *
 * Design System: Eco-Tech Premium
 * - Comprehensive service offerings with subsections
 * - Interactive cards with hover effects
 * - Smooth animations and transitions
 */

export default function ServicesSection() {
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

  const services = [
    {
      icon: Users,
      title: "Community Education & Awareness",
      description:
        "Workshops, seminars, and outreach programs educating communities on waste management",
      features: [
        "Environmental workshops",
        "Sanitation seminars",
        "Community outreach",
        "Awareness campaigns",
      ],
      gradient: "from-primary to-secondary",
    },
    {
      icon: Lightbulb,
      title: "School Engagement Programs",
      description:
        "Comprehensive environmental education initiatives in schools and institutions",
      features: [
        "School partnerships",
        "Student workshops",
        "Curriculum integration",
        "Environmental clubs",
      ],
      gradient: "from-secondary to-accent",
    },
    {
      icon: BarChart3,
      title: "Skill Acquisition Training",
      description:
        "Equipping youth with practical waste management and vocational skills",
      features: [
        "Technical training",
        "Waste processing",
        "Job placement",
        "Certification programs",
      ],
      gradient: "from-accent to-primary",
    },
    {
      icon: Truck,
      title: "Clean Community Campaigns",
      description:
        "Organized cleanup drives and environmental restoration initiatives",
      features: [
        "Community cleanups",
        "Beach restoration",
        "Waste collection",
        "Volunteer mobilization",
      ],
      gradient: "from-primary to-accent",
    },
    {
      icon: Shield,
      title: "Waste-to-Wealth Empowerment",
      description:
        "Converting waste into economic opportunities and creating sustainable livelihoods",
      features: [
        "Youth empowerment",
        "Income generation",
        "Plastic recovery",
        "Economic opportunities",
      ],
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section
      id='services'
      className='py-16 md:py-24 bg-gradient-to-br from-accent/5 via-secondary/5 to-primary/5'
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
            Our Services
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto'
            variants={itemVariants}
          >
            Community Education and Awareness, School Engagement Programs, Skill
            Acquisition Training, Clean Community Campaigns and Outreaches
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-md border border-white/20 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300'
                variants={itemVariants}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow bg-gradient-to-br ${service.gradient}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className='w-7 h-7 text-white' />
                </motion.div>

                {/* Content */}
                <div className='relative z-10'>
                  <h3 className='text-xl md:text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-foreground/70 mb-6'>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className='space-y-2 mb-6'>
                    {service.features.map((feature, fidx) => (
                      <li
                        key={fidx}
                        className='flex items-center gap-2 text-sm text-foreground/60'
                      >
                        <div className='w-1.5 h-1.5 rounded-full bg-accent' />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href='/learn-more'
                    className='inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors group/btn'
                  >
                    Learn More
                    <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
                  </a>
                </div>
              </motion.div>
            );
          })}
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
            Need a customized solution? Let's talk about your waste management
            needs.
          </motion.p>
          <motion.button
            className='px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 active:scale-97 transition-all duration-300'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
