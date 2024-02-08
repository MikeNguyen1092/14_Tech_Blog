const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
	try {
		console.log("User ID from session:", req.session.user_id);
		console.table(req.session);
		const newPost = await Post.create({
			...req.body,
			user_id: req.session.user_id,
		});
		res.status(200).json(newPost);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error in post dashboard route" });
	}
});
module.exports = router;