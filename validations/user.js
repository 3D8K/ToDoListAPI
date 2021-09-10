const Joi = require('joi');

module.exports.userValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string.min(5).max(25).required(),
        surname: Joi.string.min(5).max(30).required(),
        age: Joi.number().integer().min(14).max(99)
    })
    return schema.validate(data)
}