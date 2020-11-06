const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trin: true,
        unique: true,
        lowercase: true,
    },
    hash_pass: {
        type: String,
        required: true,
        min: 8,
        max: 16,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin',
    },
    contactNumber: {
        type: String,
    },
    profilePicture: { type: string },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);