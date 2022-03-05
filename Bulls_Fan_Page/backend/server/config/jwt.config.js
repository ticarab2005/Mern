const jwt = require("jsonwebtoken");

// it's a way to verify that the person that's trying to access that page has a cookie that has been signed in by our application. Otherwise it's an invalid cookie
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
}