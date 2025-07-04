"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", isExternal: true },
    { href: "/#about", label: "About", isExternal: true },
    { href: "/#qualification", label: "Experience", isExternal: true },
    { href: "/#skills", label: "Skills", isExternal: true },
    { href: "/#services", label: "Services", isExternal: true },
    // { href: "/#portfolio", label: "Portfolio", isExternal: true },
    { href: "/#testimonials", label: "Testimonials", isExternal: true },
    { href: "/blog", label: "Blog", isExternal: true },
    { href: "/contact", label: "Contact", isExternal: true }
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) {
      // For external links (different pages), let Next.js handle navigation
      setIsMobileMenuOpen(false);
      return;
    }
    
    // For internal hash links (same page), use smooth scroll
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Prevent hydration mismatch by using consistent initial state
  const headerClasses = mounted && isScrolled 
    ? 'bg-background/80 backdrop-blur-lg shadow-lg' 
    : 'bg-transparent';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl lg:text-3xl font-bold"
          >
            <span className="text-primary">Paul</span>
            <span className="text-foreground">Barnabas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ href, label, isExternal }) => (
              isExternal ? (
                <Link
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavigation(e, href, isExternal)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact">
              <Button>
                Hire Me
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t">
            <div className="py-6 space-y-4">
              {navLinks.map(({ href, label, isExternal }) => (
                isExternal ? (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-4"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavigation(e, href, isExternal)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-4"
                  >
                    {label}
                  </a>
                )
              ))}
              <div className="px-4 pt-4 space-y-3">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <Link href="/contact" className="w-full">
                  <Button 
                    className="w-full" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hire Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 