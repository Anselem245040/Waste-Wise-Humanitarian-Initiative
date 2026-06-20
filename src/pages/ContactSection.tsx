import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
// import { useState } from "react";

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
  // const [showSuccess, setShowSuccess] = useState(false);

  if (state.succeeded) {
    return (
      <section className='py-16 md:py-24 bg-gradient-to-b from-background to-muted/20 min-h-screen flex items-center justify-center'>
        <motion.div
          className='container max-w-md text-center'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-md border border-primary/20 rounded-3xl p-12'>
            <motion.div
              className='mb-6 flex justify-center'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <CheckCircle className='w-16 h-16 text-primary' />
            </motion.div>
            <h3 className='text-3xl font-display font-bold text-foreground mb-4'>
              Thank You!
            </h3>
            <p className='text-foreground/70 mb-6'>
              We've received your message and will get back to you shortly.
            </p>
            <a
              href='/'
              className='inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300'
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </section>
    );
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
      value: "wastewisehumanitarianinitiav@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+2348159713721",
      description: "Monday - Friday, 9AM - 5PM WAT",
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

        {/* Contact Form & Map */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Form Column */}
          <motion.div
            className='lg:col-span-2'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='bg-gradient-to-br from-brand-warm-white to-white border border-primary/10 rounded-3xl p-8 md:p-10 shadow-xl'>
              <h3 className='text-2xl md:text-3xl font-display font-bold mb-2 text-foreground'>
                Send us a Message
              </h3>
              <p className='text-foreground/60 mb-8'>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor='name'
                    className='block text-sm font-semibold text-foreground mb-2'
                  >
                    Full Name
                  </label>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                    placeholder='Your name'
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold text-foreground mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                    placeholder='your@email.com'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor='subject'
                    className='block text-sm font-semibold text-foreground mb-2'
                  >
                    Subject
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    required
                    className='w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                  >
                    <option value=''>Select a subject</option>
                    <option value='General Inquiry'>General Inquiry</option>
                    <option value='Partnership'>Partnership Opportunity</option>
                    <option value='Donation'>Donation & Support</option>
                    <option value='Volunteer'>Volunteer Opportunity</option>
                    <option value='Media'>Media & Press</option>
                    <option value='Other'>Other</option>
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold text-foreground mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={5}
                    className='w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none'
                    placeholder='Tell us more about your inquiry...'
                  />
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  disabled={state.submitting}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold font-display hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  <Send className='w-5 h-5' />
                  {state.submitting ? "Sending..." : "Send Message"}
                </motion.button>

                <p className='text-xs text-foreground/50 text-center'>
                  We respect your privacy. Your information will never be shared
                  with third parties.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div
            className='lg:col-span-1'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='space-y-4'>
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={idx}
                    className='bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md border border-primary/20 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className='flex flex-col items-center gap-3 w-full'>
                      <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mx-auto'>
                        <Icon className='w-5 h-5 text-white' />
                      </div>
                      <div className='w-full'>
                        <h4 className='font-display font-bold text-foreground mb-1 text-center'>
                          {info.title}
                        </h4>
                        <p className='text-sm font-semibold text-secondary mb-1 break-words text-center'>
                          {info.value}
                        </p>
                        <p className='text-xs text-foreground/60 text-center'>
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Additional Info Card */}
              <motion.div
                className='bg-gradient-to-br from-brand-warm-white to-white border border-primary/10 rounded-2xl p-5 mt-6 text-center flex flex-col items-center justify-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className='font-display font-bold text-foreground mb-3 text-center'>
                  Quick Connect
                </h4>
                <div className='flex flex-col items-center space-y-2 w-full'>
                  <a
                    href='mailto:wastewisehumanitarianinitiav@gmail.com'
                    className='flex items-center justify-center gap-2 text-sm text-primary hover:text-secondary transition-colors text-center w-full'
                  >
                    <Mail className='w-4 h-4' />
                    Send Email
                  </a>
                  <a
                    href='tel:+2348159713721'
                    className='flex items-center justify-center gap-2 text-sm text-primary hover:text-secondary transition-colors text-center w-full'
                  >
                    <Phone className='w-4 h-4' />
                    Call Us
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
