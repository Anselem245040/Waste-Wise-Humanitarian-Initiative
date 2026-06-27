import {
  ArrowRight,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface FooterProps {
  onDonateClick?: () => void;
}

export default function Footer({ onDonateClick }: FooterProps) {
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

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Impact", href: "#impact" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const resources = [
    { label: "Learn More", href: "/learn-more" },
    { label: "Explore All", href: "/explore-all" },
  ];

  return (
    <footer className='overflow-hidden border-t border-white/10 bg-foreground text-background'>
      <div className='container max-w-full px-5 py-14 sm:px-6 md:py-20 lg:px-8'>
        <motion.div
          className='mb-12 grid min-w-0 gap-8 rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <p className='text-sm font-semibold text-primary'>
              Make a Difference
            </p>
            <h2 className='mt-3 max-w-2xl text-2xl font-display font-bold leading-tight text-white md:text-4xl'>
              Support our mission to transform waste management across Nigeria
              and help turn cleaner communities into lasting opportunity
            </h2>
          </motion.div>
          <motion.button
            onClick={onDonateClick}
            className='inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md'
            variants={itemVariants}
          >
            <Heart className='h-4 w-4' />
            Donate Now
          </motion.button>
        </motion.div>

        <motion.div
          className='grid min-w-0 gap-10 md:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <a href='/' className='inline-flex items-center gap-3'>
              <span className='flex h-11 w-11 overflow-hidden rounded-lg border border-white/15 bg-white'>
                <img
                  src='logo.jpeg'
                  alt='Waste Wise Humanitarian Initiative logo'
                  className='h-full w-full object-cover'
                />
              </span>
              <span>
                <span className='block font-display text-lg font-bold text-white'>
                  WHI
                </span>
                <span className='block max-w-full break-words text-xs font-medium text-background/60'>
                  Waste Wise Humanitarian Initiative
                </span>
              </span>
            </a>
            <p className='mt-5 max-w-sm text-sm leading-7 text-background/70'>
              Educating, empowering, and transforming communities through
              sustainable waste management and youth-focused environmental
              programs.
            </p>
            <a
              href='https://www.linkedin.com/company/waste-wise-humanitarian-initiative-whi/'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-background'
            >
              LinkedIn
              <ExternalLink className='h-4 w-4' />
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className='font-display text-sm font-bold text-white'>
              Quick Links
            </h3>
            <ul className='mt-4 space-y-3 text-sm'>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='inline-flex items-center gap-2 text-background/70 transition-colors hover:text-background'
                  >
                    <ArrowRight className='h-3.5 w-3.5 text-primary' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className='font-display text-sm font-bold text-white'>
              Resources
            </h3>
            <ul className='mt-4 space-y-3 text-sm'>
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='inline-flex items-center gap-2 text-background/70 transition-colors hover:text-background'
                  >
                    <ArrowRight className='h-3.5 w-3.5 text-primary' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className='font-display text-sm font-bold text-white'>
              Contact
            </h3>
            <div className='mt-4 space-y-4 text-sm text-background/70'>
              <a
                href='mailto:wastewisehumanitarianinitiav@gmail.com'
                className='flex min-w-0 items-start gap-3 break-all transition-colors hover:text-background'
              >
                <Mail className='mt-0.5 h-4 w-4 flex-shrink-0 text-primary' />
                wastewisehumanitarianinitiav@gmail.com
              </a>
              <a
                href='tel:+2348159713721'
                className='flex items-center gap-3 transition-colors hover:text-background'
              >
                <Phone className='h-4 w-4 flex-shrink-0 text-primary' />
                +234 815 971 3721
              </a>
              <p className='flex items-center gap-3'>
                <MapPin className='h-4 w-4 flex-shrink-0 text-primary' />
                Enugu, Nigeria
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className='mt-12 flex min-w-0 flex-col gap-4 border-t border-white/10 pt-6 text-xs text-background/50 md:flex-row md:items-center md:justify-between'>
          <p className='break-words'>
            � 2026 Waste Wise Humanitarian Initiative. All rights reserved.
          </p>
          <div className='flex gap-5'>
            <a
              href='#contact'
              className='transition-colors hover:text-background'
            >
              Contact
            </a>
            <Link
              href='/learn-more'
              className='transition-colors hover:text-background'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
