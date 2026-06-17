import { Leaf } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Premium Global Layout Component
 *
 * Design System: Eco-Tech NGO
 * - Header: Sticky, glassmorphic, with logo and navigation
 * - Footer: Dark, trustworthy, with impact metrics
 * - Motion: Smooth transitions, subtle shadows
 */

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen flex flex-col bg-background text-foreground'>
      {/* Header */}
      <header className='sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-white/80'>
        <div className='container flex items-center justify-between py-4 md:py-5'>
          {/* Logo & Brand */}
          <div className='flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105'>
            <div className='w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md'>
              <Leaf className='w-6 h-6 text-white' />
            </div>
            <div className='flex flex-col'>
              <h1 className='font-display font-bold text-lg leading-tight text-foreground'>
                WasteZero
              </h1>
              <p className='text-xs text-muted-foreground font-medium'>
                Nigerian Waste Management
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            <a
              href='#'
              className='text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200'
            >
              About
            </a>
            <a
              href='#'
              className='text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200'
            >
              Impact
            </a>
            <a
              href='#'
              className='text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200'
            >
              Solutions
            </a>
            <a
              href='#'
              className='text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200'
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className='px-6 py-3 rounded-lg font-semibold bg-accent text-accent-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 hidden md:inline-flex'>
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button className='md:hidden p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1'>{children}</main>

      {/* Footer */}
      <footer className='bg-foreground text-background border-t border-border/10'>
        <div className='container py-16 md:py-20'>
          {/* Footer Grid */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
            {/* Brand Column */}
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center'>
                  <Leaf className='w-5 h-5 text-foreground' />
                </div>
                <h3 className='font-display font-bold text-lg'>WasteZero</h3>
              </div>
              <p className='text-sm text-background/70 leading-relaxed'>
                Transforming Nigeria's waste management through innovative
                technology and community engagement.
              </p>
            </div>

            {/* Quick Links */}
            <div className='space-y-4'>
              <h4 className='font-display font-bold text-sm'>Quick Links</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a
                    href='#'
                    className='text-background/70 hover:text-background transition-colors'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-background/70 hover:text-background transition-colors'
                  >
                    Our Impact
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-background/70 hover:text-background transition-colors'
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className='space-y-4'>
              <h4 className='font-display font-bold text-sm'>Resources</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a
                    href='#'
                    className='text-background/70 hover:text-background transition-colors'
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-background/70 hover:text-background transition-colors'
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-background/70 hover:text-background transition-colors'
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className='space-y-4'>
              <h4 className='font-display font-bold text-sm'>Contact</h4>
              <ul className='space-y-2 text-sm'>
                <li className='text-background/70'>Email: info@wastezero.ng</li>
                <li className='text-background/70'>
                  Phone: +234 (0) 123 456 7890
                </li>
                <li className='text-background/70'>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className='border-t border-background/10 pt-8'>
            {/* Impact Metrics */}
            <div className='grid grid-cols-3 gap-6 mb-8'>
              <div className='text-center'>
                <p className='text-2xl md:text-3xl font-display font-bold text-accent'>
                  50K+
                </p>
                <p className='text-xs md:text-sm text-background/70 mt-1'>
                  Tons Diverted
                </p>
              </div>
              <div className='text-center'>
                <p className='text-2xl md:text-3xl font-display font-bold text-accent'>
                  100K+
                </p>
                <p className='text-xs md:text-sm text-background/70 mt-1'>
                  Lives Impacted
                </p>
              </div>
              <div className='text-center'>
                <p className='text-2xl md:text-3xl font-display font-bold text-accent'>
                  25+
                </p>
                <p className='text-xs md:text-sm text-background/70 mt-1'>
                  Communities
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60'>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
