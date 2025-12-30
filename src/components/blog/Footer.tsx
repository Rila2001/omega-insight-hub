import { Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    solutions: [
      { label: "Revenue Cycle", href: "#" },
      { label: "Clinical Services", href: "#" },
      { label: "Data Analytics", href: "#" },
      { label: "Technology", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Newsroom", href: "#" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Contact", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-foreground rounded-sm flex items-center justify-center">
                <span className="text-background font-serif text-xl font-bold">Ω</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold text-foreground tracking-tight">
                  Omega
                </span>
                <span className="text-xs text-muted-foreground block -mt-1 tracking-widest uppercase">
                  Healthcare
                </span>
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8">
              Transforming healthcare through intelligent solutions, 
              data-driven insights, and clinical excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wider uppercase">
              Solutions
            </h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Omega Healthcare. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;