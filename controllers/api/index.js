const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./BlogpostRoutes');
const commentRoutes = require('./CommentRoutes')

router.use('/users', userRoutes);
router.use('/blogpost', blogPostRoutes);
router.use('/comments', commentRoutes)
module.exports = router;
