import { ArrowUpRight } from "lucide-react";
import blogCdi from "@/assets/blog-cdi.jpg";

const FeaturedPost = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Featured Article
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Featured Card */}
        <div className="group cursor-pointer">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
              <img
                src={blogCdi}
                alt="Clinical Documentation Improvement"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Category */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-background/95 backdrop-blur-sm text-xs font-medium tracking-wider uppercase rounded-sm">
                  Clinical Excellence
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              {/* Meta */}
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span>Dave Friedenson, MD</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span>December 2024</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6 group-hover:text-muted-foreground transition-colors duration-300">
                Debunking the Top 5 CDI Myths
              </h2>

              {/* Excerpt */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                How to improve patient outcomes and optimize reimbursement. Clinical documentation 
                is undeniably the foundation of quality patient care and accurate reimbursement—yet 
                persistent myths continue to hinder progress.
              </p>

              {/* Read More */}
              <div className="inline-flex items-center gap-3 text-foreground font-medium group/link">
                <span className="premium-link">Read Article</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;