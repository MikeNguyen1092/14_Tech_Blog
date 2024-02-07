const User = require("./User");
const Blog = require("./blogs");

User.hasMany(Blog, {
	foreignKey: "user_id",
});

Blog.belongsTo(User, {
	foreignKey: "user_id",
});

module.exports = { User, Blog };
