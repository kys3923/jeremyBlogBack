const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  tag: String,
  addedCount: Number,
}, {timestamps: true});

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;