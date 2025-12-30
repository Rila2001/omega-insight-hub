import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
          alt="Healthcare professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in">
            <div className="h-px w-12 bg-primary-foreground/40" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary-foreground/70">
              Insights & Perspectives
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-semibold text-primary-foreground leading-[0.95] mb-8 opacity-0 animate-fade-in-up animation-delay-100">
            Transforming
            <br />
            <span className="italic font-normal">Healthcare</span>
            <br />
            Intelligence
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed mb-12 opacity-0 animate-fade-in animation-delay-300">
            Expert analysis and strategic insights shaping the future of healthcare management and clinical excellence.
          </p>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-4 opacity-0 animate-fade-in animation-delay-500">
            <div className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-5 h-5 text-primary-foreground/70" />
            </div>
            <span className="text-sm text-primary-foreground/50 tracking-wide">Scroll to explore</span>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-20 right-6 lg:right-12 hidden lg:block">
          <div className="flex flex-col items-end gap-1 opacity-0 animate-fade-in animation-delay-400">
            <span className="text-6xl font-serif font-semibold text-primary-foreground">50+</span>
            <span className="text-sm text-primary-foreground/60 tracking-wide">Articles Published</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;