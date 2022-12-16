const router = require('express').Router();
const { BlogComment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newProject = await BlogComment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newProject)
    res.status(200).json(newProject);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
