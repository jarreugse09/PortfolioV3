# 🎯 REFERENCE CARD - Keep This Handy!

## ⚡ INSTALLATION (Copy & Paste)

### Backend Setup

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\backend"
npm install
npm run dev
```

### Frontend Setup (New Terminal)

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\frontend"
npm install
npm run dev
```

### Open Browser

```
http://localhost:5173
```

---

## 📚 Documentation Map

| Problem                  | Solution                            |
| ------------------------ | ----------------------------------- |
| How do I start?          | Read `INDEX.md` or `INSTALL_NOW.md` |
| I'm stuck on install     | Read `INSTALLATION.md`              |
| How do I customize?      | Read `GETTING_STARTED.md`           |
| What are these packages? | Read `PACKAGES.md`                  |
| Where are the files?     | Read `STRUCTURE.md`                 |
| How do I deploy?         | Read `DEPLOYMENT.md`                |
| Show me all commands     | Read `QUICK_COMMANDS.md`            |
| General questions        | Read `README.md`                    |

---

## 🔧 Key Files to Edit

### Change Your Name

**File:** `backend/routes/portfolio.js`
**Line:** Around 6

```javascript
name: 'Your Name',  // ← Change this
```

### Add Projects

**File:** `backend/routes/portfolio.js`
**Section:** Projects array (line 27+)

```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'What it does',
  technologies: ['React', 'Node.js'],
  link: 'https://github.com/...',
  image: 'https://...'
}
```

### Change Colors

**File:** `frontend/tailwind.config.js`
**Lines:** 3-4

```javascript
primary: '#667eea',   // ← Change color
secondary: '#764ba2', // ← Change color
```

### Server Config

**File:** `backend/.env`

```
PORT=5000
FRONTEND_URL=http://localhost:5173
```

---

## 🌐 API Endpoints

### Get Data

```
GET /api/portfolio           - All data
GET /api/portfolio/about     - About info
GET /api/portfolio/skills    - Skills
GET /api/portfolio/projects  - Projects
GET /api/portfolio/experience - Experience
```

### Submit Contact

```
POST /api/contact
Body: {
  name: "string",
  email: "string",
  phone: "string (optional)",
  message: "string"
}
```

---

## 📦 What's Installed

### Backend

- express (web server)
- cors (API access)
- dotenv (configuration)
- nodemailer (email)
- nodemon (auto-restart)

### Frontend

- react (UI library)
- vite (build tool)
- tailwindcss (styling)
- react-router (navigation)
- axios (HTTP requests)

---

## ⏱️ Quick Timeline

| Step                | Time        |
| ------------------- | ----------- |
| Copy commands       | 1 min       |
| Install backend     | 2 min       |
| Install frontend    | 2 min       |
| Start servers       | 1 min       |
| Edit portfolio data | 10 min      |
| Customize UI        | 10 min      |
| **Total**           | **~26 min** |

---

## 🎯 Daily Commands

### Start Development

```powershell
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

### Build for Production

```powershell
# Frontend
cd frontend && npm run build

# Backend (already ready)
cd backend && npm start
```

### Check Packages

```powershell
npm list        # Show all
npm outdated    # Show updates
npm audit       # Check security
```

---

## 🚀 Before Deploying

- [ ] Update portfolio.js with your info
- [ ] Edit components
- [ ] Change colors
- [ ] Test all features
- [ ] Check on mobile
- [ ] Build frontend: `npm run build`
- [ ] Test production build

---

## 📋 Project Structure (Quick View)

```
backend/
├── server.js          ← Main server
├── routes/
│   ├── contact.js     ← Contact form
│   └── portfolio.js   ← YOUR DATA
├── .env               ← Configuration
└── package.json       ← Dependencies

frontend/
├── src/
│   ├── components/    ← 8 React components
│   ├── api/          ← API calls
│   ├── App.jsx       ← Main component
│   └── index.css     ← Styles
├── tailwind.config.js ← Theme colors
├── vite.config.js    ← Build config
└── package.json      ← Dependencies
```

---

## 🔑 Important Files

| File                 | Edit?    | Purpose             |
| -------------------- | -------- | ------------------- |
| `portfolio.js`       | ✅ YES   | Your portfolio data |
| `components/*.jsx`   | ✅ YES   | UI content          |
| `tailwind.config.js` | ✅ YES   | Colors & theme      |
| `.env`               | ✅ YES   | Server config       |
| `server.js`          | ❌ NO    | Core server         |
| `App.jsx`            | ✅ MAYBE | Component structure |
| `vite.config.js`     | ❌ NO    | Build config        |

---

## 🆘 Quick Fixes

### "Port already in use"

Change in `.env`: `PORT=5001`

### "CORS error"

Check `.env`: `FRONTEND_URL=http://localhost:5173`

### "Module not found"

Run: `npm install`

### "Nothing changed"

Restart dev server

### "Still broken"

Check F12 console for errors

---

## 💻 Useful Browser Commands

Test in console (F12):

```javascript
// Check backend
fetch("http://localhost:5000/api/health")
  .then((r) => r.json())
  .then((d) => console.log(d));

// Get portfolio data
fetch("http://localhost:5000/api/portfolio")
  .then((r) => r.json())
  .then((d) => console.log(d));

// Test contact form
fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Test",
    email: "test@test.com",
    message: "Hello",
  }),
})
  .then((r) => r.json())
  .then((d) => console.log(d));
```

---

## 🎨 Quick Color Reference

### Current Colors (in tailwind.config.js)

- **Primary:** `#667eea` (Blue)
- **Secondary:** `#764ba2` (Purple)
- **Dark:** `#1a202c`
- **Light:** `#f7fafc`

### Popular Alternatives

- Blue: `#3B82F6`
- Purple: `#8B5CF6`
- Red: `#EF4444`
- Green: `#10B981`
- Pink: `#EC4899`

---

## 📱 Responsive Breakpoints

| Size    | Usage             |
| ------- | ----------------- |
| Mobile  | < 768px (default) |
| Tablet  | 768px+ (md:)      |
| Desktop | 1024px+ (lg:)     |

**Example:** `md:grid-cols-2` = 2 columns on tablet+

---

## 🚢 Deployment Quick Reference

### Frontend

```
Build: npm run build
Deploy to: Vercel, Netlify, AWS S3
Folder: dist/
```

### Backend

```
Start: npm start
Deploy to: Railway, Render, AWS EC2
Process: Node.js server
```

---

## 📞 Need Help?

**Q: How do I customize?**
A: Edit `backend/routes/portfolio.js` then `frontend/src/components/*.jsx`

**Q: How do I deploy?**
A: See `DEPLOYMENT.md`

**Q: How do I add email?**
A: Configure `.env` with email settings

**Q: How do I add database?**
A: Modify `portfolio.js` to query database instead

**Q: How do I add authentication?**
A: Add login routes to backend, add auth state to frontend

---

## ✅ Success Checklist

- [ ] Backend installing...
- [ ] Frontend installing...
- [ ] Backend running on 5000
- [ ] Frontend running on 5173
- [ ] Browser shows portfolio
- [ ] Contact form works
- [ ] Portfolio data updated
- [ ] Colors customized
- [ ] Ready to deploy!

---

## 🎯 30-Second Summary

```
1. cd backend && npm install && npm run dev
2. cd frontend && npm install && npm run dev
3. Open http://localhost:5173
4. Edit backend/routes/portfolio.js
5. See changes instantly!
6. Deploy when ready
```

**That's it! 🎉**

---

## 📚 Complete File Listing

### Documentation (Read These)

- INDEX.md - Start here
- INSTALL_NOW.md - Quick install
- README.md - Overview
- INSTALLATION.md - Detailed setup
- GETTING_STARTED.md - Customization
- QUICK_COMMANDS.md - All commands
- STRUCTURE.md - Files explained
- DEPLOYMENT.md - Deploy guide
- PACKAGES.md - Packages info
- PROJECT_SUMMARY.md - Full overview
- COMPLETE_SUMMARY.md - What's created
- REFERENCE_CARD.md - This file!

### Backend (Edit/Customize)

- backend/routes/portfolio.js - Your data
- backend/.env - Configuration
- backend/server.js - Core (don't edit)

### Frontend (Edit/Customize)

- frontend/src/components/\*.jsx - UI sections
- frontend/tailwind.config.js - Theme colors
- frontend/src/index.css - Styles
- frontend/src/App.jsx - Structure

---

## 🎊 You're Ready!

All files are created. All docs are written.
All code is ready.

**Pick a documentation file above and get started! 🚀**

---

**Questions?** Check the documentation.
**Ready to code?** Start with INSTALL_NOW.md
**Need help?** See the "Need Help?" section above.

**Let's build! 🌟**
