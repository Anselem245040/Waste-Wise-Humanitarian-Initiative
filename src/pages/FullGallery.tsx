import { motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * Full Gallery Page - Complete Project Showcase
 * 
 * Design System: Eco-Tech Premium
 * - Masonry grid layout
 * - Lightbox modal for full-size images
 * - Smooth animations
 * - Responsive design
 */

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  span?: string;
}

export default function FullGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Community Cleanup Drive",
      category: "Community",
      description: "Mobilizing 500+ volunteers for neighborhood waste collection and environmental restoration",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&h=600&fit=crop",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "Recycling Facility",
      category: "Infrastructure",
      description: "State-of-the-art waste processing and recycling center equipped with modern technology",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Environmental Education",
      category: "Education",
      description: "School workshops on sustainable waste management and environmental awareness",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Plastic Recovery Initiative",
      category: "Innovation",
      description: "Collecting and processing plastic waste into valuable resources and products",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Youth Empowerment Program",
      category: "Community",
      description: "Training young professionals in waste management and environmental sustainability",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop",
      span: "md:col-span-2",
    },
    {
      id: 6,
      title: "Corporate Partnership",
      category: "Partnership",
      description: "Collaborating with leading companies to implement sustainable waste solutions",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&h=600&fit=crop",
    },
    {
      id: 7,
      title: "Beach Cleanup Initiative",
      category: "Community",
      description: "Removing plastic waste from coastal areas to protect marine ecosystems",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop",
    },
    {
      id: 8,
      title: "Waste Sorting Station",
      category: "Infrastructure",
      description: "Advanced waste sorting facility using AI and automation technology",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&h=600&fit=crop",
    },
    {
      id: 9,
      title: "Community Awareness Campaign",
      category: "Education",
      description: "Public awareness campaigns promoting sustainable waste management practices",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 10,
      title: "Volunteer Training Session",
      category: "Community",
      description: "Training volunteers on proper waste handling and environmental best practices",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&h=600&fit=crop",
    },
    {
      id: 11,
      title: "Recycled Product Showcase",
      category: "Innovation",
      description: "Finished products created from recycled materials by our community partners",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop",
    },
    {
      id: 12,
      title: "Impact Measurement",
      category: "Partnership",
      description: "Documenting and measuring the environmental impact of our initiatives",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&h=600&fit=crop",
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10">
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 text-primary hover:text-primary/80 cursor-pointer mb-6 w-fit"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </motion.div>
          </Link>

          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Project <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-foreground/60">
              Explore our comprehensive collection of community cleanup projects, facilities, and environmental initiatives across Nigeria.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="container py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span || ""}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.image}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white">
                  <p className="text-sm font-medium text-accent mb-2">{image.category}</p>
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-cover"
            />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <p className="text-accent text-sm font-medium mb-2">{selectedImage.category}</p>
              <h2 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <div className="container py-16">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Share Your Story
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Have photos from a cleanup event or environmental initiative? We'd love to feature your story in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Photos
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
