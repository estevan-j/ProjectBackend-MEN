const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Debes de pasar el objecto del usuario
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sign = jwt.sign({
        _id: user._id,
        role: user.role
    }, JWT_SECRET, {
        expiresIn: '2h'
    })
    return sign
}


const verifyToken = async(sessionToken) => {
    try {
        return jwt.verify(sessionToken, JWT_SECRET);
    } catch (error) {
        return null
    }
}

module.exports = { tokenSign, verifyToken }