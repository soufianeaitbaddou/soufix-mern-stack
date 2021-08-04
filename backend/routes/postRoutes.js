const router = require("express").Router();
const postCtrl = require("../controller/postCtrl");

router.route("/post").get(postCtrl.getPosts).post(postCtrl.createPost);

router.route("/post/:id").put(postCtrl.updatePost).delete(postCtrl.deletePost);

router.route("/post/:slug").get(postCtrl.getPostbySlug);

module.exports = router;
