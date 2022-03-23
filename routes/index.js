var express = require('express');
var session = require('express-session');
var router = express.Router();
var adminController = require('../controllers/adminController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/logout',(req,res) => {
  req.session.destroy();
  res.send('/');
});
// Admin
router.get('/admin', adminController.index );
router.post('/act_login', adminController.login );

// Juri 
router.get('/juri', adminController.juri);

module.exports = router;
