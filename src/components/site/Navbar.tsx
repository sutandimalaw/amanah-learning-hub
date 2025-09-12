import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Profil', href: '/profil' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'Kontak', href: '/kontak' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-500',
      isScrolled ? 'navbar-blur shadow-lg backdrop-blur-xl' : 'bg-transparent'
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-brand group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-2xl font-display">Y</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Yan Consulting
              </span>
              <span className="text-sm text-muted-foreground -mt-1">Amanah Learning Partner</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-base font-medium transition-all duration-300 relative group py-2',
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                )}
              >
                {item.name}
                <span 
                  className={cn(
                    'absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary rounded-full transition-all duration-300 group-hover:w-full',
                    location.pathname === item.href && 'w-full'
                  )}
                />
              </Link>
            ))}
            <Link to="/kontak">
              <Button className="btn-hero text-base px-8 py-3 rounded-xl shadow-brand hover:shadow-glow">
                Hubungi Kami
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="text-foreground hover:bg-primary/10 p-3 rounded-xl"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-effect rounded-2xl mt-4 mb-6 overflow-hidden animate-scale-in">
            <div className="p-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block px-6 py-4 text-lg font-medium rounded-xl transition-all duration-300',
                    location.pathname === item.href 
                      ? 'text-primary bg-gradient-primary/10 shadow-md' 
                      : 'text-foreground hover:bg-accent hover:text-primary'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/30">
                <Link to="/kontak" className="block">
                  <Button className="btn-hero w-full text-lg py-4 rounded-xl">
                    Hubungi Kami
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
