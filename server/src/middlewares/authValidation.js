const { body, header } = require('express-validator');

const validateLogin = [
  header('Content-Type')
    .exists()
    .withMessage('must provide Content-Type')
    .equals('application/json')
    .withMessage('invalid Content-Type'),
  body('email')
    .exists()
    .withMessage('email is required')
    .bail()
    .isString()
    .withMessage('email must be a string')
    .bail()
    .notEmpty()
    .withMessage('email should not be empty')
    .bail()
    .trim(),
  body('password')
    .exists()
    .withMessage('password is required')
    .bail()
    .isString()
    .withMessage('passsword must be a string')
    .bail()
    .notEmpty()
    .withMessage('password should not be empty')
    .bail()
    .isLength({ min: 8 })
    .withMessage('passowrd must be 8 characters or more'),
];

module.exports = { validateLogin };
