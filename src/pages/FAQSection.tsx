import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

/**
 * Premium FAQ Accordion Component
 * 
 * Design System: Eco-Tech Premium
 * - Collapsible accordion with smooth animations
 * - Organized by categories (Volunteering, Donations, Partnerships)
 * - Smooth height and opacity transitions
 * - Glassmorphic design with gradient accents
 */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "volunteering" | "donations" | "partnerships";
}

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"volunteering" | "donations" | "partnerships">("volunteering");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const faqItems: FAQItem[] = [
    // Volunteering
    {
      id: "vol-1",
      category: "volunteering",
      question: "What are the volunteer opportunities available?",
      answer:
        "We offer diverse volunteer roles including community cleanup events, environmental education workshops, recycling facility support, and administrative tasks. Whether you prefer hands-on fieldwork or office-based contributions, we have opportunities that match your skills and schedule.",
    },
    {
      id: "vol-2",
      category: "volunteering",
      question: "How much time commitment is required?",
      answer:
        "Flexibility is key! You can volunteer as little as a few hours per month or dedicate more time if you're passionate. We have one-time event opportunities, weekly programs, and long-term projects. Simply let us know your availability, and we'll find the perfect fit.",
    },
    {
      id: "vol-3",
      category: "volunteering",
      question: "Do I need any special skills or experience?",
      answer:
        "No prior experience is necessary! We welcome volunteers from all backgrounds. We provide training and support for all roles. Your enthusiasm and commitment to environmental sustainability are what matter most.",
    },
    {
      id: "vol-4",
      category: "volunteering",
      question: "Is there a minimum age requirement?",
      answer:
        "Volunteers must be at least 16 years old. For those under 18, we require parental consent. We also have special youth programs and internships for students interested in environmental careers.",
    },
    {
      id: "vol-5",
      category: "volunteering",
      question: "How do I sign up to volunteer?",
      answer:
        "Visit our website and fill out the volunteer application form. You'll be contacted within 48 hours to discuss available opportunities and schedule your first volunteer session. You can also email us at volunteers@wastezero.ng.",
    },

    // Donations
    {
      id: "don-1",
      category: "donations",
      question: "How are donations used?",
      answer:
        "Every donation directly supports our programs: 40% for community cleanup initiatives, 30% for recycling infrastructure, 20% for environmental education, and 10% for operational costs. We maintain transparency through quarterly impact reports.",
    },
    {
      id: "don-2",
      category: "donations",
      question: "Is my donation tax-deductible?",
      answer:
        "Yes! WasteZero is a registered NGO with tax-exempt status. All donations are tax-deductible. You'll receive a tax receipt for your records. Consult your local tax authority for specific deduction details.",
    },
    {
      id: "don-3",
      category: "donations",
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, Paystack, Flutterwave, and mobile money transfers. For international donors, we support PayPal and credit card donations. All transactions are secure and encrypted.",
    },
    {
      id: "don-4",
      category: "donations",
      question: "Can I set up recurring donations?",
      answer:
        "Absolutely! Recurring donations are a powerful way to support our mission. You can set up monthly, quarterly, or annual donations through our secure donation portal. You can modify or cancel anytime.",
    },
    {
      id: "don-5",
      category: "donations",
      question: "Can I donate in-kind (materials, equipment)?",
      answer:
        "Yes, we accept in-kind donations of recycling equipment, office supplies, vehicles, and other materials. Contact our partnerships team at partnerships@wastezero.ng to discuss your donation.",
    },

    // Partnerships
    {
      id: "par-1",
      category: "partnerships",
      question: "What types of partnerships do you offer?",
      answer:
        "We partner with corporations for waste management solutions, government agencies for policy implementation, educational institutions for research and training, and community organizations for grassroots initiatives. Each partnership is customized to mutual goals.",
    },
    {
      id: "par-2",
      category: "partnerships",
      question: "How can my company partner with WasteZero?",
      answer:
        "We offer corporate sustainability programs, employee volunteer days, waste audits, and ESG reporting support. Contact our partnerships team at partnerships@wastezero.ng to discuss how we can help your company achieve sustainability goals.",
    },
    {
      id: "par-3",
      category: "partnerships",
      question: "What are the benefits of partnering with us?",
      answer:
        "Benefits include enhanced brand reputation, employee engagement opportunities, measurable sustainability impact, media coverage, tax benefits, and alignment with global ESG standards. We provide comprehensive reporting and recognition.",
    },
    {
      id: "par-4",
      category: "partnerships",
      question: "Do you work with government agencies?",
      answer:
        "Yes, we collaborate with federal and state government agencies on waste management policy, infrastructure development, and environmental initiatives. We've successfully implemented programs across 25+ states in Nigeria.",
    },
    {
      id: "par-5",
      category: "partnerships",
      question: "How long does a typical partnership last?",
      answer:
        "Partnership duration varies based on goals and scope. We have short-term projects (3-6 months), medium-term initiatives (1-2 years), and long-term strategic partnerships (3+ years). Terms are flexible and mutually agreed upon.",
    },
  ];

  const categories = [
    { id: "volunteering", label: "Volunteering", count: 5 },
    { id: "donations", label: "Donations", count: 5 },
    { id: "partnerships", label: "Partnerships", count: 5 },
  ];

  const filteredFAQs = faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Find answers to common questions about volunteering, donations, and partnerships
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id as "volunteering" | "donations" | "partnerships");
                setExpandedId(null);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                  : "bg-white/50 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/70"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: idx * 0.05 }}
              >
                <motion.button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full group relative overflow-hidden rounded-xl bg-white/50 backdrop-blur-md border border-white/20 p-6 hover:shadow-lg transition-all duration-300 text-left"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r from-primary to-accent"
                  />

                  {/* Content */}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                    </div>

                    {/* Chevron Icon */}
                    <motion.div
                      animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-accent" />
                    </motion.div>
                  </div>

                  {/* Answer - Collapsible */}
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-border/40">
                          <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Still Have Questions CTA */}
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
            Didn't find your answer? We're here to help!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.button
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 active:scale-97 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="px-8 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Email Support
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20"
            variants={itemVariants}
          >
            <p className="font-semibold text-primary mb-2">Email</p>
            <p className="text-foreground/80">info@wastezero.ng</p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl p-6 border border-accent/20"
            variants={itemVariants}
          >
            <p className="font-semibold text-accent mb-2">Phone</p>
            <p className="text-foreground/80">+234 (0) 123 456 7890</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
