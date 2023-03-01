const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  article: {
    type: String,
    require: true,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  category: {
    type: String,
    require: true,
  },
  subCategory: {
    type: String,
    require: true,
  }
  // user:
}, {timestamps: true});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;