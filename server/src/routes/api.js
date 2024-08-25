const express = require('express');
const router = express.Router();

const {
  registration,
  login,
  verify,
  logout,
} = require('../controllers/UsersController');
const verifyJWT = require('../middlewares/verifyJWT');
const { validateLogin } = require('../middlewares/authValidation');
const validateRequest = require('../middlewares/validateRequest');

router.post('/registration', registration);
router.post('/login', validateLogin, validateRequest, login);
router.get('/verify', verifyJWT);
router.get('/logout', logout);

module.exports = router;
