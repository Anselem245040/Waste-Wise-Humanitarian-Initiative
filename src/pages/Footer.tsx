import { Leaf, Mail, Phone, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Premium Footer Component
 *
 * Design System: Eco-Tech Premium
 * - Dark background with premium gradient
 * - Project showcase gallery
 * - Impact metrics
 * - Multiple CTA sections
 * - Responsive grid layout
 */

interface FooterProps {
  onDonateClick?: () => void;
}

export default function Footer({ onDonateClick }: FooterProps) {
  // Project gallery items (using placeholder images from project)
  const projects = [
    {
      id: 1,
      title: "Community Collection",
      description: "Waste collection initiative in Lagos",
      image:
        "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Recycling Hub",
      description: "State-of-the-art recycling facility",
      image:
        "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Education Program",
      description: "Community awareness workshops",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
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
    <footer className='bg-gradient-to-b from-foreground to-foreground/95 text-background border-t border-border/10'>
      {/* Main Footer Content */}
      <div className='container py-16 md:py-20'>
        {/* Projects Showcase */}
        <motion.div
          className='mb-16'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={itemVariants}
            className='text-2xl font-display font-bold text-white mb-8 text-center'
          >
            Our Impact in Action
          </motion.h3>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className='group relative overflow-hidden rounded-xl cursor-pointer'
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                  <h4 className='font-display font-bold text-white mb-1'>
                    {project.title}
                  </h4>
                  <p className='text-sm text-background/80'>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Column */}
          <motion.div className='space-y-4' variants={itemVariants}>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center'>
                <Leaf className='w-5 h-5 text-foreground' />
              </div>
              <h3 className='font-display font-bold text-lg text-white'>WHI</h3>
            </div>
            <p className='text-sm text-background/70 leading-relaxed'>
              Waste Wise Humanitarian Initiative: Educating. Empowering.
              Transforming. Building a sustainable, waste-free world through
              community engagement and youth empowerment.
            </p>
            {/* Social Links */}
            <div className='flex gap-3 pt-2'>
              {["twitter", "facebook", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href='#'
                    className='w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors'
                    aria-label={social}
                  >
                    <span className='text-xs font-bold'>{social[0]}</span>
                  </a>
                ),
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className='space-y-4' variants={itemVariants}>
            <h4 className='font-display font-bold text-sm text-white'>
              Quick Links
            </h4>
            <ul className='space-y-2 text-sm'>
              {["About Us", "Our Impact", "Blog", "Careers"].map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-background/70 hover:text-background transition-colors'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div className='space-y-4' variants={itemVariants}>
            <h4 className='font-display font-bold text-sm text-white'>
              Resources
            </h4>
            <ul className='space-y-2 text-sm'>
              {["Documentation", "FAQ", "Support", "Privacy Policy"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href='#'
                      className='text-background/70 hover:text-background transition-colors'
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className='space-y-4' variants={itemVariants}>
            <h4 className='font-display font-bold text-sm text-white'>
              Contact
            </h4>
            <div className='space-y-3 text-sm'>
              <div className='flex items-start gap-2'>
                <Mail className='w-4 h-4 mt-0.5 flex-shrink-0 text-accent' />
                <a
                  href='mailto:wastewisehumanitarianinitiativ@gmail.com'
                  className='text-background/70 hover:text-background transition-colors break-all'
                >
                  wastewisehumanitarianinitiativ@gmail.com
                </a>
              </div>
              <div className='flex items-start gap-2'>
                <Phone className='w-4 h-4 mt-0.5 flex-shrink-0 text-accent' />
                <a
                  href='tel:+2348159713721'
                  className='text-background/70 hover:text-background transition-colors'
                >
                  +234 815 971 3721
                </a>
              </div>
              <div className='flex items-start gap-2'>
                <MapPin className='w-4 h-4 mt-0.5 flex-shrink-0 text-accent' />
                <p className='text-background/70'>Enugu, Nigeria</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className='border-t border-background/10 pt-8'>
          {/* Impact Metrics */}
          <motion.div
            className='grid grid-cols-3 gap-6 mb-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { value: "50K+", label: "Tons Diverted" },
              { value: "100K+", label: "Lives Impacted" },
              { value: "25+", label: "Communities" },
            ].map((metric) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                className='text-center'
              >
                <p className='text-2xl md:text-3xl font-display font-bold text-accent'>
                  {metric.value}
                </p>
                <p className='text-xs md:text-sm text-background/70 mt-1'>
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Donation CTA */}
          <motion.div
            variants={itemVariants}
            className='bg-gradient-to-r from-accent/20 to-secondary/20 rounded-xl p-6 mb-8 text-center border border-accent/30'
          >
            <div className='flex items-center justify-center gap-2 mb-3'>
              <Heart className='w-5 h-5 text-accent fill-accent' />
              <h4 className='font-display font-bold text-white'>
                Make a Difference
              </h4>
            </div>
            <p className='text-sm text-background/80 mb-4'>
              Support our mission to transform waste management across Nigeria
            </p>
            <button
              onClick={onDonateClick}
              className='px-6 py-2 rounded-lg font-semibold bg-accent text-accent-foreground hover:shadow-lg hover:scale-105 transition-all duration-300'
            >
              Donate Now
            </button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60'
          >
            <p>© 2026 WasteZero Nigeria. All rights reserved.</p>
            <div className='flex gap-6'>
              <a href='#' className='hover:text-background transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-background transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='hover:text-background transition-colors'>
                Cookies
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
