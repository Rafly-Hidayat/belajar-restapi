const schema = require('./schema')

module.exports = {
    registerMhs: async (req, res, next) => {
        const value = await schema.register.validate(req.body)
        if(value.error) {
            res.json({
                value: false,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    }
}