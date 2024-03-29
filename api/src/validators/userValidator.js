import joi from 'joi';

export const userValidator = (user) => {
    const registeruserSchema = joi.object({
        Username: joi.string().required(),
        Email: joi.string().email().required(),
        password: joi.string().min(4).required(),
    });
    return registeruserSchema.validate(user);
}
export const updateUserValidator = (user) => {
    const updateUserSchema = joi.object({
        Username: joi.string().required(),
        Email: joi.string().email().required(),
    });
    return updateUserSchema.validate(user);
}

export const userLoginValidator = (user) => {
    const userLoginValidatorSchema = joi.object({
        Username: joi.string().required(),
        password: joi.string().min(4).required(),
    });
    return userLoginValidatorSchema.validate(user);
}