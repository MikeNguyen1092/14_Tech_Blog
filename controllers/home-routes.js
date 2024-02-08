const router = require("express").Router();
const { Post } = require("../models");

const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
	try {
		const dbPostData = await Post.findAll();
		const posts = dbPostData.map((Post) => Post.get({ plain: true }));
		res.render("homepage", {
			posts,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/Post/:id", withAuth, async (req, res) => {
	// If the user is not logged in, redirect the user to the login page
	try {
		const dbGalleryData = await Gallery.findByPk(req.params.id, {
			include: [
				{
					model: Painting,
					attributes: ["id", "title", "artist", "exhibition_date", "filename", "description"],
				},
			],
		});
		const gallery = dbGalleryData.get({ plain: true });
		res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
	} catch (err) {
		console.log(err);
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
