import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function Gallery() {
  const galleryImages: GalleryImage[] = [
    {
      id: 2,
      title: "Recycling Workshop",
      category: "Education",
      description: "Hands-on recycling training for community members",
      image: "/WhatsApp%20Image%202026-06-14%20at%2016.34.24.jpeg",
    },
    {
      id: 3,
      title: "Youth Initiative",
      category: "Youth",
      description: "Empowering youth through waste-to-wealth programs",
      image: "/WhatsApp%20Image%202026-06-14%20at%2016.34.25.jpeg",
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
    <section
      id='impact-details'
      className='bg-gradient-to-br from-secondary/10 via-brand-warm-white to-primary/10 py-16 md:py-24'
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
              Our Impact Gallery
            </h2>
          </motion.div>
          <motion.p
            className='max-w-2xl text-base leading-8 text-foreground/70 md:text-lg lg:justify-self-end'
            variants={itemVariants}
          >
             A closer look at the
            people, training, and outreach moments behind the initiative's
            environmental impact.
          </motion.p>
        </motion.div>

        <motion.div
          className='grid gap-5 lg:grid-cols-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((image, index) => (
            <motion.article
              key={image.id}
              className={`group overflow-hidden rounded-lg border border-primary/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
              variants={itemVariants}
            >
              <a href='/full-gallery' className='block'>
                <div className='relative aspect-[4/3] overflow-hidden md:aspect-[16/11]'>
                  <img
                    src={image.image}
                    alt={image.title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent' />
                  <span className='absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm'>
                    {image.category}
                  </span>
                </div>
                <div className='grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center'>
                  <div>
                    <h3 className='text-xl font-display font-bold text-foreground md:text-2xl'>
                      {image.title}
                    </h3>
                    <p className='mt-2 text-sm leading-7 text-foreground/70'>
                      {image.description}
                    </p>
                  </div>
                  <span className='inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white'>
                    <Eye className='h-5 w-5' />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className='mt-10 grid gap-5 rounded-lg border border-primary/20 bg-white/85 p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className='text-sm leading-7 text-foreground/70 md:text-base'
            variants={itemVariants}
          >
            Explore more of our community projects and environmental initiatives, including the training, outreach, and cleanup moments that show the work in motion
          </motion.p>
          <motion.a
            href='/full-gallery'
            className='inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md'
            variants={itemVariants}
          >
            View Full Gallery
            <ArrowRight className='h-4 w-4' />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


