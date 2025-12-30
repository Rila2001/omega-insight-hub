import { useState } from "react";
import BlogCard from "./BlogCard";
import CategoryFilter from "./CategoryFilter";
import blogClinicalTrials from "@/assets/blog-clinical-trials.jpg";
import blogOncology from "@/assets/blog-oncology.jpg";
import blogRcm from "@/assets/blog-rcm.jpg";
import blogAiCyber from "@/assets/blog-ai-cyber.jpg";
import blogPayer from "@/assets/blog-payer.jpg";

const categories = ["All", "Clinical", "Technology", "Finance", "Operations"];

const blogPosts = [
  {
    title: "The Future of Clinical Trials: AI-Driven Patient Matching",
    excerpt: "Exploring how artificial intelligence is revolutionizing patient recruitment and retention in clinical research.",
    author: "Sarah Chen, PhD",
    category: "Clinical",
    image: blogClinicalTrials,
    date: "Dec 2024",
  },
  {
    title: "Precision Oncology: Navigating the New Frontier",
    excerpt: "Understanding the latest developments in targeted therapies and personalized cancer treatment approaches.",
    author: "Michael Roberts, MD",
    category: "Clinical",
    image: blogOncology,
    date: "Nov 2024",
  },
  {
    title: "Revenue Cycle Optimization in Value-Based Care",
    excerpt: "Strategies for healthcare organizations transitioning from fee-for-service to value-based payment models.",
    author: "Jennifer Martinez",
    category: "Finance",
    image: blogRcm,
    date: "Nov 2024",
  },
  {
    title: "AI & Cybersecurity: Protecting Healthcare Data",
    excerpt: "Best practices for implementing robust security measures while leveraging AI capabilities.",
    author: "David Kim",
    category: "Technology",
    image: blogAiCyber,
    date: "Oct 2024",
  },
  {
    title: "Payer-Provider Alignment: Building Sustainable Partnerships",
    excerpt: "How collaborative relationships between payers and providers improve outcomes and reduce costs.",
    author: "Lisa Thompson",
    category: "Operations",
    image: blogPayer,
    date: "Oct 2024",
  },
];

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
              Latest Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
              Explore Our Articles
            </h2>
          </div>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.title} {...post} index={index} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-20">
          <button className="px-8 py-4 border border-foreground text-foreground text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;