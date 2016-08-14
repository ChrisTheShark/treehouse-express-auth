"use strict";

const express = require('express'),
    router = express.Router(),
    User = require('../model/user');

// GET /
router.get('/', function(req, res, next) {
    return res.render('index', {
        title: 'Home'
    });
});

// GET /about
router.get('/about', function(req, res, next) {
    return res.render('about', {
        title: 'About'
    });
});

// GET /contact
router.get('/contact', function(req, res, next) {
    return res.render('contact', {
        title: 'Contact'
    });
});

// GET /register
router.get('/register', function(req, res, next) {
    res.render('register', {
        title: 'Sign Up'
    });
});

// POST /register
router.post('/register', function(req, res, next) {
    User.create(req.body, (error, user) => {
        if (error) {
            return next(error);
        }
        res.redirect('/profile');
    });
});

module.exports = router;
