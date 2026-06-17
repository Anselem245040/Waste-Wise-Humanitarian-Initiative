import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown } from "lucide-react";
import { Link } from "wouter";

/**
 * Premium Navbar Component with Dropdown Menus
 *
 * Design System: Eco-Tech Premium
 * - Glassmorphism effect with backdrop blur
 * - Dropdown menus for desktop and mobile
 * - Smooth hover states and animations
 * - Mobile hamburger menu with slide-out animation
 * - Prominent Donate CTA button
 * - Sticky positioning with shadow on scroll
 */

interface NavbarProps {
  onDonateClick: () => void;
}

interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

export default function Navbar({ onDonateClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );

  // Handle scroll effect
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    {
      label: "About",
      href: "#about",
      submenu: [
        { label: "Our Mission", href: "#about" },
        { label: "Core Values", href: "#about" },
        { label: "Leadership Team", href: "#about" },
      ],
    },
    {
      label: "Services",
      href: "#services",
      submenu: [
        { label: "Waste Collection", href: "#services" },
        { label: "Recycling & Processing", href: "#services" },
        { label: "Data & Analytics", href: "#services" },
        { label: "Community Programs", href: "#services" },
      ],
    },
    {
      label: "Impact",
      href: "#impact-details",
      submenu: [
        { label: "Impact Stories", href: "#impact-details" },
        { label: "Case Studies", href: "#impact-details" },
        { label: "Global Metrics", href: "#impact-details" },
      ],
    },
    {
      label: "Contact",
      href: "#contact",
      submenu: [
        { label: "Get In Touch", href: "#contact" },
        { label: "Office Locations", href: "#contact" },
        { label: "Business Hours", href: "#contact" },
      ],
    },
  ];

  // Mobile menu animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -300,
      transition: { duration: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-border/40 shadow-lg"
            : "bg-white/50 backdrop-blur-md border-b border-border/20"
        }`}
      >
        <div className='container flex items-center justify-between py-4 md:py-5'>
          {/* Logo & Brand - WHI */}
          <Link href='/'>
            <a className='flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow relative'>
                {/* WHI Shield Logo */}
                <svg
                  viewBox='0 0 40 40'
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {/* Shield outline */}
                  <path
                    d='M20 2 L8 8 L8 18 C8 28 20 36 20 36 C20 36 32 28 32 18 L32 8 Z'
                    fill='none'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  {/* Green leaf */}
                  <ellipse
                    cx='20'
                    cy='18'
                    rx='4'
                    ry='8'
                    fill='#4ade80'
                    opacity='0.8'
                  />
                  {/* WHI text */}
                  <text
                    x='20'
                    y='22'
                    fontSize='6'
                    fontWeight='bold'
                    fill='white'
                    textAnchor='middle'
                    fontFamily='Arial'
                  >
                    WHI
                  </text>
                </svg>
              </div>
              <div className='flex flex-col'>
                <h1 className='font-display font-bold text-sm leading-tight text-foreground'>
                  WHI
                </h1>
                <p className='text-xs text-muted-foreground font-medium'>
                  Waste Wise Initiative
                </p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <div
                key={link.label}
                className='relative group'
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className='text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 relative flex items-center gap-1 group'
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform duration-300' />
                  )}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300' />
                </a>

                {/* Desktop Dropdown */}
                {link.submenu && (
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        variants={dropdownVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className='absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-border/40 rounded-lg shadow-lg overflow-hidden'
                      >
                        {link.submenu.map((subitem, idx) => (
                          <motion.a
                            key={subitem.label}
                            href={subitem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => setOpenDropdown(null)}
                            className='block px-4 py-3 text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-all duration-200 first:pt-4 last:pb-4'
                          >
                            {subitem.label}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Donate Button */}
          <button
            onClick={onDonateClick}
            className='hidden md:inline-flex px-6 py-2.5 rounded-lg font-semibold bg-accent text-accent-foreground hover:shadow-lg hover:scale-105 transition-all duration-300'
          >
            Donate
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer'
            aria-label='Toggle menu'
          >
            {isOpen ? (
              <X className='w-6 h-6 text-foreground' />
            ) : (
              <Menu className='w-6 h-6 text-foreground' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden'
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Slide-Out - Full Width */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white z-30 md:hidden overflow-y-auto'
          >
            <div className='container p-6 space-y-3 max-w-full'>
              {/* Mobile Navigation Links with Dropdowns */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  custom={i}
                  variants={linkVariants}
                  initial='hidden'
                  animate='visible'
                >
                  <button
                    onClick={() =>
                      setMobileOpenDropdown(
                        mobileOpenDropdown === link.label ? null : link.label,
                      )
                    }
                    className='w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors duration-200'
                  >
                    <span>{link.label}</span>
                    {link.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileOpenDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {link.submenu && mobileOpenDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className='overflow-hidden'
                      >
                        {link.submenu.map((subitem, sidx) => (
                          <motion.a
                            key={subitem.label}
                            href={subitem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: sidx * 0.05 }}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileOpenDropdown(null);
                            }}
                            className='block px-8 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors duration-200'
                          >
                            {subitem.label}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Divider */}
              <div className='border-t border-border/40 my-4' />

              {/* Mobile Donate Button */}
              <motion.button
                variants={linkVariants}
                custom={navLinks.length}
                initial='hidden'
                animate='visible'
                onClick={() => {
                  onDonateClick();
                  setIsOpen(false);
                }}
                className='w-full px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300'
              >
                Donate Now
              </motion.button>

              {/* Mobile Contact Info */}
              <motion.div
                variants={linkVariants}
                custom={navLinks.length + 1}
                initial='hidden'
                animate='visible'
                className='pt-4 space-y-2 text-sm text-foreground/60'
              >
                <p>wastewisehumanitarianinitiav@gmail.com</p>
                <p>📱 +234 8159713721</p>
                <p>📍 Enugu, Nigeria</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlap */}
      <div className='h-16 md:h-20' />
    </>
  );
}
