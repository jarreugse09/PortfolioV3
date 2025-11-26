# ⚡ Quick Commands Reference

## Copy-Paste Commands

### 🚀 FIRST TIME SETUP

#### Backend Setup (Copy & Paste All)

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\backend"
npm install
npm install express cors dotenv nodemailer
npm install --save-dev nodemon
```

#### Frontend Setup (Copy & Paste All)

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\frontend"
npm install
npm install react react-dom react-router-dom axios
npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

---

## ▶️ RUNNING THE PROJECT

### Start Backend (Terminal 1)

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\backend"
npm run dev
```

Expected: `✓ Server running on http://localhost:5000`

### Start Frontend (Terminal 2)

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\frontend"
npm run dev
```

Expected: `Local: http://localhost:5173/`

### Access Website

Open browser: **http://localhost:5173**

---

## 🛠️ INSTALLATION COMMANDS (Individual)

### Individual Package Installation

#### Backend Only

```powershell
npm install express@^4.18.2
npm install cors@^2.8.5
npm install dotenv@^16.3.1
npm install nodemailer@^6.9.7
npm install --save-dev nodemon@^3.0.2
```

#### Frontend Only

```powershell
npm install react@^18.2.0
npm install react-dom@^18.2.0
npm install react-router-dom@^6.20.0
npm install axios@^1.6.2
npm install --save-dev vite@^5.0.0
npm install --save-dev @vitejs/plugin-react@^4.2.0
npm install --save-dev tailwindcss@^3.3.6
npm install --save-dev postcss@^8.4.32
npm install --save-dev autoprefixer@^10.4.16
```

---

## 🔧 COMMON COMMANDS

### Check Versions

```powershell
npm --version
node --version
npm list
```

### Update Packages

```powershell
npm update
npm update --save-dev
npm outdated
```

### Fix Issues

```powershell
# Clear cache
npm cache clean --force

# Reinstall everything
rm -r node_modules
npm install

# Check for security issues
npm audit
npm audit fix
```

### Check What's Running

```powershell
# Windows: Find process on port 5000
netstat -ano | findstr :5000

# Kill process
taskkill /PID <PID> /F
```

---

## 📦 BUILD FOR PRODUCTION

### Build Frontend

```powershell
cd frontend
npm run build
```

Creates: `frontend/dist/` folder (ready to deploy)

### Start Backend Production

```powershell
cd backend
npm start
```

---

## 🧹 CLEANUP COMMANDS

### Remove Package

```powershell
npm uninstall package-name
npm uninstall --save-dev package-name
```

### Clear All

```powershell
rm -r node_modules
rm package-lock.json
npm cache clean --force
npm install
```

---

## 📝 QUICK EDITS

### Update Portfolio Data

Edit: `backend/routes/portfolio.js`

Find and replace:

```javascript
// Line 5-10: Update about section
about: {
  name: 'Your Name',          // Change this
  title: 'Your Title',        // Change this
  bio: 'Your bio...',         // Change this
}

// Line 12-25: Update skills
skills: [
  {
    category: 'Frontend',
    items: ['React', 'Vue', ...]  // Add/remove skills
  }
]

// Line 27-45: Update projects
projects: [
  {
    id: 1,
    title: 'Project Name',    // Change this
    // ... update all fields
  }
]
```

### Change Colors

Edit: `frontend/tailwind.config.js`

```javascript
colors: {
  primary: '#667eea',         // Change primary color
  secondary: '#764ba2',       // Change secondary color
}
```

### Update Header/Footer

Edit: `frontend/src/components/Header.jsx` (logo, menu)
Edit: `frontend/src/components/Footer.jsx` (links, copyright)

---

## 🔌 API TESTING (in browser console)

### Test Backend

```javascript
// Check if running
fetch("http://localhost:5000/api/health")
  .then((r) => r.json())
  .then((d) => console.log(d));

// Get portfolio data
fetch("http://localhost:5000/api/portfolio")
  .then((r) => r.json())
  .then((d) => console.log(d));

// Get skills
fetch("http://localhost:5000/api/portfolio/skills")
  .then((r) => r.json())
  .then((d) => console.log(d));

// Test contact form
fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Test",
    email: "test@test.com",
    message: "Hello!",
  }),
})
  .then((r) => r.json())
  .then((d) => console.log(d));
```

---

## 🌐 ENVIRONMENT VARIABLES

### Backend .env Setup

```powershell
# Create .env file in backend folder
# Add these lines:

PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

---

## 📊 DEBUGGING

### Check Backend Logs

When running `npm run dev` in backend:

```
✓ Server running on http://localhost:5000
Contact form received: { name: '...', email: '...' }
Email sent successfully
```

### Check Frontend Errors

Press F12 in browser:

- Console tab - JavaScript errors
- Network tab - API calls
- Application tab - LocalStorage/Cookies

### Check if Servers Running

```powershell
# Backend on 5000
curl http://localhost:5000/api/health

# Frontend on 5173 (check in browser)
http://localhost:5173
```

---

## 🚀 QUICK DEPLOYMENT

### Vercel (Frontend)

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel
```

### Railway (Backend)

1. Go to https://railway.app
2. New Project
3. Deploy from GitHub
4. Set root to `backend`
5. Add environment variables
6. Deploy

---

## 🆘 TROUBLESHOOTING COMMANDS

### Port Already in Use

```powershell
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Change port in backend/.env
PORT=5001
```

### Clear Everything & Start Over

```powershell
# Backend
cd backend
rm -r node_modules
rm package-lock.json
npm install

# Frontend
cd frontend
rm -r node_modules
rm package-lock.json
npm install
```

### Check for Issues

```powershell
npm audit
npm audit fix --force
npm outdated
```

---

## 📚 DOCUMENTATION QUICK LINKS

| Command        | File                 |
| -------------- | -------------------- |
| Full setup     | `INSTALLATION.md`    |
| Quick start    | `GETTING_STARTED.md` |
| Deploy         | `DEPLOYMENT.md`      |
| Packages       | `PACKAGES.md`        |
| Project info   | `PROJECT_SUMMARY.md` |
| File structure | `STRUCTURE.md`       |

---

## 🎯 TYPICAL WORKFLOW

```powershell
# 1. Install (first time only)
cd backend && npm install
cd ../frontend && npm install

# 2. Start servers
cd backend && npm run dev        # Terminal 1
cd frontend && npm run dev       # Terminal 2

# 3. Edit files (while running)
# Edit backend/routes/portfolio.js
# Edit frontend/src/components/*.jsx
# Edit frontend/tailwind.config.js

# 4. Test in browser
# http://localhost:5173

# 5. Production build
cd frontend && npm run build
cd ../backend && npm start

# 6. Deploy
# Push to GitHub
# Connect to Vercel (frontend) & Railway (backend)
```

---

## 💾 GIT COMMANDS (Optional)

```powershell
# Initialize repo
git init
git add .
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/your/repo.git
git branch -M main
git push -u origin main

# Update
git add .
git commit -m "Update portfolio"
git push
```

---

## 🔑 KEY FILES TO REMEMBER

```
Change your info:          backend/routes/portfolio.js
Change UI text:            frontend/src/components/*.jsx
Change colors:             frontend/tailwind.config.js
Change server settings:    backend/.env
Add styles:                frontend/src/index.css
API setup:                 frontend/src/api/client.js
```

---

## 📞 HELP COMMANDS

```powershell
# NPM help
npm help
npm help install

# Check specific package
npm info express
npm info react

# List installed
npm list
npm list --depth=0
```

---

**That's it! Copy & paste the commands you need. Good luck! 🚀**
