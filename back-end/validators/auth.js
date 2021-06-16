const { body } = require("express-validator");

exports.userSignupValidator = [
    body("username").not().isEmpty().withMessage("username is required"),
    body("fullname").not().isEmpty().withMessage("fullname is required"),
    body("password").not().isEmpty().isLength({min:4}).matches('repeatpassword').withMessage("Passwords must match."),
    body("email").isEmail().withMessage("Must be a valid email address"),
    body("password").not().isEmpty().isLength({min:4}).matches('repeatpassword').withMessage("Passwords must match."),
    body('teamname').not().isEmpty().withMessage("team name is required"),
    body('teampass').not().isEmpty().withMessage("team password is required")
];


exports.userLoginValidator= [
    body("username").not().isEmpty().withMessage("username is required"),
    body("password").not().isEmpty().isLength({min:4}).withMessage("password is required"),
]