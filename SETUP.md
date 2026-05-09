# Turtle Neck Tees - Setup Guide

Complete setup instructions for the full stack ecommerce platform.

## Initial Setup (First Time)

### 1. Clone the Repository
```bash
git clone https://github.com/beenprabin16/TurtleNeckTees.git
cd TurtleNeckTees
```

### 2. Create Supabase Project

1. Go to https://supabase.com and create an account
2. Create a new project
3. Copy your project URL and keys from Settings → API

### 3. Backend Configuration

```bash
cd backend
cp .env.example .env
```

Update `.env` with:
```
SUPABASE_URL=your_project_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key
JWT_SECRET=your-secret-key-here
```

### 4. Frontend Configuration

```bash
cd ../frontend
cp .env.example .env
```

Update `.env` with:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### 5. Database Setup

1. Go to Supabase SQL Editor
2. Run the SQL from `database/migrations/001_initial_schema.sql`
3. Enable Row Level Security on tables

### 6. Install Dependencies

From root:
```bash
npm run install-all
```

Or manually:
```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install
```

## Development

### Start Backend Server
```bash
cd backend
npm run dev
```
Runs on: http://localhost:5000

### Start Frontend (in another terminal)
```bash
cd frontend
npm start
```
Runs on: http://localhost:3000

## Features to Implement

### Phase 1: Core Features
- [ ] Product listing page
- [ ] Product detail page
- [ ] Shopping cart functionality
- [ ] Checkout page
- [ ] User authentication

### Phase 2: Payment Integration
- [ ] eSewa integration
- [ ] Khalti integration
- [ ] PhonePay integration
- [ ] Payment verification

### Phase 3: Admin Panel
- [ ] Product management
- [ ] Order management
- [ ] Inventory tracking
- [ ] User management
- [ ] Sales reports

### Phase 4: Additional Features
- [ ] Email notifications
- [ ] Product reviews
- [ ] Wishlist
- [ ] Search and filters
- [ ] Analytics dashboard

## Common Issues & Solutions

### "Cannot find module" error
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Supabase connection issues
- Check your `.env` file
- Verify Supabase project is active
- Check API keys are correct

### Port already in use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## Deployment Checklist

### Before Deploying Frontend to Vercel
- [ ] Update REACT_APP_API_URL to production backend URL
- [ ] Test all features locally
- [ ] Check for console errors
- [ ] Optimize images

### Before Deploying Backend to Railway
- [ ] Test all API endpoints
- [ ] Update CORS settings
- [ ] Set production environment variables
- [ ] Enable HTTPS

## Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

## Support

For issues or questions, check the README.md or contact the developer.

---

Last Updated: May 2024
