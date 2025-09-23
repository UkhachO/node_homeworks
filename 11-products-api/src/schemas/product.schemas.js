import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().trim().min(1).required(),
  price: Joi.number().precision(2).min(0).required(),
});
