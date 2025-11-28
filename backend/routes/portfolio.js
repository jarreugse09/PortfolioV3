import express from "express";

const router = express.Router();
// Mock portfolio data
const portfolioData = {
  about: {
    name: "Jomarie Esguerra",
    title: "Fullstack Developer",
    bio: "I’m a developer who loves turning ideas into interactive, high-performance web experiences. I focus on clean, maintainable code while crafting interfaces that are both visually striking and easy to use. My sweet spot lies where design meets engineering, creating apps that feel effortless for users.",
    image: "/my-pic/joms.jpg",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Tailwind CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vite", "Webpack"] },
  ],
  projects: [
    {
      id: 1,
      title: "Mini Social Media",
      description:
        "A lightweight social media platform. The application supports role-based permissions, JWT authentication, post interactions (likes, dislikes, comments), image uploads, and a responsive frontend.",
      technologies: ["Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
      link: "https://github.com/jarreugse09/Mini-Social-Media",
      image: "/project-pic/mini-social-media.png",
    },
    {
      id: 2,
      title: "Bareface / Hideface Detection",
      description:
        "areface / Hideface Detection is an AI-powered real-time system that identifies individuals not wearing masks properly or hiding their faces, helping enhance security and awareness in public spaces.",
      technologies: ["Python", "CSS", "JS", "YoloV8"],
      link: "c:UsersjarreOneDrivePicturesScreenshotsScreenshot 2025-11-28 143911.png",
      image: "/project-pic/bareface-hideface-detection.png",
    },
    {
      id: 3,
      title: "Personal Chatbot",
      description: "Real-time weather tracking application",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      link: "https://github.com",
      image: "https://via.placeholder.com/300x200",
    },
  ],
  experience: [
    {
      id: 1,
      company: "Tech Company",
      position: "Senior Developer",
      duration: "2022 - Present",
      description: "Leading development of full-stack applications",
    },
    {
      id: 2,
      company: "Web Agency",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Built responsive web applications for various clients",
    },
  ],
};

// GET - Portfolio data
router.get("/", (req, res) => {
  res.json(portfolioData);
});

// GET - About info
router.get("/about", (req, res) => {
  res.json(portfolioData.about);
});

// GET - Skills
router.get("/skills", (req, res) => {
  res.json(portfolioData.skills);
});

// GET - Projects
router.get("/projects", (req, res) => {
  res.json(portfolioData.projects);
});

// GET - Single project
router.get("/projects/:id", (req, res) => {
  const project = portfolioData.projects.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.json(project);
});

// GET - Experience
router.get("/experience", (req, res) => {
  res.json(portfolioData.experience);
});

export default router;
