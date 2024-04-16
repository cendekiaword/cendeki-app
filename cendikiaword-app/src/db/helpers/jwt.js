const jwt = require('jsonwebtoken');

const signToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET)
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    signToken,
    verifyToken
}