import React, { useEffect, useState } from "react";
import { apiClient } from "../api/client";

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const data = await apiClient.get("/portfolio/about");
      setAbout(data);
    } catch (error) {
      console.error("Failed to fetch about:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-text-secondary">Loading...</div>
    );
  }

  return (
    <section id="about" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="container-wide max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="heading-md text-text-primary mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 -z-10"></div>
              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-primary/20 shadow-xl hover:shadow-glow-primary transition-all duration-300">
                <img
                  src={about?.image || "https://via.placeholder.com/200"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="heading-sm text-text-primary mb-2">
                {about?.name || "Jomarie Esguerra"}
              </h3>
              <p className="text-lg text-primary font-semibold tracking-wide mb-6">
                {about?.title || "Fullstack Developer"}
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                {about?.bio ||
                  "I'm a developer who loves turning ideas into interactive, high-performance web experiences. I focus on clean, maintainable code while crafting interfaces that are both visually striking and easy to use. My sweet spot lies where design meets engineering, creating apps that feel effortless for users."}
              </p>
            </div>

            {/* Stats Grid
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-color">
              <div className="group bg-bg-card rounded-lg p-4 hover:bg-bg-hover transition-all duration-300 border border-border-color hover:border-primary/30 cursor-default">
                <p className="heading-sm gradient-text mb-1">50+</p>
                <p className="text-text-secondary text-sm font-medium">
                  Projects
                </p>
              </div>
              <div className="group bg-bg-card rounded-lg p-4 hover:bg-bg-hover transition-all duration-300 border border-border-color hover:border-primary/30 cursor-default">
                <p className="heading-sm gradient-text mb-1">5+</p>
                <p className="text-text-secondary text-sm font-medium">Years</p>
              </div>
              <div className="group bg-bg-card rounded-lg p-4 hover:bg-bg-hover transition-all duration-300 border border-border-color hover:border-primary/30 cursor-default">
                <p className="heading-sm gradient-text mb-1">100+</p>
                <p className="text-text-secondary text-sm font-medium">
                  Clients
                </p>
              </div>
            </div> */}

            <button className="btn btn-primary mt-8">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}
