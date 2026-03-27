import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { t, lang } = useLanguage();

  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Fat Loss Without Starving",
      category: "Nutrition",
      readTime: "5 min read",
      image: "transform4.jpg",
      excerpt: "Learn how to optimize your metabolism and drop body fat while still enjoying the foods you love.",
    },
    {
      id: 2,
      title: "Why Progressive Overload is King for Muscle Growth",
      category: "Training",
      readTime: "4 min read",
      image: "transform5.jpg",
      excerpt: "Stop changing your workouts every week. Discover why sticking to the basics and getting stronger is the key.",
    },
    {
      id: 3,
      title: "Mastering the Mindset of a Champion",
      category: "Mindset",
      readTime: "7 min read",
      image: "promo.jpg",
      excerpt: "Physical transformation starts in the mind. How to build unbreakable discipline and resilience.",
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            BBD {t.nav.blog}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights on training, nutrition, and mindset to fuel your journey.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-300 group cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}${post.image}`} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm mt-auto">
                  Read Article <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
