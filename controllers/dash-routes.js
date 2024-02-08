const router = require("express").Router();
const {Blog} = require("../models");

const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
	try {
        res.render('dashboard')
        console.log('you made it!!');
		// const dbBlogData = await Blog.findAll();
		// const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
		// res.render("dashboard", {
		// 	blogs,
		// 	loggedIn: req.session.loggedIn,
		// });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;