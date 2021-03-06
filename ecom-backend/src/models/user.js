const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
        default: 'user',
    },
    contactNumber: {
        type: String,
    },
    profilePicture: { type: String },
}, { timestamps: true });

userSchema.virtual('password').set(function(password){
    this.hash_pass = bcrypt.hashSync(password, 10);
});

userSchema.virtual('fulName').get(function() {
    return `${this.firstName} ${this.lastName}`;
})

userSchema.methods = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.hash_pass);
    }
}

module.exports = mongoose.model('User', userSchema);