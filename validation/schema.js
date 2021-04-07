const joi = require('joi')

const schema = {
    register: joi.object({
        username: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    }),
    
    login: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })

}

module.exports = schema