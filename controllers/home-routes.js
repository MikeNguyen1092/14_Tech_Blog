const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
	try {
		const dbPostData = await Post.findAll({
			include: [{ model: User, attributes: ["username"] }],
		});
		const posts = dbPostData.map((Post) => Post.get({ plain: true }));
		res.render("homepage", {
			posts,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json(err);
	}
});


router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("login");
});

module.exports = router;
