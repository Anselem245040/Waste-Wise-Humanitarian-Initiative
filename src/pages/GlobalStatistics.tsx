import { motion } from "framer-motion";
import { BarChart3, Droplet, Globe, Timer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Statistic = {
  icon: LucideIcon;
  value: string;
  unit: string;
  description: string;
  tone: string;
};

export default function GlobalStatistics() {
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

  const statistics: Statistic[] = [
    {
      icon: BarChart3,
      value: "432+",
      unit: "Million Tonnes",
      description: "of plastic waste generated annually",
      tone: "bg-primary text-white",
    },
    {
      icon: Timer,
      value: "1,000+",
      unit: "Years",
      description: "for plastic to decompose naturally",
      tone: "bg-secondary text-white",
    },
    {
      icon: Droplet,
      value: "199+",
      unit: "Million Tonnes",
      description: "of plastic litter our Ocean damaging the ecosystem",
      tone: "bg-primary text-white",
    },
    {
      icon: Globe,
      value: "1M+",
      unit: "Sea Creatures",
      description: "killed by plastic every year",
      tone: "bg-secondary text-white",
    },
  ];

  return (
    <section className='bg-gradient-to-br from-secondary/10 via-muted to-primary/10 py-16 md:py-24'>
      <div className='container'>
        <motion.div
          className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h2 className='max-w-xl text-3xl font-display font-bold leading-tight text-foreground md:text-5xl'>
              Global Statistics
            </h2>
            <p className='mt-5 max-w-xl text-base leading-8 text-foreground/70 md:text-lg'>
              Understanding the scale of the plastic crisis we face
            </p>
            <p className='mt-4 max-w-xl text-sm leading-7 text-foreground/60 md:text-base'>
              These numbers frame the urgency behind WHI's education, cleanup,
              and waste-to-wealth programs. Cleaner habits compound when people
              understand the scale of the problem.
            </p>
          </motion.div>

          <motion.div
            className='overflow-hidden rounded-lg border border-primary/15 bg-white shadow-sm'
            variants={containerVariants}
          >
            {statistics.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.article
                  key={`${stat.value}-${stat.unit}`}
                  className='grid gap-4 border-b border-primary/10 p-5 last:border-b-0 sm:grid-cols-[auto_1fr_minmax(0,16rem)] sm:items-center md:p-6'
                  variants={itemVariants}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.tone}`}
                  >
                    <Icon className='h-6 w-6' />
                  </span>
                  <div>
                    <p className='font-display text-3xl font-bold text-foreground md:text-4xl'>
                      {stat.value}
                    </p>
                    <p className='mt-1 text-sm font-semibold text-primary'>
                      {stat.unit}
                    </p>
                  </div>
                  <p className='max-w-xs text-sm leading-7 text-foreground/70 sm:text-right'>
                    {stat.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
