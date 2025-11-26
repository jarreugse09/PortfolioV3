import React, { useState } from "react";

export default function Skills() {
  // Skill list with image file references
  const skillsList = [
    {
      name: "JavaScript",
      icon: "javascript.png",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Node.js",
      icon: "nodejs.png",
      color: "from-green-400 to-green-600",
    },
    {
      name: "TypeScript",
      icon: "typescript.png",
      color: "from-blue-400 to-blue-600",
    },
    // { name: "Next.js", icon: "nextjs.png", color: "from-gray-400 to-gray-600" },
    { name: "React", icon: "react.png", color: "from-cyan-400 to-cyan-600" },
    {
      name: "Tailwind CSS",
      icon: "tailwindcss.png",
      color: "from-cyan-400 to-blue-600",
    },
    { name: "CSS", icon: "css.png", color: "from-blue-400 to-blue-600" },
    {
      name: "Python",
      icon: "python.png",
      color: "from-blue-400 to-yellow-600",
    },
    { name: "SQL", icon: "sql.png", color: "from-orange-400 to-red-600" },

    {
      name: "MongoDB",
      icon: "mongodb.png",
      color: "from-green-400 to-emerald-600",
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="container-wide max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="heading-md text-text-primary mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Card */}
              <div className="h-40 bg-bg-card border border-border-color rounded-xl p-6 flex flex-col items-center justify-center hover:border-primary/40 hover:bg-bg-hover hover:shadow-glow-primary transition-all duration-300 cursor-pointer">
                {/* Logo Icon */}
                <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  <img
                    src={`/skills-icons/${skill.icon}`}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Skill Name */}
                <p className="text-sm font-semibold text-text-primary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 px-2">
                  {skill.name}
                </p>
              </div>

              {/* Animated Border Glow on Hover */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r ${skill.color} p-0.5`}
                style={{
                  zIndex: -1,
                  filter: "blur(8px)",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies spanning full-stack
            development, from frontend frameworks to backend databases.
          </p>
        </div>
      </div>
    </section>
  );
}
