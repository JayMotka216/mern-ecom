const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// adding environment info into app
env.config();

//mongodb+srv://ecom:<ecom216>@mern-ecom.gcplj.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@mern-ecom.gcplj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected!");
    }).catch((e) => {
        console.log(e.message);
    });

app.use(bodyParser());

app.get('/', (req,res, callback) => {
    res.status(200).json({
        message: 'Hello from server',
    });
});

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});