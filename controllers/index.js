const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashRoutes = require('./dash-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);
router.use('/post', postRoutes);

module.exports = router;
