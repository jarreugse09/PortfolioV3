# Portfolio Backend API

Professional portfolio backend built with Express.js

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure `.env` file with your settings

3. Run development server:

```bash
npm run dev
```

4. Or start production server:

```bash
npm start
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/about` - Get about info
- `GET /api/portfolio/skills` - Get skills
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/projects/:id` - Get single project
- `GET /api/portfolio/experience` - Get experience
- `POST /api/contact` - Submit contact form

## Contact Form Configuration

To enable email notifications:

1. Generate a Google App Password (if using Gmail)
2. Update `.env` with email credentials
3. Restart the server

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode
- `FRONTEND_URL` - Frontend URL for CORS
- `EMAIL_USER` - Email service username
- `EMAIL_PASSWORD` - Email service password
