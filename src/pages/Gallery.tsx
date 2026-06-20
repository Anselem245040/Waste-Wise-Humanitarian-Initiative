import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

/**
 * Premium Gallery Carousel Component
 *
 * Design System: Eco-Tech Premium
 * - Horizontal slide carousel with Embla
 * - Smooth transitions and navigation
 * - Touch-friendly on mobile
 * - High-quality Nigerian waste management imagery
 */

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);

  // Use images added to the public folder: gallery images
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

  const onSelect = () => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !isAutoplayActive) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [emblaApi, isAutoplayActive]);

  const handleMouseEnter = () => setIsAutoplayActive(false);
  const handleMouseLeave = () => setIsAutoplayActive(true);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, isAutoplayActive]);

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
      className='py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5'
    >
      <div className='container'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className='text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4'
            variants={itemVariants}
          >
            Our Impact Gallery
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto'
            variants={itemVariants}
          >
            Explore our community cleanup projects, facilities, and
            environmental initiatives across Nigeria
          </motion.p>
        </motion.div>

        {/* Carousel Container (Mobile Only) */}
        <motion.div
          className='relative block md:hidden'
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Embla Carousel */}
          <div className='overflow-hidden rounded-2xl' ref={emblaRef}>
            <div className='flex'>
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className='flex-[0_0_100%] min-w-0 m-auto'
                >
                  <motion.div
                    className='relative group h-96 overflow-hidden rounded-2xl mx-2 text-center flex flex-col items-center justify-center'
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image */}
                    <img
                      src={image.image}
                      alt={image.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />

                    {/* Overlay Gradient */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* Category Badge */}
                    <div className='absolute top-4 left-1/2 -translate-x-1/2 z-20'>
                      <span className='px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold backdrop-blur-md'>
                        {image.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className='absolute inset-0 flex flex-col justify-center items-center p-6 z-10 text-center'>
                      <motion.div
                        className='flex flex-col items-center justify-center text-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className='text-white text-xl font-display font-bold mb-2'>
                          {image.title}
                        </h3>
                        <p className='text-white/90 text-sm mb-4 line-clamp-2'>
                          {image.description}
                        </p>
                        <a
                          href='/full-gallery'
                          className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg transition-all duration-300'
                        >
                          <Eye className='w-4 h-4' />
                          <span>View Details</span>
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-2 rounded-full bg-primary/90 text-white hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className='w-5 h-5' />
          </motion.button>

          <motion.button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-2 rounded-full bg-primary/90 text-white hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className='w-5 h-5' />
          </motion.button>

          {/* Dot Indicators */}
          <div className='flex justify-center gap-2 mt-6'>
            {scrollSnaps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className='text-center mt-4 text-foreground/60 text-sm font-medium'>
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </motion.div>

        {/* Grid Container (Desktop Only) */}
        <motion.div
          className='hidden md:flex flex-row justify-center gap-8 max-w-4xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className='w-full md:w-1/2 max-w-sm'
            >
              <motion.div
                className='relative group h-[500px] overflow-hidden rounded-2xl text-center flex flex-col items-center justify-center'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img
                  src={image.image}
                  alt={image.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />

                {/* Overlay Gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Category Badge */}
                <div className='absolute top-4 left-1/2 -translate-x-1/2 z-20'>
                  <span className='px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold backdrop-blur-md'>
                    {image.category}
                  </span>
                </div>

                {/* Content */}
                <div className='absolute inset-0 flex flex-col justify-center items-center p-6 z-10 text-center'>
                  <motion.div
                    className='flex flex-col items-center justify-center text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className='text-white text-2xl font-display font-bold mb-2'>
                      {image.title}
                    </h3>
                    <p className='text-white/90 text-sm md:text-base mb-4 line-clamp-2'>
                      {image.description}
                    </p>
                    <a
                      href='/full-gallery'
                      className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg transition-all duration-300'
                    >
                      <Eye className='w-4 h-4' />
                      <span>View Details</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className='text-center mt-12'
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className='text-foreground/70 mb-6'>
            Explore more of our community projects and environmental initiatives
          </p>
          <a
            href='/full-gallery'
            className='px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:shadow-lg transition-all duration-300'
          >
            View Full Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
