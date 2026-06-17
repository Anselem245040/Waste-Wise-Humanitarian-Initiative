import { motion } from "framer-motion";
import { Users, Zap, Globe, Leaf, BarChart3, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Premium Impact Grid Component - Bento Style
 *
 * Design System: Eco-Tech Premium
 * - Bento grid layout with varied card sizes
 * - Gradient borders (primary, secondary, accent colors)
 * - Smooth scale-up hover animations
 * - Lucide React icons with gradient backgrounds
 * - AI-generated placeholder text (editable)
 */

interface ImpactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  size?: "small" | "large";
  accentColor: string;
}

function ImpactCard({
  icon,
  title,
  description,
  gradient,
  size = "small",
  accentColor,
}: ImpactCardProps) {
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 border-2 transition-all duration-300 hover:shadow-2xl ${
        size === "large" ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{
        borderImage: `linear-gradient(135deg, var(--color-${gradient}), var(--color-${accentColor})) 1`,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Background Overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-${gradient} to-${accentColor}`}
      />

      {/* Content */}
      <div
        className={`relative z-10 p-6 md:p-8 h-full flex flex-col justify-between`}
      >
        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
          style={{
            background: `linear-gradient(135deg, var(--color-${gradient}), var(--color-${accentColor}))`,
          }}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className='text-white'>{icon}</div>
        </motion.div>

        {/* Title */}
        <h3 className='text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-sm md:text-base text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors'>
          {description}
        </p>

        {/* Floating Badge */}
        <a
          href='/learn-more'
          className='mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity'
        >
          <span>Learn More</span>
          <span>→</span>
        </a>
      </div>

      {/* Border Glow Effect */}
      <motion.div
        className='absolute inset-0 rounded-2xl pointer-events-none'
        style={{
          border: `2px solid transparent`,
          backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, var(--color-${gradient}), var(--color-${accentColor}))`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function ImpactGrid() {
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

  const impactCards = [
    {
      icon: <Users className='w-7 h-7' />,
      title: "Communities Reached",
      description:
        "Our Year 1 goal: Reach at least 10 communities across Enugu State and neighboring areas, creating grassroots environmental awareness and engagement.",
      gradient: "primary",
      accentColor: "secondary",
      size: "small",
    },
    {
      icon: <Zap className='w-7 h-7' />,
      title: "Youth Empowered",
      description:
        "Train and employ 200+ youth through our waste-to-wealth initiative, creating sustainable jobs and economic opportunities while protecting the environment.",
      gradient: "accent",
      accentColor: "secondary",
      size: "small",
    },
    {
      icon: <Globe className='w-7 h-7' />,
      title: "School Partnerships",
      description:
        "Partner with 10+ schools for comprehensive environmental education, equipping students with waste management knowledge and sustainable practices.",
      gradient: "secondary",
      accentColor: "primary",
      size: "small",
    },
    {
      icon: <Leaf className='w-7 h-7' />,
      title: "The Plastic Crisis",
      description:
        "432+ million tonnes of plastic waste generated annually. 199+ million tonnes litter our oceans. 1+ million sea creatures killed yearly. 1000+ years for plastic to decompose. Together we can change this.",
      gradient: "primary",
      accentColor: "accent",
      size: "large",
    },
    {
      icon: <BarChart3 className='w-7 h-7' />,
      title: "Institutional Partnerships",
      description:
        "Establish 5+ partnerships with governments and organizations to drive policy change and implement waste management solutions across Nigeria.",
      gradient: "accent",
      accentColor: "primary",
      size: "small",
    },
    {
      icon: <Lightbulb className='w-7 h-7' />,
      title: "Public Awareness",
      description:
        "Reach 1,000+ people through awareness campaigns and social media, spreading knowledge about sustainable waste management and environmental responsibility.",
      gradient: "secondary",
      accentColor: "accent",
      size: "small",
    },
  ];

  return (
    <section
      id='impact'
      className='py-16 md:py-24 bg-gradient-to-b from-background to-muted/20'
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
            Our Social Impact & First Year Goals
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto'
            variants={itemVariants}
          >
            Building sustainable change through community engagement, education,
            and economic empowerment
          </motion.p>
          <motion.p>
            Comprehensive waste management solutions built on innovation,
            community engagement, and sustainable practices
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {impactCards.map((card, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ImpactCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                gradient={card.gradient}
                accentColor={card.accentColor}
                size={card.size as "small" | "large"}
              />
            </motion.div>
          ))}
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
            Interested in learning more about our initiatives?
          </motion.p>
          <a
            href='/explore-all'
            className='px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 active:scale-97 transition-all duration-300'
          >
            Explore All Initiatives
          </a>
        </motion.div>
      </div>
    </section>
  );
}
