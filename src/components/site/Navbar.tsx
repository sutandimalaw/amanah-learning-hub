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
    // close on route change
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={cn('fixed top-0 w-full z-50 transition-all duration-300', isScrolled ? 'navbar-blur shadow-md' : 'bg-transparent')}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Y</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Yan Consulting</span>
              <span className="text-xs text-muted-foreground -mt-1">Amanah Learning Partner</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn('text-sm font-medium transition-colors hover:text-primary', location.pathname === item.href ? 'text-primary' : 'text-foreground')}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/kontak">
              <Button className="btn-hero">Hubungi Kami</Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen((v) => !v)} className="text-foreground">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn('block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-accent', location.pathname === item.href ? 'text-primary bg-accent' : 'text-foreground')}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Link to="/kontak" className="block">
                  <Button className="btn-hero w-full">Hubungi Kami</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
