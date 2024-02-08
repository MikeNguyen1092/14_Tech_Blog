const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/:id", async (req, res) => {
	try {
		const postId = req.params.id;
		const post = await Post.findByPk(postId, {
			include: [{ model: User, attributes: ["username"] }],
		});
        const posts = dbPostData.map((Post) => Post.get({ plain: true }));
		res.render("post-detail", {
			posts,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json(err);
	}
});

module.exports = router;
