import { Mail, Phone, MapPin, Heart } from "lucide-react";
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

        {/* Content Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Column */}
          <motion.div
            className='space-y-4 flex flex-col items-center'
            variants={itemVariants}
          >
            <div className='flex items-center justify-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow relative'>
                {/* WHI Shield Logo */}
                <img src='logo.jpeg' alt='logo' />
              </div>
            </div>
            <h3 className='font-display font-bold text-lg text-white text-center'>
              WHI
            </h3>
            <p className='text-sm text-background/70 leading-relaxed text-center'>
              Waste Wise Humanitarian Initiative: Educating. Empowering.
              Transforming. Building a sustainable, waste-free world through
              community engagement and youth empowerment.
            </p>
            {/* Social Links */}
            <div className='flex justify-center gap-3 pt-2'>
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
          <motion.div
            className='space-y-4 flex flex-col items-center'
            variants={itemVariants}
          >
            <h4 className='font-display font-bold text-sm text-white text-center w-full'>
              Quick Links
            </h4>
            <ul className='space-y-2 text-sm text-center w-full'>
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
          <motion.div
            className='space-y-4 flex flex-col items-center'
            variants={itemVariants}
          >
            <h4 className='font-display font-bold text-sm text-white text-center w-full'>
              Resources
            </h4>
            <ul className='space-y-2 text-sm text-center w-full'>
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
          <motion.div
            className='space-y-4 flex flex-col items-center'
            variants={itemVariants}
          >
            <h4 className='font-display font-bold text-sm text-white text-center w-full'>
              Contact
            </h4>
            <div className='space-y-3 text-sm text-center w-full flex flex-col items-center'>
              <div className='flex items-center justify-center gap-2 w-full'>
                <Mail className='w-4 h-4 flex-shrink-0 text-accent' />
                <a
                  href='mailto:wastewisehumanitarianinitiativ@gmail.com'
                  className='text-background/70 hover:text-background transition-colors break-all text-center'
                >
                  wastewisehumanitarianinitiativ@gmail.com
                </a>
              </div>
              <div className='flex items-center justify-center gap-2 w-full'>
                <Phone className='w-4 h-4 flex-shrink-0 text-accent' />
                <a
                  href='tel:+2348159713721'
                  className='text-background/70 hover:text-background transition-colors text-center'
                >
                  +234 815 971 3721
                </a>
              </div>
              <div className='flex items-center justify-center gap-2 w-full'>
                <MapPin className='w-4 h-4 flex-shrink-0 text-accent' />
                <p className='text-background/70 text-center'>Enugu, Nigeria</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className='border-t border-background/10 pt-8'>
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
            className='flex flex-col items-center justify-center gap-4 text-xs text-background/60'
          >
            <p className='text-center'>
              © 2026 Waste Wise Humanitarian Initiative. All rights reserved.
            </p>
            <div className='flex justify-center gap-6'>
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
