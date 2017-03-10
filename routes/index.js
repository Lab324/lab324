var express = require('express');
var router = express.Router();

var UserInfo = require('../models/userInfo');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info', function(req, res, next) {
  res.render('info', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  UserInfo.find(function (err, result) {
      res.render('login', {
      title: 'Expaaress' ,
      obj:result
    });
  })

});

router.get('/manage', function(req, res, next) {
  res.render('manage', { title: 'Express' });
});

router.get('/password', function(req, res, next) {
  res.render('password', { title: 'Express' });
});

router.get('/person', function(req, res, next) {
  res.render('person', { title: 'Express' });
});

router.get('/task', function(req, res, next) {
  res.render('task', { title: 'Express' });
});

router.get('/taskDetail', function(req, res, next) {
  res.render('taskDetail', { title: 'Express' });
});

router.get('/typo', function(req, res, next) {
  res.render('typo', { title: 'typo' });
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'gallery' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
module.exports = router;
