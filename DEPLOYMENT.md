# Deployment Guide

Complete guide to deploy your portfolio website to production.

## Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**

```powershell
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**

   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select `frontend` folder as root
   - Deploy!

3. **Environment Variables**
   - Add `VITE_API_URL` pointing to your backend URL

### Option 2: Netlify

1. **Build locally**

```powershell
cd frontend
npm run build
```

2. **Drag & drop `dist/` folder to Netlify**

   - Go to https://netlify.com
   - Drag dist/ folder to the drop zone
   - Done!

3. **Configure**
   - Add environment variable `VITE_API_URL`
   - Set redirects for SPA

### Option 3: AWS S3 + CloudFront

1. Build frontend
2. Upload `dist/` to S3 bucket
3. Create CloudFront distribution
4. Point domain to CloudFront

---

## Backend Deployment

### Option 1: Railway (Recommended)

1. **Login to Railway**

   - https://railway.app

2. **Create New Project**

   - Select "Deploy from GitHub"
   - Choose your repository

3. **Configure**

   - Set root directory to `backend`
   - Add environment variables:
     ```
     PORT=8000
     NODE_ENV=production
     FRONTEND_URL=https://your-frontend-url.com
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-app-password
     ```

4. **Deploy**
   - Click "Deploy"
   - Get your API URL

### Option 2: Heroku (Deprecated but still works)

1. **Install Heroku CLI**

```powershell
npm install -g heroku
heroku login
```

2. **Create App**

```powershell
heroku create your-app-name
```

3. **Set Environment Variables**

```powershell
heroku config:set PORT=8000
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL=https://your-frontend-url.com
```

4. **Deploy**

```powershell
git push heroku main
```

### Option 3: Render

1. **Connect Repository**

   - https://render.com
   - Connect GitHub account
   - Select repository

2. **Create Web Service**

   - Build command: `npm install`
   - Start command: `npm start`
   - Root directory: `backend`

3. **Set Environment Variables**

   - Add all variables from .env

4. **Deploy**

### Option 4: AWS EC2

1. **Launch EC2 Instance**

   - Ubuntu 20.04 LTS
   - t2.micro (free tier)

2. **SSH into Instance**

```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

3. **Install Node.js**

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Clone Repository**

```bash
git clone https://github.com/your-repo.git
cd Portfolio/backend
npm install
```

5. **Setup PM2**

```bash
sudo npm install -g pm2
pm2 start server.js --name "portfolio"
pm2 startup
pm2 save
```

6. **Setup Nginx Reverse Proxy**

```bash
sudo apt install nginx
```

Edit `/etc/nginx/sites-available/default`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
```

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## Custom Domain Setup

### Using Vercel + Custom Domain

1. Add domain in Vercel dashboard
2. Update DNS records at your registrar
3. Vercel auto-generates SSL certificate

### Using Railway + Custom Domain

1. Add custom domain in Railway
2. Update DNS CNAME record
3. Auto SSL setup

### Using Namecheap Example

1. Login to Namecheap
2. Go to "Manage" on your domain
3. Add DNS records:

   ```
   Type: CNAME
   Host: www
   Value: your-vercel-url.vercel.app
   ```

4. Wait for DNS propagation (24 hours)

---

## SSL Certificate

Most platforms provide free SSL:

- **Vercel** - Automatic
- **Railway** - Automatic
- **Netlify** - Automatic
- **Heroku** - Automatic
- **AWS** - Use Certificate Manager

For custom domains, use Let's Encrypt (free)

---

## Post-Deployment Checklist

- [ ] Frontend deployed and accessible
- [ ] Backend API running and accessible
- [ ] Custom domain configured
- [ ] SSL certificate active (https)
- [ ] Environment variables set
- [ ] CORS configured correctly
- [ ] Contact form tested
- [ ] API endpoints verified
- [ ] Performance optimized
- [ ] Monitoring/logging setup

---

## Performance Optimization

### Frontend

1. **Minification** - Already done by Vite
2. **Image Optimization** - Use WebP format
3. **Lazy Loading** - React.lazy()
4. **Code Splitting** - Already done by Vite
5. **CDN** - Use Vercel/Netlify CDN

### Backend

1. **Enable Compression**

```javascript
app.use(compression());
```

2. **Add Caching**

```javascript
app.set("view cache", true);
```

3. **Database Queries** - Index frequently queried fields
4. **Rate Limiting** - Prevent abuse
5. **Load Balancing** - Use multiple instances

---

## Monitoring & Logging

### Frontend

- Vercel Analytics
- Sentry error tracking
- Google Analytics

### Backend

- Winston/Bunyan logging
- New Relic APM
- DataDog monitoring
- Sentry for errors

### Setup Sentry (Easy)

1. Create account at sentry.io
2. Add SDK to frontend:

```javascript
import * as Sentry from "@sentry/react";
Sentry.init({ dsn: "your-dsn" });
```

3. Add to backend:

```javascript
const Sentry = require("@sentry/node");
Sentry.init({ dsn: "your-dsn" });
```

---

## CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Deploy Frontend
        run: |
          cd frontend
          npm install
          npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## Backup & Recovery

1. **GitHub** - Keep repository up to date
2. **Database Backups** - Daily automated backups
3. **Environment Variables** - Store in secure vault
4. **CDN Cache** - Purge when updating

---

## Troubleshooting Deployment

| Issue          | Solution                           |
| -------------- | ---------------------------------- |
| CORS errors    | Update FRONTEND_URL in backend env |
| API not found  | Verify backend URL is correct      |
| Timeout errors | Increase timeout limits            |
| Memory issues  | Upgrade instance size              |
| SSL errors     | Renew certificate                  |

---

## Cost Estimation (Monthly)

| Service           | Free Tier  | Paid     |
| ----------------- | ---------- | -------- |
| Vercel (Frontend) | 100GB      | $20+     |
| Railway (Backend) | $5         | $5+      |
| Domain            | $8-12      | -        |
| **Total**         | **$13-17** | **$25+** |

---

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Node.js Best Practices: https://nodejs.org/en/docs
- Express Deployment: https://expressjs.com/en/advanced/best-practice-performance.html

---

You're ready to go live! 🚀
