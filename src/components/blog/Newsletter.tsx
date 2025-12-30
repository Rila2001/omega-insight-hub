import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border border-background rounded-full" />
        <div className="absolute bottom-20 right-40 w-64 h-64 border border-background rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium tracking-widest uppercase text-background/50 mb-6 block">
              Newsletter
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              Stay ahead of
              <br />
              <span className="italic font-normal">the curve</span>
            </h2>
            <p className="text-lg text-background/70 leading-relaxed max-w-md">
              Get exclusive insights and expert analysis delivered to your inbox. 
              Join healthcare leaders who trust our perspectives.
            </p>
          </div>

          {/* Form */}
          <div className="lg:pl-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-background/30 py-4 text-lg text-background placeholder:text-background/40 focus:outline-none focus:border-background transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="group flex items-center gap-3 px-8 py-4 bg-background text-foreground font-medium rounded-sm hover:bg-background/90 transition-all duration-300"
              >
                Subscribe
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
            <p className="text-sm text-background/40 mt-6">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;