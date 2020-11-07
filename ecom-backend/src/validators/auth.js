const { check, validationResult } = require('express-validator');

exports.validateSignUpRequest = [
    check('firstName').notEmpty().withMessage('firstName is required'),
    check('lastName').notEmpty().withMessage('firstName is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 8, max: 16}).withMessage('Valid password must be at least 8 charactes long and less than 16 character'),
];

exports.validateSignInRequest = [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 8, max: 16}).withMessage('Valid password must be at least 8 charactes long and less than 16 character'),
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
}