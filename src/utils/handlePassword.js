const bcryptjs = require('bcryptjs')


/**
 * Password without encriptation.
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
}


const compare = async (passwordPlain, hashPassword) => {
    return bcryptjs.compare(passwordPlain, hashPassword)
}
 



module.exports = {encrypt, compare}