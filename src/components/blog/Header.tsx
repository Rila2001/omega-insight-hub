import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Insights", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 border-b border-border">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-foreground rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-background font-serif text-xl font-bold">Ω</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-semibold text-foreground tracking-tight">
                Omega
              </span>
              <span className="text-xs text-muted-foreground block -mt-1 tracking-widest uppercase">
                Healthcare
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 premium-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 transition-all duration-300"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-serif text-foreground hover:text-muted-foreground transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm w-fit mt-4"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;