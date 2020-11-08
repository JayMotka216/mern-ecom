const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const AuthRoutes = require('./routes/auth');
const AdminRoutes = require('./routes/admin/auth');
const CategoryRoutes = require('./routes/category');
const ProductRoutes = require('./routes/product');
const CartRoutes = require('./routes/cart');

// adding environment info into app
env.config();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@mern-ecom.gcplj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true 
    }).then(() => {
        console.log("Database Connected!");
    }).catch((e) => {
        console.log(e.message);
    });

app.use(express.json());
app.use('/public',express.static(path.join(__dirname, 'uploads')));

app.use('/api', AuthRoutes);
app.use('/api', AdminRoutes);
app.use('/api', CategoryRoutes);
app.use('/api', ProductRoutes);
app.use('/api', CartRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});