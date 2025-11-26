# Getting Started

This guide will help you get your portfolio up and running in minutes.

## 1️⃣ Quick Start (5 minutes)

### Terminal 1 - Backend

```powershell
cd backend
npm install
npm run dev
```

### Terminal 2 - Frontend

```powershell
cd frontend
npm install
npm run dev
```

Then open: **http://localhost:5173**

---

## 2️⃣ Customization

### Update Your Info

Edit `backend/routes/portfolio.js`:

```javascript
const portfolioData = {
  about: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
    image: "https://your-image-url.com/image.jpg",
  },
  // ... update projects, skills, experience
};
```

### Update Header/Footer

Edit component files in `frontend/src/components/`:

- `Header.jsx` - Navigation
- `Footer.jsx` - Contact info
- `Hero.jsx` - Hero text
- `About.jsx` - About section

---

## 3️⃣ Features Walkthrough

### Hero Section

- Welcome banner with CTA buttons
- Smooth animations
- Responsive design

### About Section

- Profile image
- Bio and title
- Stats cards (projects, years, clients)

### Skills Section

- Skill categories
- Progress bars
- Dynamic data from API

### Projects Section

- Project grid
- Technology tags
- Links to projects

### Contact Section

- Contact form with validation
- Contact info cards
- API integration

---

## 4️⃣ API Usage

### Get Portfolio Data

```javascript
fetch("http://localhost:5000/api/portfolio")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Submit Contact Form

```javascript
fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com",
    message: "Hello!",
  }),
});
```

---

## 5️⃣ Styling Guide

### Tailwind Classes

All components use Tailwind CSS utility classes:

```jsx
// Colors
<div className="bg-primary text-white">  {/* Primary color */}
<div className="bg-secondary text-white"> {/* Secondary color */}
<div className="text-gray-700">          {/* Gray text */}

// Layout
<div className="max-w-7xl mx-auto">      {/* Container */}
<div className="grid grid-cols-3">       {/* 3-column grid */}
<div className="flex gap-4">             {/* Flexbox */}

// Responsive
<div className="md:grid-cols-2">         {/* 2 cols on medium+ */}
<div className="hidden md:flex">         {/* Hide on mobile */}
```

### Custom Colors

Edit `frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#667eea',      // Change primary color
      secondary: '#764ba2',    // Change secondary color
    },
  },
}
```

---

## 6️⃣ Adding More Projects

In `backend/routes/portfolio.js`:

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Description...",
    technologies: ["React", "Node.js"],
    link: "https://github.com/...",
    image: "https://...",
  },
  // Add more projects here
];
```

---

## 7️⃣ Enable Email Notifications

### Gmail Setup

1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Update `backend/.env`:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

4. Restart backend server

---

## 8️⃣ Deploy to Production

### Deploy Frontend (Vercel)

```bash
npm run build
# Connect your git repo to Vercel dashboard
```

### Deploy Backend (Railway/Heroku)

```bash
# Add to production environment
PORT=8000
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
```

---

## 9️⃣ File Structure Quick Reference

```
Portfolio/
├── backend/
│   ├── routes/
│   │   ├── contact.js     ← Contact form API
│   │   └── portfolio.js   ← Portfolio data (UPDATE THIS!)
│   ├── server.js          ← Main server
│   ├── .env              ← Configuration
│   └── package.json      ← Dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/   ← Update these for your site
│   │   ├── App.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
│
└── README.md & INSTALLATION.md
```

---

## 🔟 Troubleshooting

| Issue                   | Solution                        |
| ----------------------- | ------------------------------- |
| Port 5000 in use        | Change PORT in `.env`           |
| Components not updating | Restart dev server              |
| API not responding      | Check backend is running        |
| CORS error              | Verify `FRONTEND_URL` in `.env` |
| Tailwind not working    | Restart dev server              |

---

## 📚 Next Steps

1. ✅ Install dependencies
2. ✅ Run both servers
3. ⏭️ Update `portfolio.js` with your data
4. ⏭️ Customize components
5. ⏭️ Add your projects
6. ⏭️ Configure email
7. ⏭️ Deploy!

---

**Need help?** Check the main README.md and component files for more details.

Happy building! 🚀
