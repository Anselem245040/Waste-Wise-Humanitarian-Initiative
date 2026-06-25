import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Link } from "wouter";

interface NavbarProps {
  onDonateClick: () => void;
}

interface NavLink {
  label: string;
  href: string;
}

export default function Navbar({ onDonateClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
    exit: {
      opacity: 0,
      y: -16,
      transition: { duration: 0.18 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.04, duration: 0.25 },
    }),
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-xl"
            : "border-b border-white/30 bg-background/75 backdrop-blur-lg"
        }`}
      >
        <div className='flex h-16 items-center justify-between gap-4 md:h-20'>
          <Link href='/'>
            <a className='group flex min-w-0 items-center gap-3'>
              <span className='flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/20 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md'>
                <img
                  src='logo.jpeg'
                  alt='Waste Wise Humanitarian Initiative logo'
                  className='h-full w-full object-cover'
                />
              </span>
              <span className='min-w-0'>
                <span className='block font-display text-sm font-bold leading-tight text-foreground'>
                  WHI
                </span>
                <span className='block max-w-[13rem] truncate text-xs font-medium text-muted-foreground sm:max-w-none'>
                  Waste Wise Humanitarian Initiative
                </span>
              </span>
            </a>
          </Link>

          <div className='hidden items-center gap-1 rounded-full border border-border/60 bg-white/50 p-1 shadow-sm backdrop-blur-md md:flex'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors duration-200 hover:bg-primary/10 hover:text-primary'
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={onDonateClick}
            className='hidden min-h-11 items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:inline-flex'
          >
            <Heart className='h-4 w-4' />
            Donate
          </button>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-white/60 text-foreground transition-colors hover:bg-white md:hidden'
            aria-label='Toggle menu'
            aria-expanded={isOpen}
          >
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-30 bg-foreground/25 backdrop-blur-sm md:hidden'
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='fixed left-0 right-0 top-16 z-40 border-b border-border/70 bg-background shadow-xl md:hidden'
          >
            <div className='container py-5'>
              <div className='grid gap-2'>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial='hidden'
                    animate='visible'
                    onClick={() => setIsOpen(false)}
                    className='rounded-lg px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-primary/10 hover:text-primary'
                    href={link.href}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.button
                variants={linkVariants}
                custom={navLinks.length}
                initial='hidden'
                animate='visible'
                onClick={() => {
                  onDonateClick();
                  setIsOpen(false);
                }}
                className='mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md'
              >
                <Heart className='h-4 w-4' />
                Donate Now
              </motion.button>

              <motion.div
                variants={linkVariants}
                custom={navLinks.length + 1}
                initial='hidden'
                animate='visible'
                className='mt-5 space-y-3 border-t border-border/70 pt-5 text-sm text-foreground/70'
              >
                <a
                  href='mailto:wastewisehumanitarianinitiav@gmail.com'
                  className='flex items-start gap-3 break-all transition-colors hover:text-primary'
                >
                  <Mail className='mt-0.5 h-4 w-4 flex-shrink-0 text-primary' />
                  wastewisehumanitarianinitiav@gmail.com
                </a>
                <a
                  href='tel:+2348159713721'
                  className='flex items-center gap-3 transition-colors hover:text-primary'
                >
                  <Phone className='h-4 w-4 flex-shrink-0 text-primary' />
                  +234 815 971 3721
                </a>
                <p className='flex items-center gap-3'>
                  <MapPin className='h-4 w-4 flex-shrink-0 text-primary' />
                  Enugu, Nigeria
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='h-16 md:h-20' />
    </>
  );
}
