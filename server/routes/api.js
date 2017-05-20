const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

// load mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ng2-mean')
    .then(() => console.log('Mongo Success'))
    .catch((err) => console.error(err));

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
    Post.find(function (err, posts) {
        if (err)
            return next(err);
        res.json(posts);
    });
});

module.exports = router;
