import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogCdi from "@/assets/blog-cdi.jpg";

const FeaturedPost = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden card-shadow group">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={blogCdi}
                alt="Debunking the Top 5 CDI Myths"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 featured-overlay lg:hidden" />
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-12 lg:p-16 bg-card lg:featured-overlay flex flex-col justify-center">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-4">
                Featured Blog
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground lg:text-primary-foreground leading-tight mb-4">
                Debunking the Top 5 CDI Myths: How to Improve Patient Outcomes and Optimize Reimbursement
              </h2>
              <p className="text-muted-foreground lg:text-primary-foreground/80 leading-relaxed mb-6">
                By Dave Friedenson, MD, FACEP, Chief Medical Officer — Clinical documentation is 
                undeniably the foundation of quality patient care and accurate reimbursement. 
                Yet persistent myths continue to hinder progress.
              </p>
              <div>
                <Button variant="hero" className="lg:bg-primary-foreground lg:text-primary group/btn">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
