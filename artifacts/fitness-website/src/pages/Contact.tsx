import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import { Mail, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <motion.a 
            href="https://wa.me/201018518700" 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-card border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center gap-4 hover:border-[#25D366]/50 hover:shadow-[0_0_30px_rgba(37,211,102,0.15)] transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">WhatsApp</h3>
            <p className="text-muted-foreground text-sm">{t.contact.whatsapp}</p>
            <span className="mt-2 font-medium text-[#25D366]">+20 101 851 8700</span>
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/bigbad_dawy/" 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-card border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center gap-4 hover:border-[#E1306C]/50 hover:shadow-[0_0_30px_rgba(225,48,108,0.15)] transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] group-hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Instagram</h3>
            <p className="text-muted-foreground text-sm">{t.contact.instagram}</p>
            <span className="mt-2 font-medium text-[#E1306C]">@bigbad_dawy</span>
          </motion.a>

          <motion.a 
            href="mailto:contact@bigbaddawy.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-card border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center gap-4 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Email</h3>
            <p className="text-muted-foreground text-sm">{t.contact.email}</p>
            <span className="mt-2 font-medium text-primary">contact@bigbaddawy.com</span>
          </motion.a>

        </div>

      </div>
    </PageTransition>
  );
}
