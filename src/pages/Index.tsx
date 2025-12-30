import Header from "@/components/blog/Header";
import HeroSection from "@/components/blog/HeroSection";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import Newsletter from "@/components/blog/Newsletter";
import Footer from "@/components/blog/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedPost />
        <BlogGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
