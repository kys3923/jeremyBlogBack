const Article = require('../models/Article');
const Tag = require('../models/Tag');

exports.registerPost = async (req, res) => {

  const { title, article, tag } = req.body;

  try {
    
    let tempTags = []
    // find if there is duplicate tag in DB
    if (tag.length > 0) {
      tag.forEach( async subject => {
        let foundTag = await Tag.findOne({tag: subject.tag})
        if (foundTag == null) {
          // if there is no duplicate, register new tag in DB with viewedCount with 1
          let newTag = await Tag.create({
            tag: subject.tag,
            addedCount: 1
          })
          await tempTags.push(newTag._id)
          await requestedArticle();
        } else {
          // add addedCount on tag
          let newCount = foundTag.addedCount + 1;
          let newTag = await Tag.findOneAndUpdate({tag: subject.tag}, {addedCount: newCount})
          await console.log('asdf')
          await tempTags.push(newTag._id)
          await requestedArticle();
        }
      });
    }

    // create Article in DB

    const requestedArticle = async () => {
      await Article.create({
        title: title,
        article: article,
        tags: tempTags,
      })
    } 
    
    console.log(requestedArticle, 'dsffdsa')
    
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

    const posts = await Article.find().sort({createdAt: -1}).populate('tags').populate('comments').exec();

    res.json({
      status: true,
      posts
    })
  } catch (e) {
    console.log(e)
  }
}