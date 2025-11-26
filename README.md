# Professional Programmer Portfolio Website

A complete, modern portfolio website built with Node.js + Express backend and React + Vite frontend. Features a clean UI, responsive design, reusable components, and a functional contact API.

## Project Structure

```
Portfolio/
├── backend/                 # Express.js API server
│   ├── routes/
│   │   ├── contact.js      # Contact form API
│   │   └── portfolio.js    # Portfolio data API
│   ├── server.js           # Main server file
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── frontend/               # React + Vite application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── api/           # API client utilities
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Tailwind & global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── README.md
│
└── README.md              # This file
```

## Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin support
- **Nodemailer** - Email service (optional)
- **Dotenv** - Environment variables

### Frontend

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Routing (optional)

## Features

✨ **Modern Design**

- Clean, professional UI with gradient accents
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Dark/light theme support

🔧 **Reusable Components**

- Header with navigation
- Hero section
- About section with stats
- Skills showcase with progress bars
- Projects grid with cards
- Contact form with validation
- Footer with links

📡 **REST API**

- Contact form submission
- Portfolio data retrieval
- Skill categories
- Project listings
- Experience timeline

📱 **Responsive & Accessible**

- Mobile-first design
- Semantic HTML
- Keyboard navigation
- ARIA attributes

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

#### 1. Backend Setup

```bash
cd backend
npm install
```

Configure `.env` file (optional email setup):

```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

Start the backend:

```bash
npm run dev
```

Backend runs on `http://localhost:5000`

#### 2. Frontend Setup

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

### Building for Production

**Backend:**

```bash
cd backend
npm start
```

**Frontend:**

```bash
cd frontend
npm run build
```

## Installation Commands Summary

### Quick Installation (Copy & Paste)

**Backend:**

```powershell
cd backend
npm install express cors dotenv nodemailer
npm install --save-dev nodemon
```

**Frontend:**

```powershell
cd frontend
npm install react react-dom react-router-dom axios
npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

## API Endpoints

### Portfolio API

- `GET /api/health` - Health check
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/about` - Get about information
- `GET /api/portfolio/skills` - Get skills by category
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/projects/:id` - Get specific project
- `GET /api/portfolio/experience` - Get experience

### Contact API

- `POST /api/contact` - Submit contact form
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string (optional)",
    "message": "string"
  }
  ```

## Customization

### Update Personal Information

Edit `backend/routes/portfolio.js` to update:

- Name and title
- Bio and description
- Skills and experience
- Projects portfolio

### Styling

- Tailwind colors in `frontend/tailwind.config.js`
- Custom CSS in `frontend/src/index.css`
- Component styles in each JSX file

### Email Configuration

1. Generate a Google App Password
2. Update `.env` file with credentials
3. Restart the backend

## File Structure Details

### Backend Files

**server.js**

- Main Express server setup
- Middleware configuration
- Route mounting
- Error handling

**routes/portfolio.js**

- Portfolio data endpoints
- Mock data (replace with database queries)

**routes/contact.js**

- Contact form validation
- Email sending (optional)
- Error handling

### Frontend Files

**App.jsx**

- Main component structure
- Section imports

**components/Header.jsx**

- Navigation menu
- Mobile hamburger menu
- Smooth scrolling

**components/Hero.jsx**

- Hero section with CTA buttons
- Animated entrance

**components/About.jsx**

- Profile information
- Stats cards
- API data integration

**components/Skills.jsx**

- Skill categories
- Progress bars
- Dynamic rendering

**components/Projects.jsx**

- Project grid
- Project cards
- Filter/search ready

**components/Contact.jsx**

- Contact form
- Form validation
- API integration
- Status messages

**components/Footer.jsx**

- Links and information
- Social media
- Copyright

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

### Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy the dist/ folder
```

### Backend (Heroku/Railway)

```bash
npm start
```

## Environment Variables

### Backend (.env)

```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@portfolio.com
```

## Troubleshooting

**CORS Errors**

- Ensure `FRONTEND_URL` matches your frontend address
- Check that backend is running

**API Not Responding**

- Verify backend is running on port 5000
- Check network tab in browser dev tools

**Tailwind Not Working**

- Ensure PostCSS config is correct
- Restart dev server

**Port Already in Use**

- Change PORT in `.env` (backend)
- Change port in `vite.config.js` (frontend)

## Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- User authentication
- Blog section
- Dark/light theme toggle
- Performance optimization
- SEO improvements
- Analytics integration

## License

MIT

## Support

For issues or questions, refer to component documentation or check the respective README files in backend/ and frontend/ directories.

---

Happy coding! 🚀
