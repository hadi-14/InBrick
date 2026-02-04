import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'For Businesses', href: '/business' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 overflow-hidden",
            )}>
              <img src="/logo.png" alt="InBricks Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className={cn(
              "text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-primary" : "text-white"
            )}>
              InBricks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative group",
                  isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white",
                  location.pathname === link.href && (isScrolled ? "text-primary" : "text-white")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                  isScrolled ? "bg-primary" : "bg-white"
                )} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant={isScrolled ? "accent" : "hero"} size="lg">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-base font-medium py-2 transition-colors duration-300",
                  location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="accent" size="lg" className="mt-4">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
