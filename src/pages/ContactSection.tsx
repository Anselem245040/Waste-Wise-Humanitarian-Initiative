import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle, Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mlgyrdyl");

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
      href: "mailto:wastewisehumanitarianinitiav@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+2348159713721",
      description: "Monday - Friday, 9AM - 5PM WAT",
      href: "tel:+2348159713721",
    },
  ];

  const fieldClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder-foreground/50 transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary";

  if (state.succeeded) {
    return (
      <section className='flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-background to-muted/20 py-16 md:py-24'>
        <motion.div
          className='container max-w-md text-center'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='rounded-lg border border-primary/20 bg-white p-8 shadow-xl md:p-10'>
            <motion.div
              className='mb-6 flex justify-center'
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <CheckCircle className='h-16 w-16 text-primary' />
            </motion.div>
            <h3 className='mb-4 text-3xl font-display font-bold text-foreground'>
              Thank You!
            </h3>
            <p className='mb-6 text-foreground/70'>
              We've received your message and will get back to you shortly.
            </p>
            <a
              href='/'
              className='inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg'
            >
              Back to Home
            </a>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id='contact'
      className='bg-gradient-to-br from-white via-primary/5 to-muted/30 py-16 md:py-24'
    >
      <div className='container'>
        <motion.div
          className='mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h2 className='max-w-xl text-3xl font-display font-bold leading-tight text-foreground md:text-5xl'>
              Get In Touch
            </h2>
          </motion.div>
          <motion.p
            className='max-w-2xl text-base leading-8 text-foreground/70 md:text-lg lg:justify-self-end'
            variants={itemVariants}
          >
            Tell us what you are working on and the team will help route your
            message to the right person.
          </motion.p>
        </motion.div>

        <motion.div
          className='grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.aside variants={itemVariants}>
            <div className='overflow-hidden rounded-lg border border-primary/15 bg-white/80 shadow-sm'>
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.title}
                    href={info.href}
                    className='flex gap-4 border-b border-primary/10 p-5 transition-colors last:border-b-0 hover:bg-primary/5'
                  >
                    <span className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                      <Icon className='h-5 w-5' />
                    </span>
                    <span className='min-w-0'>
                      <span className='block text-sm font-semibold text-foreground/60'>
                        {info.title}
                      </span>
                      <span className='mt-1 block break-words font-display text-base font-bold text-foreground'>
                        {info.value}
                      </span>
                      <span className='mt-1 block text-sm leading-6 text-foreground/60'>
                        {info.description}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className='mt-4 rounded-lg border border-primary/15 bg-primary/10 p-5 text-primary'>
              <p className='text-sm leading-6'>
                For school programs, outreach campaigns, and partnership
                proposals, include your location and preferred timeline.
              </p>
            </div>
          </motion.aside>

          <motion.div
            className='rounded-lg border border-primary/15 bg-white p-6 shadow-xl md:p-8 lg:p-10'
            variants={itemVariants}
          >
            <h3 className='text-2xl font-display font-bold text-foreground md:text-3xl'>
              Send us a Message
            </h3>
            <p className='mt-2 text-sm leading-6 text-foreground/60 md:text-base'>
              Share a few details so we can understand the best way to support
              your inquiry.
            </p>

            <form onSubmit={handleSubmit} className='mt-8 space-y-5'>
              <div className='grid gap-5 md:grid-cols-2'>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm font-semibold text-foreground'
                  >
                    Full Name
                  </label>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    required
                    className={fieldClass}
                    placeholder='Your name'
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-semibold text-foreground'
                  >
                    Email Address
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    required
                    className={fieldClass}
                    placeholder='your@email.com'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor='subject'
                  className='mb-2 block text-sm font-semibold text-foreground'
                >
                  Subject
                </label>
                <select
                  id='subject'
                  name='subject'
                  required
                  className={fieldClass}
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

              <motion.div variants={itemVariants}>
                <label
                  htmlFor='message'
                  className='mb-2 block text-sm font-semibold text-foreground'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  className={`${fieldClass} resize-none`}
                  placeholder='Tell us more about your inquiry...'
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </motion.div>

              <motion.button
                type='submit'
                disabled={state.submitting}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className='inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-display font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50'
              >
                <Send className='h-5 w-5' />
                {state.submitting ? "Sending..." : "Send Message"}
              </motion.button>

              <p className='text-center text-xs leading-5 text-foreground/50'>
                We respect your privacy. Your information will never be shared
                with third parties.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
