import { motion } from "framer-motion";
import { Globe, Heart, Leaf, Target, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
};

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function AboutSection() {
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

  const values: Value[] = [
    {
      icon: Target,
      title: "Integrity",
      description:
        "Operating with transparency, honesty and accountability in all our activities",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "Believing that lasting change begins with and within communities",
    },
    {
      icon: Users,
      title: "Empowerment",
      description:
        "Equipping individuals, especially youth, with tools to create change",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Promoting creative and sustainable approaches to waste management",
    },
    {
      icon: Globe,
      title: "Collaboration",
      description: "Believing in the power of partnership to multiply impact",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Committed to solutions that protect the environment for future generations",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Chimdinma Zik",
      role: "CEO",
      bio: "Founder & Chief Executive Officer",
      avatar: "ceo.jpeg",
    },
    {
      name: "Emelda Dike",
      role: "Director, programmes and administration",
      avatar: "/WhatsApp%20Image%202026-06-15%20at%2012.00.13.jpeg",
    },
  ];

  return (
    <section
      id='about'
      className='bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-16'
    >
      <div className='container'>
        <motion.div
          className='mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className='max-w-xl text-3xl font-display font-bold leading-tight text-foreground md:text-5xl'
            variants={itemVariants}
          >
            About WHI
          </motion.h2>
          <motion.p
            className='max-w-2xl text-base leading-8 text-foreground/70 md:text-lg lg:justify-self-end'
            variants={itemVariants}
          >
            Waste Wise Humanitarian Initiative: Educating. Empowering.
            Transforming.
          </motion.p>
        </motion.div>

        <motion.div
          className='mb-12 grid gap-5 md:grid-cols-2'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.article
            className='rounded-lg border border-primary/20 bg-white p-6 shadow-sm md:p-8'
            variants={itemVariants}
          >
            <span className='flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary'>
              <Target className='h-5 w-5' />
            </span>
            <h3 className='mt-5 text-2xl font-display font-bold text-primary'>
              Our Vision
            </h3>
            <p className='mt-4 text-base leading-8 text-foreground/80 md:text-lg'>
              Building a sustainable, waste-free world that is clean and safe
              for all generations, in alignment with the global green
              initiative.
            </p>
          </motion.article>

          <motion.article
            className='rounded-lg border border-secondary/20 bg-white p-6 shadow-sm md:p-8'
            variants={itemVariants}
          >
            <span className='flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary'>
              <Leaf className='h-5 w-5' />
            </span>
            <h3 className='mt-5 text-2xl font-display font-bold text-secondary'>
              Our Mission
            </h3>
            <p className='mt-4 text-base leading-8 text-foreground/80 md:text-lg'>
              To partner with governments, organizations, schools and
              communities in waste management; to educate society on the
              importance of sanitation; and to empower youths through the
              waste-to-wealth initiative for a better tomorrow.
            </p>
          </motion.article>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className='ml-4 mb-8 text-2xl font-display font-bold text-foreground md:text-4xl'
            variants={itemVariants}
          >
            Our Core Values
          </motion.h3>
          <motion.div
            className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'
            variants={containerVariants}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  className='rounded-lg border border-primary/15 bg-white/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg'
                  variants={itemVariants}
                >
                  <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                    <Icon className='h-5 w-5' />
                  </span>
                  <h4 className='mt-4 text-xl font-display font-bold text-foreground'>
                    {value.title}
                  </h4>
                  <p className='mt-2 text-sm leading-7 text-foreground/70'>
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className='mt-16 border-t border-primary/15 pt-12 md:mt-20'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className='mb-8 text-2xl font-display font-bold text-foreground md:text-4xl'
            variants={itemVariants}
          >
            Leadership Team
          </motion.h3>
          <motion.div
            className='grid gap-5 sm:grid-cols-2 lg:max-w-4xl'
            variants={containerVariants}
          >
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                className='grid grid-cols-[5rem_1fr] gap-4 rounded-lg border border-secondary/15 bg-white p-5 shadow-sm'
                variants={itemVariants}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className='h-20 w-20 rounded-lg object-cover'
                />
                <div className='min-w-0'>
                  <h4 className='text-lg font-display font-bold text-foreground'>
                    {member.name}
                  </h4>
                  <p className='mt-1 text-sm font-semibold text-accent'>
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className='mt-2 text-sm leading-6 text-foreground/70'>
                      {member.bio}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
