import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  image: string;
  date?: string;
  index?: number;
}

const BlogCard = ({ title, excerpt, author, category, image, date = "Dec 2024", index = 0 }: BlogCardProps) => {
  return (
    <article 
      className="group cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-sm aspect-[3/2] mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-500" />
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 bg-background/95 backdrop-blur-sm text-xs font-medium tracking-wider uppercase rounded-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
          <span>{author}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-semibold text-foreground leading-snug mb-3 group-hover:text-muted-foreground transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* Read More */}
        <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Read</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;