var express = require('express');
var router = express.Router();
/* GET home default page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    content: ''
  });
});

module.exports = router;
/*Get home page */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    content:'', 
  });
});

module.exports = router;
/* Get about page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { 
    title: 'About Me',
    content: 'Hello, Im Ryan Chung, currently a student at Ontario Tech University. While not at school I love to play soccer, volleyball, and video games.',

  });
});
router.use(express.static('/public/Assets/Content/aboutmestyless.css'))

module.exports = router;
/* Get projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects',
    content:'Python Projects',

  });
});
router.use('/project1',express.static('/public/Assets/images/project1.py'))
router.use('/project2',express.static('/public/Assets/images/project2.py'))
// routes/projects.js
// ... (existing code)

router.get('/project1', (req, res) => {
  res.render('project1', { title: 'Project 1' });
});

router.get('/project2', (req, res) => {
  res.render('project2', { title: 'Project 2' });
});

// Add routes for more projects


module.exports = router;
/* Get Contact Me Page */
router.get('/contactme', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me',
    content:'', 
  });
});

module.exports = router;