const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
	try {
		res.render("dashboard", {
			logged_in: req.session.logged_in,
		});
		console.log("you made it!!");
		// const dbBlogData = await Blog.findAll();
		// const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
		// res.render("dashboard", {
		// 	blogs,
		// 	loggedIn: req.session.loggedIn,
		// });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error in get dashboard route" });
	}
});

module.exports = router;
