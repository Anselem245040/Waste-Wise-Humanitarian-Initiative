import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Lightbulb,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "wouter";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
};

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

  const services: Service[] = [
    {
      icon: Users,
      title: "Community Education & Awareness",
      description:
        "Workshops, seminars, and outreach programs educating communities on waste management",
      details: "Community Education and Awareness",
    },
    {
      icon: Lightbulb,
      title: "School Engagement Programs",
      description:
        "Comprehensive environmental education initiatives in schools and institutions",
      details: "School Engagement Programs",
    },
    {
      icon: BarChart3,
      title: "Skill Acquisition Training",
      description:
        "Equipping youth with practical waste management and vocational skills",
      details: "Skill Acquisition Training",
    },
    {
      icon: Truck,
      title: "Clean Community Campaigns",
      description:
        "Organized cleanup drives and environmental restoration initiatives",
      details: "Clean Community Campaigns",
    },
    {
      icon: Shield,
      title: "Waste-to-Wealth Empowerment",
      description:
        "Converting waste into economic opportunities and creating sustainable livelihoods",
      details: "Waste-to-Wealth Empowerment",
    },
  ];

  const featuredService = services[0];
  const supportingServices = services.slice(1);
  const FeaturedIcon = featuredService.icon;

  return (
    <section
      id='services'
      className=' bg-foreground text-background py-16 md:py-24'
    >
      <div className='container'>
        <motion.div
          className='mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h2 className='max-w-xl text-3xl font-display font-bold leading-tight text-white md:text-5xl'>
              Our Services
            </h2>
          </motion.div>
          <motion.p
            className='max-w-2xl text-base leading-8 text-foreground/70 md:text-lg lg:justify-self-end'
            variants={itemVariants}
          >
            Community Education and Awareness, School Engagement Programs, are
            organized as practical programs for cleaner communities and stronger
            livelihoods.
          </motion.p>
        </motion.div>

        <motion.div
          className='grid gap-5 lg:grid-cols-3'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.article
            className='relative overflow-hidden rounded-lg bg-foreground p-6 text-white shadow-xl md:p-8 lg:col-span-1 lg:row-span-2'
            variants={itemVariants}
          >
            <div className='absolute inset-x-0 top-0 h-1 bg-accent text-accent-foreground' />
            <span className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white'>
              <FeaturedIcon className='h-6 w-6' />
            </span>
            <p className='mt-8 text-sm font-semibold text-primary'>
              {featuredService.details}
            </p>
            <h3 className='mt-3 text-2xl font-display font-bold leading-tight md:text-3xl'>
              {featuredService.title}
            </h3>
            <p className='mt-4 text-sm leading-7 text-white/75 md:text-base'>
              WHI uses this as the entry point for stronger sanitation habits
              and broader community participation.
            </p>
            <Link
              href='/learn-more'
              className='mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-background'
            >
              Learn More
              <ArrowRight className='h-4 w-4' />
            </Link>
          </motion.article>

          {supportingServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className='group rounded-lg border border-primary/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg'
                variants={itemVariants}
              >
                <div className='flex items-start justify-between gap-4'>
                  <span className='flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white'>
                    <Icon className='h-5 w-5' />
                  </span>
                  <span className='text-xs font-semibold text-foreground/40'>
                    0{index + 2}
                  </span>
                </div>
                <p className='mt-5 text-xs font-semibold text-secondary'>
                  {service.details}
                </p>
                <h3 className='mt-2 text-xl font-display font-bold text-foreground'>
                  {service.title}
                </h3>
                <p className='mt-3 text-sm leading-7 text-foreground'>
                  {service.description}
                </p>
                <Link
                  href='/learn-more'
                  className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary'
                >
                  Learn More
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className='mt-12 grid gap-5 rounded-lg border border-secondary/20 bg-secondary/10 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className='text-sm leading-7 text-foreground/70 md:text-base'
            variants={itemVariants}
          >
            Tell us about your school, organization, community, or partnership
            goals.
          </motion.p>
          <motion.a
            href='#contact'
            className='inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md'
            variants={itemVariants}
          >
            Contact Us
            <ArrowRight className='h-4 w-4' />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
