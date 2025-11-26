# NPM Package Installation Reference

## Complete Package Installation Guide

### All Backend Packages (npm install)

```powershell
# Navigate to backend
cd backend

# Install all at once
npm install express cors dotenv nodemailer

# Install dev dependencies
npm install --save-dev nodemon

# Or separately:
npm install express@^4.18.2
npm install cors@^2.8.5
npm install dotenv@^16.3.1
npm install nodemailer@^6.9.7
npm install --save-dev nodemon@^3.0.2
```

### All Frontend Packages (npm install)

```powershell
# Navigate to frontend
cd frontend

# Install all dependencies
npm install react react-dom react-router-dom axios

# Install dev dependencies
npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer

# Or separately:
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

## Backend Dependencies Explained

### Core Dependencies

#### express@^4.18.2

```powershell
npm install express@^4.18.2
```

**Purpose**: Web application framework
**Usage**:

```javascript
import express from "express";
const app = express();
```

#### cors@^2.8.5

```powershell
npm install cors@^2.8.5
```

**Purpose**: Enable Cross-Origin Resource Sharing
**Usage**:

```javascript
import cors from "cors";
app.use(cors());
```

#### dotenv@^16.3.1

```powershell
npm install dotenv@^16.3.1
```

**Purpose**: Load environment variables from .env file
**Usage**:

```javascript
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.PORT);
```

#### nodemailer@^6.9.7

```powershell
npm install nodemailer@^6.9.7
```

**Purpose**: Send emails from contact form
**Usage**:

```javascript
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({...});
```

### Development Dependencies

#### nodemon@^3.0.2

```powershell
npm install --save-dev nodemon@^3.0.2
```

**Purpose**: Auto-restart server on file changes
**Usage**: In package.json:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

---

## Frontend Dependencies Explained

### Core Dependencies

#### react@^18.2.0

```powershell
npm install react@^18.2.0
```

**Purpose**: React UI library
**Usage**:

```javascript
import React from "react";
function App() {
  return <div>Hello</div>;
}
```

#### react-dom@^18.2.0

```powershell
npm install react-dom@^18.2.0
```

**Purpose**: Render React to DOM
**Usage**:

```javascript
import ReactDOM from "react-dom/client";
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

#### react-router-dom@^6.20.0

```powershell
npm install react-router-dom@^6.20.0
```

**Purpose**: Client-side routing
**Usage**:

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

#### axios@^1.6.2

```powershell
npm install axios@^1.6.2
```

**Purpose**: HTTP client for API calls
**Usage**:

```javascript
import axios from "axios";
axios.get("/api/data");
```

### Development Dependencies

#### vite@^5.0.0

```powershell
npm install --save-dev vite@^5.0.0
```

**Purpose**: Build tool and dev server
**Commands**:

```powershell
npm run dev      # Start dev server
npm run build    # Build for production
```

#### @vitejs/plugin-react@^4.2.0

```powershell
npm install --save-dev @vitejs/plugin-react@^4.2.0
```

**Purpose**: React JSX support for Vite

#### tailwindcss@^3.3.6

```powershell
npm install --save-dev tailwindcss@^3.3.6
```

**Purpose**: Utility-first CSS framework
**Usage**:

```jsx
<div className="bg-blue-500 text-white p-4">
```

#### postcss@^8.4.32

```powershell
npm install --save-dev postcss@^8.4.32
```

**Purpose**: CSS post-processing (required for Tailwind)

#### autoprefixer@^10.4.16

```powershell
npm install --save-dev autoprefixer@^10.4.16
```

**Purpose**: Add vendor prefixes to CSS (required for Tailwind)

---

## Quick Install Commands

### One-Liner Backend Install

```powershell
cd backend; npm install express cors dotenv nodemailer; npm install --save-dev nodemon
```

### One-Liner Frontend Install

```powershell
cd frontend; npm install react react-dom react-router-dom axios; npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

---

## Verify Installation

### Check Backend

```powershell
cd backend
npm list --depth=0
```

Expected output:

```
├── cors@2.8.5
├── dotenv@16.3.1
├── express@4.18.2
├── nodemailer@6.9.7
└── nodemon@3.0.2 (dev)
```

### Check Frontend

```powershell
cd frontend
npm list --depth=0
```

Expected output:

```
├── axios@1.6.2
├── react@18.2.0
├── react-dom@18.2.0
├── react-router-dom@6.20.0
├── @vitejs/plugin-react@4.2.0 (dev)
├── autoprefixer@10.4.16 (dev)
├── postcss@8.4.32 (dev)
├── tailwindcss@3.3.6 (dev)
└── vite@5.0.0 (dev)
```

---

## Updating Packages

### Update All Packages

```powershell
npm update
```

### Update Specific Package

```powershell
npm install express@latest
```

### Check for Outdated Packages

```powershell
npm outdated
```

---

## Removing Packages

### Remove Package

```powershell
npm uninstall express
```

### Remove Dev Package

```powershell
npm uninstall --save-dev nodemon
```

---

## Alternative: Using Yarn

If you prefer Yarn instead of npm:

### Install Yarn

```powershell
npm install -g yarn
```

### Backend with Yarn

```powershell
cd backend
yarn add express cors dotenv nodemailer
yarn add --dev nodemon
yarn dev
```

### Frontend with Yarn

```powershell
cd frontend
yarn add react react-dom react-router-dom axios
yarn add --dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer
yarn dev
```

---

## Troubleshooting Package Installation

### Issue: npm ERR! code ERESOLVE

**Solution**: Clear npm cache

```powershell
npm cache clean --force
npm install
```

### Issue: Module not found after install

**Solution**: Reinstall node_modules

```powershell
rm -r node_modules
npm install
```

### Issue: Version conflicts

**Solution**: Use exact versions

```powershell
npm install express@4.18.2 --save-exact
```

### Issue: Global npm packages interfering

**Solution**: Use local npm

```powershell
npx nodemon server.js
```

---

## Package.json Structure

### Backend package.json

```json
{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "nodemailer": "^6.9.7"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  },
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### Frontend package.json

```json
{
  "name": "portfolio-frontend",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "axios": "^1.6.2"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "tailwindcss": "^3.3.6",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## Version Meanings

- `^4.18.2` - Compatible with 4.x.x (caret)
- `~4.18.2` - Compatible with 4.18.x (tilde)
- `4.18.2` - Exact version
- `latest` - Always latest version

---

## Security Updates

### Check for Vulnerabilities

```powershell
npm audit
```

### Fix Vulnerabilities

```powershell
npm audit fix
```

### Force Fix (may break things)

```powershell
npm audit fix --force
```

---

## Additional Useful Packages (Optional)

### Backend

```powershell
# Database
npm install mongoose          # MongoDB ODM
npm install pg              # PostgreSQL driver

# Utilities
npm install helmet           # Security headers
npm install express-validator # Input validation
npm install bcryptjs         # Password hashing
```

### Frontend

```powershell
# State Management
npm install zustand          # Lightweight state
npm install redux            # Complex state management

# UI Components
npm install shadcn-ui        # Component library
npm install react-icons      # Icon library

# HTTP
npm install react-query      # Data fetching
npm install swr              # SWR fetching

# Forms
npm install react-hook-form  # Form handling
npm install yup              # Validation
```

---

## Summary

**Minimum to Get Started:**

Backend:

```powershell
npm install
npm run dev
```

Frontend:

```powershell
npm install
npm run dev
```

**That's it!** Everything is in package.json already. 🚀

---

For more help, see:

- `/backend/README.md`
- `/frontend/README.md`
- `GETTING_STARTED.md`
- `INSTALLATION.md`
