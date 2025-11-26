import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-bg-dark flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div
          className="absolute -bottom-8 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge with Gradient Border */}
          {/* <div
            className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 transition-colors duration-300 animate-slide-down"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Welcome to my portfolio
            </span>
          </div> */}

          {/* Main Heading */}
          <div
            className="space-y-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="heading-lg text-text-primary">
              Hi, I'm{" "}
              <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Jomarie Esguerra
              </span>
            </h1>

            {/* Role Description */}
            <p className="text-lg md:text-xl text-primary font-medium tracking-wide">
              Full Stack Developer & Creative Problem Solver
            </p>
          </div>

          {/* Description Paragraph */}
          <p
            className="heading-sm text-text-secondary max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Coding isn’t just work; it’s designing an experience users remember.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="btn btn-primary group relative">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="btn btn-outline">Get in Touch</button>
          </div>

          {/* Scroll Indicator */}
          <div
            className="pt-12 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <svg
              className="w-6 h-6 mx-auto text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-primary/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent/10 rounded-full"></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-primary/10 rounded-full"></div>
    </section>
  );
}
