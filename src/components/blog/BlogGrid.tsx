import { useState } from "react";
import BlogCard from "./BlogCard";
import CategoryFilter from "./CategoryFilter";

// Import images
import blogClinicalTrials from "@/assets/blog-clinical-trials.jpg";
import blogOncology from "@/assets/blog-oncology.jpg";
import blogRcm from "@/assets/blog-rcm.jpg";
import blogAiCyber from "@/assets/blog-ai-cyber.jpg";
import blogPayer from "@/assets/blog-payer.jpg";
import blogCdi from "@/assets/blog-cdi.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Improving the Success of Clinical Trials with Effective RWD Management",
    excerpt: "Optimizing the efficacy of clinical trials via proficient management of real-world data, ensuring optimal insights for informed decision-making.",
    author: "Heather Grey",
    category: "Clinical Trials",
    image: blogClinicalTrials,
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Advancing Oncology Research through Real-World Data Curation",
    excerpt: "A collaborative effort presented at Memorial Sloan Kettering highlighting the importance of data curation in cancer research.",
    author: "Heather Grey",
    category: "Research",
    image: blogOncology,
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "RCM Trends to Watch in 2025: What Providers Need to Know",
    excerpt: "The financial landscape for healthcare providers continues to evolve — and not necessarily in favorable directions.",
    author: "Anurag Mehta",
    category: "RCM",
    image: blogRcm,
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "2025 Payer Trends: Navigating Complexity, Compliance, and AI Disruption",
    excerpt: "For payers, 2024 was a challenging year. Sweeping policy changes squeezed reimbursement, and rising costs demanded innovation.",
    author: "Chris Rigsby",
    category: "Payer Solutions",
    image: blogPayer,
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Revolutionizing Healthcare: Insights from HLTH 2024 on AI and Cybersecurity",
    excerpt: "The HLTH 2024 conference in Las Vegas brought together healthcare leaders to discuss the future of AI in medicine.",
    author: "Vijayashree Natarajan",
    category: "Technology",
    image: blogAiCyber,
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Denials Are Inevitable, but Actionable: Best Practices for Denial Management",
    excerpt: "Proactive approaches can help address the source of nearly 50 percent of denials through front-end improvements.",
    author: "Julius Raj Stephen",
    category: "RCM",
    image: blogCdi,
    readTime: "5 min read",
  },
];

const categories = ["All", "Clinical Trials", "Research", "RCM", "Payer Solutions", "Technology"];

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Latest Insights
            </h2>
            <p className="text-muted-foreground">
              Stay updated with our latest healthcare articles and industry analysis.
            </p>
          </div>
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
