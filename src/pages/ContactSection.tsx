import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
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
  const [state, handleSubmit] = useForm("maqgwwpn");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const Submit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Reset form
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

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
        {/* Form */}
        <form
          action='https://formspree.io/f/maqgwwpn'
          method='POST'
          onSubmit={handleSubmit}
        >
          <label htmlFor='email'>Email Address</label>
          <input id='email' type='email' name='email' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
          <textarea id='message' name='message' />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button type='submit' disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
