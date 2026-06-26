import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

interface SocialPost {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  content: string;
  label: string;
  likes: number;
  comments: number;
  shares: number;
  url: string;
}

export default function SocialMediaFeed() {
  const socialPosts: SocialPost[] = [
    {
      id: "ln1",
      author: "Waste Wise Humanitarian Initiative (WHI)",
      handle: "Waste Wise Humanitarian Initiative",
      avatar: "ceo.jpeg",
      content:
        "The world is evolving - tomorrow there's activity. View the full post on LinkedIn: Community cleanups, environmental tips, and impact stories continue to shape how WHI shares the work.",
      label: "Community update",
      likes: 11,
      comments: 11,
      shares: 3,
      url: "https://www.linkedin.com/posts/waste-wise-humanitarian-initiative-whi_the-world-is-evolving-tomorrow-theres-activity-7468228687868645376-HIF0?utm_source=share&utm_medium=member_android&rcm=ACoAAFXklfgBxgexAC22q8Kgb0GEbx9tpvTZT4g",
    },
    {
      id: "ln2",
      author: "Waste Wise Humanitarian Initiative (WHI)",
      handle: "Waste Wise Humanitarian Initiative",
      avatar: "ceo.jpeg",
      content:
        "The D-Day is here - the day when the world... View the full post on LinkedIn: A milestone moment for WHI's advocacy work, bringing environmental responsibility and youth empowerment into sharper focus.",
      label: "Impact story",
      likes: 9,
      comments: 5,
      shares: 1,
      url: "https://www.linkedin.com/posts/waste-wise-humanitarian-initiative-whi_the-d-day-is-here-the-day-when-the-world-activity-7468585438249930752-Svfs?utm_source=share&utm_medium=member_android&rcm=ACoAAFXklfgBxgexAC22q8Kgb0GEbx9tpvTZT4g",
    },
  ];

  const socialStats = [
    { label: "Updates", value: "2" },
    { label: "Engagements", value: "40" },
    { label: "Platform", value: "LinkedIn" },
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
    <section
      id='social-feed'
      className=' bg-foreground text-background py-16 md:py-24'
    >
      <div className='container'>
        <motion.div
          className='grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className='lg:sticky lg:top-28'>
            <motion.span
              className='mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary'
              variants={itemVariants}
            >
              Our Social Impact
            </motion.span>
            <motion.h2
              className='max-w-xl text-3xl font-display font-bold leading-tight text-white md:text-5xl'
              variants={itemVariants}
            >
              Our Social Impact
            </motion.h2>
            <motion.p
              className='mt-5 max-w-xl text-base leading-8 text-foreground/70 md:text-lg'
              variants={itemVariants}
            >
              Follow WHI's community cleanups, awareness moments, and youth
              empowerment updates from our official LinkedIn activity.
            </motion.p>

            <motion.div
              className='mt-8 grid grid-cols-3 overflow-hidden rounded-lg border border-primary/15 bg-white shadow-sm'
              variants={itemVariants}
            >
              {socialStats.map((stat) => (
                <div
                  key={stat.label}
                  className='border-r border-primary/10 px-3 py-4 last:border-r-0'
                >
                  <p className='text-lg font-display font-bold text-black/80'>
                    {stat.value}
                  </p>
                  <p className='mt-1 text-xs font-semibold text-black/80'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.a
              href='https://www.linkedin.com/company/waste-wise-humanitarian-initiative-whi/'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 inline-flex items-center gap-2 rounded-lg border border-secondary/30 bg-white px-5 py-3 text-sm font-semibold text-secondary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md'
              variants={itemVariants}
            >
              Open LinkedIn
              <ExternalLink className='h-4 w-4' />
            </motion.a>
          </div>

          <motion.div
            className='grid gap-5 sm:grid-cols-2'
            variants={containerVariants}
          >
            {socialPosts.map((post) => (
              <motion.a
                key={post.id}
                href={post.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex min-h-[22rem] flex-col overflow-hidden rounded-lg border border-primary/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl'
                variants={itemVariants}
              >
                <div className='h-2 bg-white' />
                <div className='flex flex-1 flex-col p-6'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex min-w-0 items-center gap-3'>
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className='h-12 w-12 flex-shrink-0 rounded-lg border border-primary/20 object-cover'
                      />
                      <div className='min-w-0'>
                        <p className='line-clamp-1 text-sm font-bold text-black/80'>
                          {post.author}
                        </p>
                        <p className='line-clamp-1 text-xs font-medium text-black/80'>
                          {post.handle}
                        </p>
                      </div>
                    </div>
                    <span className='rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary'>
                      LinkedIn
                    </span>
                  </div>

                  <div className='mt-8 flex-1'>
                    <p className='text-xs font-semibold text-black/80 line-clamp-1'>
                      {post.label}
                    </p>
                    <p className='mt-3 text-base leading-7 text-black/80 line-clamp-5'>
                      {post.content}
                    </p>
                  </div>

                  <div className='mt-8 border-t border-primary/10 pt-4'>
                    <div className='flex items-center justify-between gap-4 text-sm text-foreground/60'>
                      <div className='flex items-center gap-4'>
                        <span className='inline-flex items-center gap-1.5'>
                          <Heart className='h-4 w-4 text-primary' />
                          {post.likes}
                        </span>
                        <span className='inline-flex items-center gap-1.5'>
                          <MessageCircle className='h-4 w-4 text-primary' />
                          {post.comments}
                        </span>
                        <span className='inline-flex items-center gap-1.5'>
                          <Share2 className='h-4 w-4 text-primary' />
                          {post.shares}
                        </span>
                      </div>
                      <span className='inline-flex items-center gap-1 font-semibold text-secondary transition-transform duration-300 group-hover:translate-x-1'>
                        View
                        <ArrowRight className='h-4 w-4' />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

