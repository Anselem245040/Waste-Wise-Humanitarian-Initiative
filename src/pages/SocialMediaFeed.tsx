import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  Music2,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

/**
 * Premium Social Media Feed Component
 *
 * Design System: Eco-Tech Premium
 * - Aggregates posts from Instagram, Twitter, Facebook, LinkedIn, TikTok
 * - Category filtering by platform
 * - Smooth animations and hover effects
 * - Responsive grid layout
 * - Real-time engagement metrics
 */

interface SocialPost {
  id: string;
  platform: "instagram" | "twitter" | "facebook" | "linkedin" | "tiktok";
  author: string;
  handle: string;
  avatar: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  url: string;
}

export default function SocialMediaFeed() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "instagram" | "twitter" | "facebook" | "linkedin" | "tiktok"
  >("all");

  // Replaced dummy posts with two real LinkedIn post links provided by the user
  const socialPosts: SocialPost[] = [
    {
      id: "ln1",
      platform: "linkedin",
      author: "Waste Wise Humanitarian Initiative (WHI)",
      handle: "Waste Wise Humanitarian Initiative",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content:
        "The world is evolving — tomorrow there's activity. View the full post on LinkedIn:",
      timestamp: "",
      likes: 0,
      comments: 0,
      shares: 0,
      url: "https://www.linkedin.com/posts/waste-wise-humanitarian-initiative-whi_the-world-is-evolving-tomorrow-theres-activity-7468228687868645376-HIF0?utm_source=share&utm_medium=member_android&rcm=ACoAAFXklfgBxgexAC22q8Kgb0GEbx9tpvTZT4g",
    },
    {
      id: "ln2",
      platform: "linkedin",
      author: "Waste Wise Humanitarian Initiative (WHI)",
      handle: "Waste Wise Humanitarian Initiative",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content:
        "The D-Day is here — the day when the world... View the full post on LinkedIn:",
      timestamp: "",
      likes: 0,
      comments: 0,
      shares: 0,
      url: "https://www.linkedin.com/posts/waste-wise-humanitarian-initiative-whi_the-d-day-is-here-the-day-when-the-world-activity-7468585438249930752-Svfs?utm_source=share&utm_medium=member_android&rcm=ACoAAFXklfgBxgexAC22q8Kgb0GEbx9tpvTZT4g",
    },
  ];

  const filteredPosts =
    activeFilter === "all"
      ? socialPosts
      : socialPosts.filter((post) => post.platform === activeFilter);

  const platformColors: Record<
    string,
    { bg: string; icon: any; color: string }
  > = {
    instagram: {
      bg: "from-pink-500 to-rose-500",
      icon: ExternalLink,
      color: "text-pink-500",
    },
    twitter: {
      bg: "from-blue-400 to-blue-600",
      icon: ExternalLink,
      color: "text-blue-500",
    },
    facebook: {
      bg: "from-blue-600 to-blue-800",
      icon: ExternalLink,
      color: "text-blue-700",
    },
    linkedin: {
      bg: "from-blue-700 to-blue-900",
      icon: ExternalLink,
      color: "text-blue-800",
    },
    tiktok: { bg: "from-gray-900 to-black", icon: Music2, color: "text-black" },
  };

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

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id='social-feed'
      className='py-16 md:py-24 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5'
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
            Our Social Impact
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto'
            variants={itemVariants}
          >
            Follow our latest community cleanups, environmental tips, and impact
            stories across all platforms
          </motion.p>
        </motion.div>

        {/* Platform Filter Tabs */}
        <motion.div
          className='flex flex-wrap justify-center gap-3 mb-12'
          variants={filterVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            "all",
            "instagram",
            "twitter",
            "facebook",
            "linkedin",
            "tiktok",
          ].map((platform) => {
            const isActive = activeFilter === platform;
            const platformConfig =
              platformColors[platform as keyof typeof platformColors];
            const PlatformIcon = platformConfig?.icon;

            return (
              <motion.button
                key={platform}
                onClick={() => setActiveFilter(platform as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? `bg-gradient-to-r ${platformConfig?.bg} text-white shadow-lg scale-105`
                    : "bg-white/50 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/70"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {PlatformIcon && <PlatformIcon className='w-4 h-4' />}
                <span className='capitalize'>
                  {platform === "all" ? "All Posts" : platform}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Social Posts Grid */}
        <motion.div
          className='flex flex-wrap justify-center gap-8 max-w-5xl mx-auto w-full'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode='wait'>
            {filteredPosts.map((post) => {
              const platformConfig = platformColors[post.platform];
              const PlatformIcon = platformConfig.icon;

              return (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className='group w-full max-w-sm'
                >
                  <a
                    href={post.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block h-full'
                  >
                    <div className='bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:shadow-xl hover:border-white/40 transition-all duration-300 h-full flex flex-col group-hover:scale-105'>
                      {/* Platform Badge & Header */}
                      <div
                        className={`bg-gradient-to-r ${platformConfig.bg} p-4 flex flex-col items-center justify-center text-center gap-3 relative`}
                      >
                        <img
                          src={post.avatar}
                          alt={post.author}
                          className='w-12 h-12 rounded-full border-2 border-white/30 mx-auto'
                        />
                        <div className='flex flex-col items-center'>
                          <p className='text-white font-semibold text-sm text-center'>
                            {post.author}
                          </p>
                          <p className='text-white/80 text-xs text-center'>
                            {post.handle}
                          </p>
                        </div>
                        <PlatformIcon className='absolute top-4 right-4 w-5 h-5 text-white' />
                      </div>

                      {/* Post Image */}
                      {post.image && (
                        <div className='relative overflow-hidden bg-muted h-48'>
                          <img
                            src={post.image}
                            alt='Post'
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>
                      )}

                      {/* Post Content */}
                      <div className='p-4 flex-1 flex flex-col items-center justify-center text-center'>
                        <p className='text-foreground/80 text-sm leading-relaxed mb-3 line-clamp-3 text-center'>
                          {post.content}
                        </p>
                        <p className='text-xs text-foreground/50 mt-auto text-center'>
                          {post.timestamp}
                        </p>
                      </div>

                      {/* Engagement Metrics */}
                      <div className='px-4 py-3 border-t border-white/10 flex flex-col gap-3 items-center justify-center text-xs text-foreground/60 w-full'>
                        <div className='flex items-center justify-center gap-6 w-full'>
                          <motion.div
                            className='flex items-center justify-center gap-1 hover:text-primary transition-colors cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                          >
                            <Heart className='w-4 h-4' />
                            <span>{(post.likes / 1000).toFixed(1)}K</span>
                          </motion.div>
                          <motion.div
                            className='flex items-center justify-center gap-1 hover:text-primary transition-colors cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                          >
                            <MessageCircle className='w-4 h-4' />
                            <span>{(post.comments / 100).toFixed(0)}K</span>
                          </motion.div>
                          <motion.div
                            className='flex items-center justify-center gap-1 hover:text-primary transition-colors cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                          >
                            <Share2 className='w-4 h-4' />
                            <span>{(post.shares / 100).toFixed(0)}K</span>
                          </motion.div>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className='flex items-center justify-center gap-1 text-primary font-semibold'
                        >
                          <span>View</span>
                          <ExternalLink className='w-3 h-3' />
                        </motion.div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className='mt-16 text-center'
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className='text-foreground/70 mb-6'>
            Follow us on social media for daily updates, tips, and community
            stories
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            {Object.entries(platformColors).map(([platform, config]) => {
              const Icon = config.icon;
              return (
                <motion.a
                  key={platform}
                  href={`https://${platform}.com/whi_nigeria`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-3 rounded-full bg-gradient-to-br ${config.bg} text-white hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className='w-6 h-6' />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
