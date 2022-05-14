import express from 'express';

const app = express();
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
const PORT = process.env.PORT || 3300
dotenv.config()



connectDB()

app.get('/',(req,res) => {
res.send('API is running ... ')
})

app.use('/api/products', productRoutes)
app.use(notFound)

app.use(errorHandler)
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))