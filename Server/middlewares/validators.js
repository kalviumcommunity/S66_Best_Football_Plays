const { body, validationResult } = require('express-validator');

// User validation middleware
const validateUser = [
    body('username')
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateVideo = [
  body('title')
      .notEmpty().withMessage('Title is required'),
  
  body('description')
      .notEmpty().withMessage('Description is required'),

  body('url')
      .notEmpty().withMessage('URL is required')
      .isURL().withMessage('URL must be a valid URL'),

  (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
      next();
  }
];

module.exports = { validateUser, validateVideo };

