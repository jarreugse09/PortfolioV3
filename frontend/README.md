# Portfolio Frontend

Modern React + Vite portfolio website with Tailwind CSS

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects grid
│   ├── ProjectCard.jsx # Individual project card
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── api/
│   └── client.js       # API client
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Tailwind & custom styles
```

## Features

- ✨ Modern, responsive design
- 🎨 Tailwind CSS styling
- ⚡ Fast with Vite
- 🔗 REST API integration
- 📱 Mobile-friendly
- ♿ Accessible components
- 🎭 Smooth animations
- 📧 Contact form with validation

## Configuration

API base URL can be configured via `VITE_API_URL` environment variable.
