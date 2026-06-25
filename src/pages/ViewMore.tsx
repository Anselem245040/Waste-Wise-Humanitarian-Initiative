import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Users, Zap, TrendingUp } from "lucide-react";
import { Link } from "wouter";

/**
 * View More Page - Impact Stories & Case Studies
 * 
 * Design System: Eco-Tech Premium
 * - Detailed impact stories with metrics
 * - Community success stories
 * - Environmental achievements
 * - Smooth entrance animations
 */

interface ImpactStory {
  id: number;
  title: string;
  location: string;
  impact: string;
  metric: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function ViewMore() {
  const impactStories: ImpactStory[] = [
    {
      id: 1,
      title: "Lagos Community Cleanup Initiative",
      location: "Lagos Island, Lagos",
      impact: "25+ Communities Transformed",
      metric: "50,000+ Tons of Waste Diverted",
      description: "Over the past 18 months, we've mobilized 5,000+ volunteers across Lagos Island to clean up neighborhoods, restore public spaces, and implement sustainable waste management practices. The initiative has resulted in measurable improvements in community health and environmental quality.",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      title: "Youth Employment Program",
      location: "Abuja, FCT",
      impact: "500+ Youth Employed",
      metric: "₦50M+ in Wages Generated",
      description: "Our youth empowerment initiative has trained and employed 500+ young professionals in waste management and recycling operations. Participants earn competitive wages while gaining valuable skills in environmental sustainability and business management.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Corporate Recycling Partnership",
      location: "Multiple Locations",
      impact: "50+ Companies Engaged",
      metric: "12,500+ Tons Recycled Annually",
      description: "We've partnered with leading corporations to implement comprehensive recycling programs. These partnerships have diverted over 12,500 tons of waste from landfills annually while creating new revenue streams for participating communities.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 4,
      title: "Environmental Education Campaign",
      location: "100+ Schools Nationwide",
      impact: "50,000+ Students Educated",
      metric: "98% Behavior Change Rate",
      description: "Our comprehensive environmental education program has reached 50,000+ students across Nigeria. Through interactive workshops and community engagement, we've achieved a 98% positive behavior change rate in sustainable waste practices among participating students.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
  ];

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10">
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 text-primary hover:text-primary/80 cursor-pointer mb-6 w-fit"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </motion.div>
          </Link>

          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Impact</span> Stories
            </h1>
            <p className="text-xl text-foreground/60">
              Real communities, real change. Discover the transformative work we're doing across Nigeria to build a cleaner, greener future.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Impact Stories Grid */}
      <div className="container py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {impactStories.map((story) => (
            <motion.div
              key={story.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${story.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {story.icon}
                </div>

                {/* Title & Location */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{story.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{story.location}</p>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">{story.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Impact</p>
                    <p className="text-lg font-bold text-primary">{story.impact}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Metric</p>
                    <p className="text-lg font-bold text-accent">{story.metric}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container py-16">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-6 sm:p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Movement
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Be part of the solution. Together, we can transform Nigeria's waste management landscape and create lasting environmental change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Involved
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
