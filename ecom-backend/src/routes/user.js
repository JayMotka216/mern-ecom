const express = require('express');

const user = express.Router();

const User = require('../models/user');

user.post('/signin', (req,res) => {
});

user.post('/signup', (req,res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) {
            return res.status(400).json({
                message: 'User already exist!',
            });
        }
        const { firstName, lastName, email, password } = req.body;
        const _user = new User({ firstName, lastName, email, password, userName: Math.random().toString() });

        _user.save((error, data) => {
            if(error) {
                return res.status(400).json({
                    message: 'Something went wrong',
                });
            }
            if(data) {
                return res.status(201).json({
                    user: data,
                    message: 'User created',
                });
            }
        })
    })
});

module.exports = user;