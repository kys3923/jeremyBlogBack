const express = require('express');
const router = express.Router();

const { registerPost, getAllPosts } = require('../controllers/article');

router.route('/register').post(registerPost);
router.route('/getAllPosts').get(getAllPosts);

module.exports = router;