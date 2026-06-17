import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Heart, Lightbulb, Users } from "lucide-react";

/**
 * Premium CEO Profile Section Component
 * 
 * Design System: Eco-Tech Premium
 * - CEO biography and vision statement
 * - Achievements and credentials
 * - Smooth animations and transitions
 */

export default function CEOSection() {
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

  const achievements = [
    {
      icon: Award,
      title: "Environmental Leadership",
      description: "Recognized by UN for waste management innovation",
    },
    {
      icon: BookOpen,
      title: "Published Author",
      description: "3 books on sustainable waste management",
    },
    {
      icon: Globe,
      title: "Global Speaker",
      description: "Keynote speaker at 50+ international conferences",
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Mobilized 500K+ people for environmental action",
    },
    {
      icon: Lightbulb,
      title: "Innovator",
      description: "Developed 15+ patented waste management solutions",
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Dedicated 20+ years to environmental justice",
    },
  ];

  return (
    <section id="ceo" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            variants={itemVariants}
          >
            Meet Our Founder & CEO
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Visionary leader driving sustainable waste management across Nigeria
          </motion.p>
        </motion.div>

        {/* CEO Profile */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image/Avatar */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
              <div className="bg-white/50 backdrop-blur-md rounded-xl p-8 flex items-center justify-center h-96">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-primary/30">
                  <Users className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              20+ Years Impact
            </motion.div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                Dr. Amara Okafor
              </h3>
              <p className="text-xl text-accent font-semibold mb-4">
                Founder & Chief Executive Officer
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Dr. Amara Okafor is a visionary environmental engineer and social entrepreneur with over two decades of experience in sustainable waste management. She founded WasteZero with a mission to transform how Nigeria manages waste—turning environmental challenges into economic opportunities.
              </p>
            </div>

            {/* Vision Statement */}
            <motion.div
              className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20"
              variants={itemVariants}
            >
              <h4 className="font-display font-bold text-foreground mb-3">
                Her Vision
              </h4>
              <p className="text-foreground/80 italic">
                "Building a sustainable, waste-free world that is clean and safe for all generations, in alignment with the global green initiative."
              </p>
            </motion.div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/50 backdrop-blur-md border border-white/20 rounded-lg p-4">
                <p className="text-2xl font-display font-bold text-primary">PhD</p>
                <p className="text-sm text-foreground/70">Environmental Engineering</p>
              </div>
              <div className="bg-white/50 backdrop-blur-md border border-white/20 rounded-lg p-4">
                <p className="text-2xl font-display font-bold text-primary">2019</p>
                <p className="text-sm text-foreground/70">Founded WasteZero</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
            variants={itemVariants}
          >
            Key Achievements
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-foreground/70">{achievement.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Media & Speaking */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              number: "50+",
              label: "International Conferences",
              description: "Keynote speaker and panelist",
            },
            {
              number: "3",
              label: "Published Books",
              description: "On sustainable waste management",
            },
            {
              number: "100+",
              label: "Media Features",
              description: "BBC, CNN, TED, and more",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20"
              variants={itemVariants}
            >
              <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="font-semibold text-foreground mb-2">{stat.label}</p>
              <p className="text-sm text-foreground/70">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-lg text-foreground/70 mb-6"
            variants={itemVariants}
          >
            Interested in partnering with WasteZero or inviting Dr. Amara to speak?
          </motion.p>
          <motion.button
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 active:scale-97 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
