const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific post
router.get("/:postId", async (req, res) => {
  try {
    const po = await Post.findById(req.params.postId);
    res.json(po);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Post
router.delete("/:postId", async (req, res) => {
  try {
    const removeP = await Post.remove({ _id: req.params.postId });
    res.json(removeP);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update Post
router.patch("/:postId", async (req, res) => {
  try {
    const Updated = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(Updated);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
