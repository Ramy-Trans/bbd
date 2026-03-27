import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}coach.jpg`} 
                alt="Coach Big Bad Dawy" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-wider">{t.about.subtitle}</h2>
                <p className="text-primary font-medium">Head Coach & Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
              {t.about.title}
            </h1>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
              No Excuses. <br /> Just <span className="text-primary">Results.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-medium">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-2xl border border-white/5">
                <div className="text-3xl font-black text-white mb-2">ISSA</div>
                <div className="text-sm text-primary font-medium">Certified Personal Trainer</div>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-white/5">
                <div className="text-3xl font-black text-white mb-2">PN L1</div>
                <div className="text-sm text-primary font-medium">Nutrition Coach</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Image Section */}
        <div className="relative rounded-3xl overflow-hidden h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0">
             <img 
                src={`${import.meta.env.BASE_URL}coach2.jpg`} 
                alt="Coach Training" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic leading-tight">
              "The discipline you build in the gym translates to every other aspect of your life."
            </h2>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
