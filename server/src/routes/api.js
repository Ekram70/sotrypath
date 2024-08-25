const express = require('express');
const router = express.Router();

const {
  registration,
  login,
  verify,
  logout,
  getUser,
} = require('../controllers/UsersController');
const verifyJWT = require('../middlewares/verifyJWT');
const { validateLogin } = require('../middlewares/authValidation');
const validateRequest = require('../middlewares/validateRequest');
const authVerify = require('../middlewares/authVerify');
const {
  createStory,
  getAllStories,
  getSingleStory,
} = require('../controllers/StoriesController');

router.post('/register', registration);
router.post('/login', validateLogin, validateRequest, login);
router.get('/verify', verifyJWT);
router.get('/logout', logout);
router.get('/getUser', authVerify, getUser);

router.post('/story', authVerify, createStory);
router.get('/getAllStories', getAllStories);
router.get('/stories/:id', getSingleStory);

module.exports = router;
