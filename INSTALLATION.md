# Installation & Setup Guide

## Complete Setup Instructions

### Step 1: Install Backend Dependencies

Open PowerShell in the `backend` folder:

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\backend"
npm install
```

This installs core backend packages. The dependencies installed are:

- `express` - Web server framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `nodemailer` - Email sending (optional)

Development dependency:

- `nodemon` - Auto-restart server during development

### Step 2: Install Frontend Dependencies

Open PowerShell in the `frontend` folder:

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\frontend"
npm install
```

This installs core frontend packages. The dependencies installed are:

- `react` - UI library
- `react-dom` - DOM renderer for React
- `react-router-dom` - Client-side routing
- `axios` - HTTP client (alternative to fetch)

Development dependencies:

- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - Utility-first CSS framework
- `postcss` - CSS post-processing
- `autoprefixer` - CSS vendor prefixing

---

## Running the Application

### Start Backend Server

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\backend"
npm run dev
```

Expected output:

```
✓ Server running on http://localhost:5000
```

### Start Frontend Development Server (in a new terminal)

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\frontend"
npm run dev
```

Expected output:

```
VITE v5.0.0  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### Access the Application

Open your browser and go to: `http://localhost:5173`

---

## Individual Package Installation (if needed)

### Backend Packages Only

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\backend"

# Core packages
npm install express@^4.18.2
npm install cors@^2.8.5
npm install dotenv@^16.3.1
npm install nodemailer@^6.9.7

# Dev packages
npm install --save-dev nodemon@^3.0.2
```

### Frontend Packages Only

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\frontend"

# Core packages
npm install react@^18.2.0
npm install react-dom@^18.2.0
npm install react-router-dom@^6.20.0
npm install axios@^1.6.2

# Dev packages
npm install --save-dev vite@^5.0.0
npm install --save-dev @vitejs/plugin-react@^4.2.0
npm install --save-dev tailwindcss@^3.3.6
npm install --save-dev postcss@^8.4.32
npm install --save-dev autoprefixer@^10.4.16
```

---

## Package Descriptions

### Backend Packages

| Package        | Purpose                              |
| -------------- | ------------------------------------ |
| **express**    | Web framework for Node.js            |
| **cors**       | Enable CORS for frontend access      |
| **dotenv**     | Load environment variables from .env |
| **nodemailer** | Send emails from contact form        |
| **nodemon**    | Auto-restart server on file changes  |

### Frontend Packages

| Package                  | Purpose                        |
| ------------------------ | ------------------------------ |
| **react**                | Component-based UI library     |
| **react-dom**            | Render React components to DOM |
| **react-router-dom**     | Client-side routing            |
| **axios**                | HTTP requests (optional)       |
| **vite**                 | Fast build tool and dev server |
| **@vitejs/plugin-react** | React JSX support in Vite      |
| **tailwindcss**          | Utility CSS framework          |
| **postcss**              | CSS transformation tool        |
| **autoprefixer**         | Add vendor prefixes to CSS     |

---

## Verify Installation

### Check Backend

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\backend"
npm list
```

You should see all packages listed with versions.

### Check Frontend

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\frontend"
npm list
```

You should see all packages listed with versions.

---

## Environment Setup

### Backend Environment Variables

Create/edit `backend/.env`:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Optional: Email configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@portfolio.com
```

---

## Common Issues & Solutions

### Issue: Port Already in Use

**Error**: `Error: listen EADDRINUSE: address already in use :::5000`

**Solution**:

```powershell
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=5001
```

### Issue: Module Not Found

**Error**: `Cannot find module 'express'`

**Solution**:

```powershell
npm install express
```

### Issue: CORS Error

**Solution**: Verify `FRONTEND_URL` in backend/.env matches frontend address

---

## Building for Production

### Build Backend (already production-ready)

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\backend"
npm start
```

### Build Frontend

```powershell
cd "e:\PROJECTS (IMPORTANT)\Portfolio\frontend"
npm run build
```

This creates a `dist/` folder with optimized production files.

---

## Next Steps

1. ✅ Install all dependencies
2. ✅ Start both servers
3. ⏭️ Customize portfolio data in `backend/routes/portfolio.js`
4. ⏭️ Update personal information in components
5. ⏭️ Configure email (optional)
6. ⏭️ Deploy to hosting service

---

## Support Commands

```powershell
# Check npm version
npm --version

# List all installed packages
npm list

# Update packages
npm update

# Clear cache if having issues
npm cache clean --force

# Reinstall node_modules
rm -r node_modules
npm install
```

---

Enjoy your professional portfolio! 🚀
