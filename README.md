# Turtle Neck Tees - Full Stack Ecommerce Platform

A complete ecommerce solution for Turtle Neck Tees with a React frontend, Express backend, and Supabase database.

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Axios
- **Backend**: Node.js, Express, JWT
- **Database**: Supabase (PostgreSQL)
- **Payment**: eSewa, Khalti, PhonePay
- **Hosting**: Vercel (Frontend), Railway/Render (Backend)

## Project Structure

```
turtle-neck-tees/
├── frontend/              # React frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── admin/        # Admin panel
│   │   ├── styles/       # CSS files
│   │   ├── utils/        # Utility functions
│   │   └── App.js
│   └── package.json
├── backend/              # Express API server
│   ├── routes/           # API routes
│   ├── controllers/      # Route controllers
│   ├── models/           # Data models
│   ├── middlewares/      # Custom middlewares
│   ├── config/           # Configuration
│   ├── server.js         # Entry point
│   └── package.json
└── database/             # Database migrations
    └── migrations/
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Supabase account
- Git

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your credentials:
- Supabase URL and keys
- JWT secret
- Payment processor keys

5. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with API URL and Stripe key

5. Start the development server:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## Database Setup

1. Create Supabase project at https://supabase.com

2. Run the SQL migration in Supabase editor:
```sql
-- Run the contents of database/migrations/001_initial_schema.sql
```

3. Enable Row Level Security (RLS) for tables

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)

### Orders
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Payments
- `POST /api/payments/esewa/initiate` - Initiate eSewa payment
- `POST /api/payments/esewa/verify` - Verify eSewa payment
- `POST /api/payments/khalti/initiate` - Initiate Khalti payment
- `POST /api/payments/khalti/verify` - Verify Khalti payment

### Admin
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/orders` - All orders
- `PUT /api/admin/orders/:id/status` - Update order status
- `PUT /api/admin/inventory/:productId` - Update inventory

## Features

- ✅ Product catalog
- ✅ Shopping cart
- ✅ User authentication
- ✅ Order management
- ✅ Payment processing (eSewa, Khalti, PhonePay)
- ✅ Admin dashboard
- ✅ Inventory management
- ✅ Order tracking
- ✅ Email notifications (to implement)

## Deployment

### Deploy Frontend to Vercel
1. Push code to GitHub
2. Go to vercel.com and connect your repo
3. Deploy

### Deploy Backend to Railway
1. Create Railway account
2. Create new project
3. Connect GitHub repo
4. Add environment variables
5. Deploy

## Next Steps

1. Implement payment processor integrations
2. Add email notification system
3. Create user authentication UI
4. Build product management features
5. Add search and filtering
6. Set up analytics
7. Add reviews and ratings
8. Implement wishlists

## Contributing

This is a personal project. Contact the author for collaboration.

## License

MIT License

---

**Built with ❤️ for Turtle Neck Tees**
