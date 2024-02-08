router.get("/post/:id", async (req, res) => {
	try {
		const postId = req.params.id;
		const post = await Post.findByPk(postId, {
			include: [{ model: User, attributes: ["username"] }],
		});

		// Fetch comments related to the post if needed

		res.render("post-detail", {
			post: post.get({ plain: true }),
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json(err);
	}
});
