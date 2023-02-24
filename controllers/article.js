const Article = require('../models/Article');

exports.registerPost = async (req, res) => {
  console.log(req.body);

  const { title, article } = req.body;

  try {
    const requestedArticle = await Article.create({
      title: title,
      article: article
    })

    res.json({
      status: true,
      requestedArticle
    })
  } catch (e) {
    console.log(e)
  }
}

exports.getAllPosts = async (req, res) => {
  try {

    const posts = await Article.find();

    res.json({
      status: true,
      posts
    })
  } catch (e) {
    console.log(e)
  }
}