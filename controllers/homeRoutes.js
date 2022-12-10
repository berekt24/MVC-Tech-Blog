const router = require('express').Router();
const { User, BlogPost, BlogComment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogData = await BlogPost.findAll({
      // attributes:[
      //     'id',
      //     'title',
      //     'created_at',
      //     'post_content'
      // ],
      include: [
        {
          model: BlogComment,
          attributes: ['id', 'blogComment_text', 'post_id', 'user_id'],
          include: {
            model: User, 
            attributes: ['name']
          }
        },
      ],
    });

    // Serialize data so the template can read it
    const dbPostData = blogData.map((postData) => postData.get({ plain: true }));
    console.log(dbPostData);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      dbPostData, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogpost/:id', async (req, res) => {
  try {
    const projectData = await BlogPost.findByPk(req.params.id, {
      include: [
        
           User
          // attributes: ['name'],
      
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
