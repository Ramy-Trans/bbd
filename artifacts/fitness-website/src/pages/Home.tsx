import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}promo.jpg`} 
            alt="Big Bad Dawy Training" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm backdrop-blur-sm"
          >
            Elite Online Coaching
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight uppercase tracking-tighter"
          >
            {t.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
              {t.hero.title2}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/apply"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {t.hero.cta}
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Link>
            <Link 
              href="/programs"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-bold text-lg hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
            >
              {t.hero.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-white/5 relative z-20 mt-16 mx-4 md:mx-auto max-w-6xl rounded-3xl shadow-2xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: "500+", label: t.stats.clients },
              { icon: Target, value: "5+", label: t.stats.experience },
              { icon: TrendingUp, value: "15kg", label: t.stats.loss },
              { icon: Activity, value: "95%", label: t.stats.success },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">{t.steps.title}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            
            {[
              { num: "01", title: t.steps.step1Title, desc: t.steps.step1Desc },
              { num: "02", title: t.steps.step2Title, desc: t.steps.step2Desc },
              { num: "03", title: t.steps.step3Title, desc: t.steps.step3Desc },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center text-2xl font-black text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300 box-glow-gold">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Preview */}
      <section className="py-32 bg-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">{t.testimonials.title}</h2>
              <p className="text-muted-foreground max-w-xl">Don't just take our word for it. See the results of clients who committed to the BBD method.</p>
            </div>
            <Link 
              href="/transformations"
              className="flex items-center gap-2 text-primary font-bold hover:text-yellow-400 transition-colors"
            >
              View All <ArrowRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <motion.div 
                key={num}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden aspect-[4/5] relative group"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}transform${num}.jpg`} 
                  alt="Transformation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-primary font-bold uppercase tracking-wider text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">Before & After</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
