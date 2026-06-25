import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, BookOpen, Award, Lightbulb } from "lucide-react";
import { Link } from "wouter";

/**
 * Learn More Page - Detailed Service Information
 * 
 * Design System: Eco-Tech Premium
 * - Comprehensive service details
 * - Process workflows
 * - Benefits and outcomes
 * - Smooth entrance animations
 */

interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  color: string;
}

export default function LearnMore() {
  const serviceDetails: ServiceDetail[] = [
    {
      id: 1,
      title: "Community Cleanup Programs",
      description: "We organize large-scale community cleanup initiatives that bring together volunteers, local leaders, and residents to restore public spaces and improve environmental quality.",
      benefits: [
        "Mobilize 500+ volunteers per event",
        "Remove tons of waste from neighborhoods",
        "Build community awareness and engagement",
        "Create lasting environmental impact",
        "Foster social cohesion and pride",
      ],
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      title: "Corporate Waste Solutions",
      description: "We provide comprehensive waste management solutions tailored to corporate clients, including recycling programs, waste audits, and sustainability consulting.",
      benefits: [
        "Reduce corporate waste by 70%",
        "Implement sustainable practices",
        "Achieve environmental certifications",
        "Improve corporate social responsibility",
        "Generate cost savings through recycling",
      ],
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Technology-Driven Tracking",
      description: "Our innovative tech platform enables real-time waste tracking, impact measurement, and community engagement through mobile applications and data analytics.",
      benefits: [
        "Real-time waste tracking",
        "Transparent impact measurement",
        "Community engagement tools",
        "Data-driven insights",
        "Scalable technology infrastructure",
      ],
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 4,
      title: "Environmental Education",
      description: "We conduct comprehensive educational programs in schools and communities to raise awareness about waste management and sustainable living practices.",
      benefits: [
        "Reach 50,000+ students annually",
        "Build environmental consciousness",
        "Develop sustainable habits",
        "Create youth ambassadors",
        "Achieve 98% behavior change rate",
      ],
      icon: <CheckCircle className="w-8 h-8" />,
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
              Learn About Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-foreground/60">
              Discover how we're revolutionizing waste management through innovative solutions, community engagement, and sustainable practices.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Details */}
      <div className="container py-16">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.id}
              className="grid md:grid-cols-2 gap-8 items-center"
              variants={itemVariants}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-foreground/70 text-lg mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">Key Benefits</p>
                  {service.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <CheckCircle className={`w-5 h-5 text-primary flex-shrink-0 mt-0.5`} />
                      <span className="text-foreground/80">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <motion.div
                className={`relative h-96 rounded-2xl overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-white/20 scale-150`}>
                    {service.icon}
                  </div>
                </div>
              </motion.div>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to implement sustainable waste management solutions in your community or organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
