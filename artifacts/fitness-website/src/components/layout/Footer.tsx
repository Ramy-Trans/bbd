import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-primary">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.jpg`} 
                  alt="Big Bad Dawy Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                BIG BAD DAWY
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Elite online fitness coaching designed for serious individuals ready to change their lives forever. No excuses, just results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">{t.nav.programs}</Link></li>
              <li><Link href="/transformations" className="hover:text-primary transition-colors">{t.nav.transformations}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">{t.nav.about}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li>
                <a href="https://wa.me/201018518700" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +20 101 851 8700
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                  @bigbaddawy
                </a>
              </li>
              <li>
                <a href="mailto:contact@bigbaddawy.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  contact@bigbaddawy.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} {t.footer.brand}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
