# Railway Deployment Setup Guide

## Environment Variables Required

Make sure these environment variables are set in your Railway project:

```env
# JWT Configuration
JWT_SECRET=your_secure_jwt_secret_here
JWT_EXPIRES_IN=3d

# MongoDB Configuration (Use Railway's MongoDB plugin or external MongoDB)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# Server Configuration
PORT=3000
NODE_ENV=production
```

## Deployment Steps

1. **Connect your GitHub repository to Railway**
2. **Set up environment variables** in Railway dashboard
3. **Deploy the application**

## Troubleshooting 502 Bad Gateway

### 1. Check Environment Variables
- Ensure all required environment variables are set
- Verify MongoDB URI is correct and accessible

### 2. Check Logs
```bash
# View Railway logs
railway logs
```

### 3. Test Health Endpoint
After deployment, test these endpoints:
- `https://your-app.railway.app/health`
- `https://your-app.railway.app/test`

### 4. Common Issues

#### MongoDB Connection Issues
- Ensure MongoDB URI is correct
- Check if MongoDB service is running
- Verify network access

#### Port Issues
- Railway automatically sets PORT environment variable
- Don't hardcode port numbers

#### CORS Issues
- Frontend URL is configured: `https://addy-bites.vercel.app`
- Check browser console for CORS errors

## Local Testing

```bash
# Install dependencies
npm install

# Set up environment variables
cp env.example .env
# Edit .env with your values

# Start development server
npm run dev

# Test endpoints
curl http://localhost:3000/health
curl http://localhost:3000/test
```

## API Endpoints

### Health Check
- `GET /health` - Server status

### Test
- `GET /test` - Basic functionality test

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Check authentication
- `GET /api/auth/logout` - User logout

### Products
- `GET /products/all` - Get all products
- `GET /products/search?q=query` - Search products
- `GET /products/details/:id` - Get product details

### Cart & Orders
- `GET /products/:userId/cart` - Get user cart
- `POST /products/cart/:userId/add` - Add to cart
- `POST /user/:userId/cart/order` - Place order

## Monitoring

Check Railway dashboard for:
- Build logs
- Deployment status
- Environment variables
- Service health

## Support

If issues persist:
1. Check Railway logs
2. Verify environment variables
3. Test endpoints locally
4. Contact Railway support if needed 