const { check, validationResult } = require('express-validator');

exports.runValidation = ( req, res, next ) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(422).json({
            message: errors.array()[0].msg
        })
    }
    next()
}

exports.validationCheck = [
    check('name', 'All fields must be filled correctly').notEmpty(),
    check('phone', 'All fields must be filled correctly').notEmpty(),
    check('address', 'All fields must be filled correctly').notEmpty(),
    check('status', 'All fields must be filled correctly').notEmpty(),
    check('in_date_at', 'All fields must be filled correctly').notEmpty(),
    check('out_date_at', 'All fields must be filled correctly').notEmpty()
]   