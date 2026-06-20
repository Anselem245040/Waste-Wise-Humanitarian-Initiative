import { motion } from "framer-motion";
import { Target, Heart, Users, Zap, Globe, Leaf } from "lucide-react";

/**
 * Premium About Section Component
 *
 * Design System: Eco-Tech Premium
 * - Mission, Values, and Team subsections
 * - Smooth entrance animations
 * - Glassmorphic cards with gradient accents
 */

type teamMember = {
  name: string;
  role: string;
  bio?: string;
  avatar?: string; // Optional avatar image URL
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

  const values = [
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

  const teamMembers: teamMember[] = [
    {
      name: "Chimdinma Zik",
      role: "CEO",
      bio: "Founder & Chief Executive Officer",
      avatar: "/WhatsApp%20Image%202026-06-03%20at%2009.07.23.jpeg",
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
      className='py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5'
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
            About WHI
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto'
            variants={itemVariants}
          >
            Waste Wise Humanitarian Initiative: Educating. Empowering.
            Transforming.
          </motion.p>
        </motion.div>

        {/* Vision & Mission Statements */}
        <motion.div
          className='mb-12 grid grid-cols-1 md:grid-cols-2 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vision */}
          <motion.div
            className='bg-gradient-to-r from-primary/40 to-secondary/40 rounded-2xl p-8 md:p-10 border border-primary/20 text-center flex flex-col items-center justify-center'
            variants={itemVariants}
          >
            <h3 className='text-2xl font-display font-bold mb-4 text-primary'>
              Our Vision
            </h3>
            <p className='text-lg text-foreground/80 leading-relaxed'>
              Building a sustainable, waste-free world that is clean and safe
              for all generations, in alignment with the global green
              initiative.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className='bg-gradient-to-r from-secondary/40 to-accent/40 rounded-2xl p-8 md:p-10 border border-secondary/20 text-center flex flex-col items-center justify-center'
            variants={itemVariants}
          >
            <h3 className='text-2xl font-display font-bold mb-4 text-secondary'>
              Our Mission
            </h3>
            <p className='text-lg text-foreground/80 leading-relaxed'>
              To partner with governments, organizations, schools and
              communities in waste management; to educate society on the
              importance of sanitation; and to empower youths through the
              waste-to-wealth initiative for a better tomorrow.
            </p>
          </motion.div>
        </motion.div>
        {/* Core Values */}
        <motion.div
          className='mb-20'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className='text-3xl md:text-4xl font-display font-bold mb-12 text-center'
            variants={itemVariants}
          >
            Our Core Values
          </motion.h3>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            variants={containerVariants}
          >
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  className='bg-gradient-to-br from-primary/40 to-accent/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 group text-center flex flex-col items-center'
                  variants={itemVariants}
                >
                  <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow mx-auto'>
                    <Icon className='w-6 h-6 text-white' />
                  </div>
                  <h4 className='text-xl font-display font-bold mb-2 text-foreground'>
                    {value.title}
                  </h4>
                  <p className='text-foreground/70'>{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className='mb-20'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className='text-3xl md:text-4xl font-display font-bold mb-12 text-center'
            variants={itemVariants}
          >
            Leadership Team
          </motion.h3>
          <motion.div
            className='flex flex-wrap justify-center gap-8 max-w-4xl mx-auto w-full'
            variants={containerVariants}
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className='bg-gradient-to-br from-secondary/40 to-primary/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group w-full sm:w-[calc(50%-1rem)] md:w-64'
                variants={itemVariants}
              >
                <div className='w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center group-hover:shadow-lg transition-shadow'>
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className='w-16 h-16 object-cover rounded-full border-2 border-white/20'
                    />
                  ) : (
                    <div className='w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center'>
                      <Users className='w-8 h-8 text-white' />
                    </div>
                  )}
                </div>
                <h4 className='text-lg font-display font-bold text-foreground mb-1'>
                  {member.name}
                </h4>
                <p className='text-accent font-semibold mb-2'>{member.role}</p>
                <p className='text-sm text-foreground/70'>{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
