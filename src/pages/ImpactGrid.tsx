import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Leaf,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ImpactCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: string;
  iconClass: string;
};

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

  const impactCards: ImpactCard[] = [
    {
      icon: Users,
      title: "Communities Reached",
      description:
        "Reach communities, creating grassroots environmental awareness and engagement through our global initiatives.",
      tone: "border-primary/20 bg-white",
      iconClass: "bg-primary text-white",
    },
    {
      icon: Zap,
      title: "Youth Empowered",
      description:
        "Train and employ 200+ youth through our waste-to-wealth initiative, creating sustainable jobs and economic opportunities while protecting the environment.",
      tone: "border-secondary/20 bg-secondary/10",
      iconClass: "bg-secondary text-white",
    },
    {
      icon: Globe,
      title: "School Partnerships",
      description:
        "Partner with 10+ schools for comprehensive environmental education, equipping students with waste management knowledge and sustainable practices.",
      tone: "border-primary/20 bg-primary/10",
      iconClass: "bg-primary text-white",
    },
    {
      icon: BarChart3,
      title: "Institutional Partnerships",
      description:
        "Establish 5+ partnerships with governments and organizations to drive policy change and implement waste management solutions across Nigeria.",
      tone: "border-secondary/20 bg-white",
      iconClass: "bg-secondary text-white",
    },
    {
      icon: Lightbulb,
      title: "Public Awareness",
      description:
        "Reach 1,000+ people through awareness campaigns and social media, spreading knowledge about sustainable waste management and environmental responsibility.",
      tone: "border-primary/20 bg-white",
      iconClass: "bg-primary text-white",
    },
  ];

  return (
    <section
      id='impact'
      className='bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 md:py-24'
    >
      <div className='container'>
        <motion.div
          className='grid gap-10 lg:grid-cols-12 lg:gap-14'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className='lg:col-span-4 lg:sticky lg:top-28'
            variants={itemVariants}
          >
            <h2 className='max-w-xl text-3xl font-display font-bold leading-tight text-foreground md:text-5xl'>
              Our Social Impact & Goals
            </h2>
            <p className='mt-5 max-w-xl text-base leading-8 text-foreground/70 md:text-lg'>
              Building sustainable change through community engagement,
              education, and economic empowerment
            </p>
            <p className='mt-4 max-w-xl text-sm leading-7 text-foreground/60 md:text-base'>
              Comprehensive waste management solutions built on innovation,
              community engagement, and sustainable practices
            </p>
            <a
              href='/explore-all'
              className='mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md'
            >
              Explore All Initiatives
              <ArrowRight className='h-4 w-4' />
            </a>
          </motion.div>

          <motion.div className='lg:col-span-8' variants={containerVariants}>
            <div className='grid gap-4 sm:grid-cols-2'>
              <motion.article
                className='relative overflow-hidden rounded-lg bg-foreground p-6 text-background shadow-xl sm:col-span-2 md:p-8'
                variants={itemVariants}
              >
                <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent' />
                <div className='grid gap-6 md:grid-cols-[1fr_auto] md:items-end'>
                  <div>
                    <span className='inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white'>
                      <Leaf className='h-6 w-6' />
                    </span>
                    <h3 className='mt-5 max-w-2xl text-2xl font-display font-bold leading-tight text-white md:text-4xl'>
                      Nylon and Plastic Crisis
                    </h3>
                    <p className='mt-4 max-w-2xl text-sm leading-7 text-background/75 md:text-base'>
                      Nylon and Plastic pollution cause diseases, disability,
                      and premature death at every stage of its lifecycle.
                      Together we clean our environment to promote healthy
                      lifestyle.
                    </p>
                  </div>
                  <a
                    href='/learn-more'
                    className='inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-background'
                  >
                    Learn More
                    <ArrowRight className='h-4 w-4' />
                  </a>
                </div>
              </motion.article>

              {impactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    className={`rounded-lg border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${card.tone}`}
                    variants={itemVariants}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${card.iconClass}`}
                    >
                      <Icon className='h-5 w-5' />
                    </span>
                    <h3 className='mt-5 text-xl font-display font-bold text-foreground'>
                      {card.title}
                    </h3>
                    <p className='mt-3 text-sm leading-7 text-foreground/70'>
                      {card.description}
                    </p>
                    <a
                      href='/learn-more'
                      className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary'
                    >
                      Learn More
                      <ArrowRight className='h-4 w-4' />
                    </a>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='mt-12 grid gap-5 rounded-lg border border-primary/20 bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className='text-base text-foreground/70 md:text-lg'
            variants={itemVariants}
          >
            Interested in learning more about our initiatives?
          </motion.p>
          <motion.a
            href='/explore-all'
            className='inline-flex min-h-11 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md'
            variants={itemVariants}
          >
            Explore All Initiatives
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

