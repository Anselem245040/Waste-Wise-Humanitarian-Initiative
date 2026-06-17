import { motion } from "framer-motion";
import { Users, Globe, BookOpen, Zap, Handshake, Heart } from "lucide-react";

/**
 * Purpose & Target Beneficiaries Section
 *
 * Design System: Eco-Tech Premium
 * - Explains WHI's core purpose and target audience
 * - Two-column layout with purpose on left, beneficiaries on right
 * - Icon-based beneficiary cards
 */

export default function PurposeSection() {
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

  const beneficiaries = [
    {
      icon: Users,
      title: "Local Communities & Households",
      description: "Grassroots environmental stewardship starts at home",
    },
    {
      icon: BookOpen,
      title: "School Children & Students",
      description: "Building environmental awareness in the next generation",
    },
    {
      icon: Zap,
      title: "Youth Groups & Associations",
      description: "Creating economic opportunities through skill training",
    },
    {
      icon: Globe,
      title: "Government Agencies",
      description: "Policy implementation and systemic change",
    },
    {
      icon: Handshake,
      title: "Corporate Organizations",
      description: "Sustainable business solutions and partnerships",
    },
    {
      icon: Heart,
      title: "Global Community",
      description: "Contributing to worldwide environmental goals",
    },
  ];

  return (
    <section
      id='purpose'
      className='py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background'
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
            Our Purpose & Who We Serve
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto'
            variants={itemVariants}
          >
            Environmental sustainability and human development are
            interconnected
          </motion.p>
        </motion.div>

        {/* Two-Column Layout: Purpose + Beneficiaries */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Purpose Column */}
          <motion.div
            className='bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:shadow-lg transition-all duration-300'
            variants={itemVariants}
          >
            <h3 className='text-3xl font-display font-bold mb-6 text-primary'>
              Our Purpose
            </h3>
            <div className='space-y-4 text-foreground/80 leading-relaxed'>
              <p>
                Our purpose is rooted in the belief that{" "}
                <span className='font-semibold text-foreground'>
                  environmental sustainability and human development are
                  interconnected.
                </span>
              </p>
              <p>
                Thousands of Nigerian youths lack access to practical skills,
                livelihood opportunities, and environmental education that can
                prepare them to become productive contributors to society.
              </p>
              <p>
                For this reason, WHI works at the intersection of environmental
                stewardship, education, skills development, and economic
                empowerment.
              </p>
              <div className='pt-4 border-t border-primary/20 mt-6'>
                <p className='font-semibold text-foreground italic'>
                  "We use environmental sustainability as a platform for
                  educating, empowering, and creating opportunities for children
                  and young people."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Beneficiaries Column */}
          <motion.div variants={itemVariants} className='space-y-4'>
            <h3 className='text-3xl font-display font-bold mb-8 text-secondary'>
              Target Beneficiaries
            </h3>
            <div className='grid grid-cols-1 gap-4'>
              {beneficiaries.map((beneficiary, idx) => {
                const Icon = beneficiary.icon;
                return (
                  <motion.div
                    key={idx}
                    className='flex gap-4 p-4 rounded-xl bg-white/40 hover:bg-white/60 border border-white/20 hover:border-white/40 transition-all duration-300 group'
                    whileHover={{ x: 5 }}
                  >
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg transition-shadow'>
                        <Icon className='w-6 h-6 text-white' />
                      </div>
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-display font-bold text-foreground mb-1'>
                        {beneficiary.title}
                      </h4>
                      <p className='text-sm text-foreground/70'>
                        {beneficiary.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* What We Plan to Achieve */}
        <motion.div
          className='bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 border border-primary/20'
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className='text-3xl font-display font-bold mb-8 text-center text-foreground'>
            What We Plan to Achieve
          </h3>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            variants={containerVariants}
          >
            {[
              {
                num: "1",
                title: "Raise Awareness",
                desc: "On the dangers of nylon and plastic waste pollution",
              },
              {
                num: "2",
                title: "Educate Communities",
                desc: "On proper waste management and improved sanitation practices",
              },
              {
                num: "3",
                title: "Train & Empower Youth",
                desc: "Through waste-to-wealth initiatives that generate economic opportunities",
              },
              {
                num: "4",
                title: "Promote Culture",
                desc: "Of environmental responsibility across all demographics",
              },
              {
                num: "5",
                title: "Partner with Institutions",
                desc: "In developing and implementing waste management policies",
              },
              {
                num: "6",
                title: "Drive Systemic Change",
                desc: "Across governments and organizations for lasting impact",
              },
            ].map((goal, idx) => (
              <motion.div
                key={idx}
                className='p-6 rounded-lg bg-white/40 hover:bg-white/60 border border-white/20 transition-all duration-300'
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0'>
                    <span className='font-display font-bold text-white'>
                      {goal.num}
                    </span>
                  </div>
                  <div>
                    <h4 className='font-display font-bold text-foreground mb-1'>
                      {goal.title}
                    </h4>
                    <p className='text-sm text-foreground/70'>{goal.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
