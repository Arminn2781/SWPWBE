const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/new', async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.redirect('/');
});

module.exports = router;
