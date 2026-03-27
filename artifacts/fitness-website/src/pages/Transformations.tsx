import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

export default function Transformations() {
  const { t } = useLanguage();

  // We have 9 transformation images in the prompt
  const images = Array.from({ length: 9 }, (_, i) => `transform${i + 1}.jpg`);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            {t.nav.transformations}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people. Real effort. Real results. Browse the gallery of clients who transformed their lives with Big Bad Dawy coaching.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${src}`} 
                alt={`Transformation ${index + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="w-8 h-1 bg-primary mb-3"></div>
                <h3 className="text-white font-bold text-lg">BBD Client</h3>
                <p className="text-gray-300 text-sm">Life changing results</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
