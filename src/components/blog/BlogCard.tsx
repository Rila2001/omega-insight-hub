import { ArrowRight, Clock, User } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  image: string;
  readTime?: string;
}

const BlogCard = ({ title, excerpt, author, category, image, readTime = "5 min read" }: BlogCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-card-foreground leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <User size={14} />
              {author}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {readTime}
            </span>
          </div>
          <ArrowRight 
            size={18} 
            className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
          />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
