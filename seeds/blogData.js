const { Blog } = require('../models');

const blogData = [
  {
    title: 'MVP',
    content: 'cool!',
    user_id: 1,
  },
  {
    title: 'MVP!!!',
    content: 'awesome!!!',
    user_id: 1,
  },
  {
    title: 'Express',
    content: 'amazing!',
    user_id: 2,
  },
  {
    title: 'handlebars',
    content: 'pretty awesome!',
    user_id: 3,
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
