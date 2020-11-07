const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');

const app = express();

const AuthRoutes = require('./routes/auth');
const AdminRoutes = require('./routes/admin/auth');
const CategoryRoutes = require('./routes/category');
const ProductRoutes = require('./routes/product');

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

app.use('/api', AuthRoutes);
app.use('/api', AdminRoutes);
app.use('/api', CategoryRoutes);
app.use('/api', ProductRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});