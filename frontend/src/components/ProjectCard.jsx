import React from "react";

export default function ProjectCard({ project, index }) {
  return (
    <div
      className="group bg-bg-card border border-border-color rounded-xl overflow-hidden hover:border-primary/40 hover:bg-bg-hover transition-all duration-300 cursor-pointer hover:shadow-glow-primary animate-scale-in flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-56 bg-bg-hover">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-bg-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-bg-hover border border-primary/20 text-primary rounded-lg text-xs font-semibold hover:bg-primary/10 transition-all duration-300 group-hover:border-primary/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary font-semibold hover:text-accent transition-all duration-300 group-hover:gap-3 gap-2 self-start"
        >
          View Project
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
