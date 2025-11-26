import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-border-color py-16 px-4 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-5 -z-10"></div>

      <div className="container-wide max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-border-color">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="heading-sm gradient-text mb-3">Connect with me!</h3>
            <p className="text-text-secondary text-sm leading-relaxed"></p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-text-primary mb-6">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.facebook.com/jarreugse"
                className="px-4 py-2 rounded-lg bg-bg-card border border-border-color text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300 text-sm font-medium"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/mojojomss/"
                className="px-4 py-2 rounded-lg bg-bg-card border border-border-color text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300 text-sm font-medium"
              >
                Instagram
              </a>
              <a
                href="https://github.com/jarreugse09"
                className="px-4 py-2 rounded-lg bg-bg-card border border-border-color text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300 text-sm font-medium"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/jomarie-esguerra-a37918253/"
                className="px-4 py-2 rounded-lg bg-bg-card border border-border-color text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300 text-sm font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-text-secondary text-sm">
            © {currentYear} Jomarie Esguerra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
