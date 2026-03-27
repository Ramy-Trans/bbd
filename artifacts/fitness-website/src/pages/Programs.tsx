import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Programs() {
  const { t } = useLanguage();

  const plans = [
    {
      key: 'basic',
      data: t.programs.basic,
      isPopular: false,
    },
    {
      key: 'pro',
      data: t.programs.pro,
      isPopular: true,
    },
    {
      key: 'elite',
      data: t.programs.elite,
      isPopular: false,
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            {t.programs.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.programs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-card to-background border-2 border-primary box-glow-gold shadow-2xl scale-105 z-10' 
                  : 'bg-card border border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-black" /> {t.programs.popular}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.data.name}</h3>
                <div className="flex items-center justify-center items-baseline gap-1">
                  <span className="text-4xl font-black text-primary">{plan.data.price}</span>
                  <span className="text-muted-foreground font-medium">{plan.data.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.data.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={`/apply?plan=${plan.key}`}
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-primary text-black hover:bg-yellow-400 shadow-lg' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {t.programs.select}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
