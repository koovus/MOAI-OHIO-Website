import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-display font-bold text-2xl tracking-tighter text-foreground" data-testid="nav-logo">
              moai<span className="text-primary">ohio</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Work</a>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Insights</Link>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-xs hover:bg-primary/90 transition-colors" data-testid="nav-cta">
              Let's Talk
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-foreground focus:outline-none p-2" data-testid="nav-menu-toggle">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary">Services</a>
            <a href="#portfolio" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary">Work</a>
            <Link href="/blog" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary">Insights</Link>
            <a href="#about" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary">About</a>
            <a href="#contact" onClick={closeMenu} className="block px-3 py-2 text-base font-bold text-primary hover:bg-secondary">Let's Talk</a>
          </div>
        </div>
      )}
    </nav>
  );
}
