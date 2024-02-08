const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
	try {
		res.render("dashboard", {
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error in get dashboard route" });
	}
});

module.exports = router;
