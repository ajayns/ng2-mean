var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    data: String
});

module.exports = mongoose.model('Post', PostSchema)
