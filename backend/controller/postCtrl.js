const Post = require("../models/Post");
const Category = require("../models/Category");
const slugify = require("slugify");

const postCtrl = {
  getPosts: async (req, res) => {
    try {
      const Posts = await Post.find({}).populate("category");
      res.json(Posts);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getPostbySlug: async (req, res) => {
    try {
      const post = await Post.find({ slug: req.params.slug }).populate(
        "category"
      );
      res.json(post);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createPost: async (req, res) => {
    try {
      const { title, description, imageUrl, category } = req.body;
      const findedcategory = await Category.findOne({ _id: category }).populate(
        "category"
      );
      if (!category) return res.status(422).json({ msg: "categorie required" });

      const newPost = new Post({
        title: title,
        slug: slugify(title),
        description: description,
        imageUrl: imageUrl,
        category: findedcategory._id,
      });
      await newPost.save();
      res.json(newPost);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { title, description, imageUrl, category } = req.body;
      const findedcategory = await Category.findOne({ _id: category });
      if (!category) return res.status(422).json({ msg: "categorie required" });

      const post = Post.findByIdAndUpdate(
        { _id: req.params.id },
        {
          title: title,
          slug: slugify(title),
          description: description,
          imageUrl: imageUrl,
          category: findedcategory._id,
        }
      ).populate("category");
      res.json(post);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Post" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = postCtrl;

// IDS CATEGORIES 605f3bc9dd7a24044c31dbca
