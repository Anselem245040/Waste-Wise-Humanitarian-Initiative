import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

/**
 * Premium Contact Section Component
 *
 * Design System: Eco-Tech Premium
 * - Contact form with validation
 * - Location and contact information
 * - Smooth animations and transitions
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@wastewisehumanitarianinitiative.org",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 (0) 123 456 7890",
      description: "Monday - Friday, 9AM - 5PM WAT",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "Lagos, Nigeria",
      description: "Multiple offices across Nigeria",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "9:00 AM - 5:00 PM",
      description: "Monday to Friday (WAT)",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id='contact'
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
            Get In Touch
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto'
            variants={itemVariants}
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                className='bg-gradient-to-br from-primary/40 to-accent/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group'
                variants={itemVariants}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow'>
                  <Icon className='w-6 h-6 text-white' />
                </div>
                <h4 className='text-lg font-display font-bold text-foreground mb-1'>
                  {info.title}
                </h4>
                <p className='font-semibold text-primary mb-2'>{info.value}</p>
                <p className='text-sm text-foreground/60'>{info.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form & Map */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className='bg-gradient-to-br from-secondary/40 to-accent/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10'
            >
              <div className='space-y-6'>
                {/* Name Field */}
                <div>
                  <label className='block text-sm font-semibold text-foreground mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    className='w-full px-4 py-3 rounded-lg bg-white border border-border/40 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className='block text-sm font-semibold text-foreground mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 rounded-lg bg-white border border-border/40 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className='block text-sm font-semibold text-foreground mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='How can we help?'
                    className='w-full px-4 py-3 rounded-lg bg-white border border-border/40 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className='block text-sm font-semibold text-foreground mb-2'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell us more about your inquiry...'
                    rows={5}
                    className='w-full px-4 py-3 rounded-lg bg-white border border-border/40 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none'
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  className='w-full px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 active:scale-97 transition-all duration-300 flex items-center justify-center gap-2'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className='w-4 h-4' />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div className='space-y-8' variants={itemVariants}>
            {/* Map Placeholder */}
            <div className='bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden h-80 flex items-center justify-center'>
              <div className='text-center'>
                <MapPin className='w-12 h-12 text-primary mx-auto mb-4' />
                <p className='text-foreground/70'>
                  Map integration coming soon
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className='bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20'>
              <h4 className='text-xl font-display font-bold text-foreground mb-4'>
                Office Locations
              </h4>
              <div className='space-y-4'>
                <div>
                  <p className='font-semibold text-primary mb-1'>
                    Lagos Office
                  </p>
                  <p className='text-foreground/70'>
                    Plot 123, Lekki Phase 1, Lagos
                  </p>
                </div>
                <div>
                  <p className='font-semibold text-primary mb-1'>
                    Abuja Office
                  </p>
                  <p className='text-foreground/70'>
                    Suite 456, Central Business District, Abuja
                  </p>
                </div>
                <div>
                  <p className='font-semibold text-primary mb-1'>
                    Port Harcourt Office
                  </p>
                  <p className='text-foreground/70'>
                    Building 789, GRA Phase 2, Port Harcourt
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
