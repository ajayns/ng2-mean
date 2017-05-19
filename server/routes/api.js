const express = require('express');
const router = express.Router();

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
  Post.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
