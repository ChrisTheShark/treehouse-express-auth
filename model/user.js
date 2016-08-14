"use strict";
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    UserSchema = new mongoose.Schema({
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        favoriteBook: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
    });

UserSchema.pre('save', (next) => {
    let user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        if (error) {
            return next(error);
        }
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', UserSchema);
