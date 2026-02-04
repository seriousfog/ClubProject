var express = require('express');
var router = express.Router();
const clubController = require('../controllers/clubController');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/club', function(req, res) {
    res.render('clubs/clubPage');
})

router.get('/registeruser', function(req, res) {
    res.render('users/registerUser');
})

router.get('/registerofficer', function(req, res) {
    res.render('users/registerOfficer');
})

router.get('/club1', function(req, res) {
    res.render('clubs/club');
})

router.get('/login', function(req, res) {
    res.render('users/login');
})

router.get('/clubcreate', function(req, res) {
    res.render('mixins/clubCreationForm');
})


router.get('/test', function(req, res) {
    res.render('mixins/test');
})



/*
router.get('/registerUser', userController.renderUserRegistration);
router.get('/registerOfficer', userController.renderOfficerRegistration);
router.get('/login', userController.renderLogin);
*/

module.exports = router;
