const Comment = require('../models/Comment');
const Article = require('../models/Article');

exports.registerComment = async (req, res) => {
  console.log(req.body)
  const { name, email, comment, id } = req.body;

  try {

    // register Comment
    let newComment = await Comment.create({
      name: name,
      email: email,
      comment: comment
    })
    // find Article
    let foundArticle = await Article.findOne({_id: id})
    // push comment to article
    foundArticle.comments.push(newComment)
    // save Article
    foundArticle.save()
    // res to frontend
    
    res.json({
      success: true,
      newComment
    })
  } catch (e) {
    console.log(e)
  }
}