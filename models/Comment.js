const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  }
  // user:
  // tags:
}, {timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;