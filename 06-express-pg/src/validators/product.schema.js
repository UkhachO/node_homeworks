import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  price: Joi.number().min(0).precision(2).required(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(2).max(255),
  price: Joi.number().min(0).precision(2),
}).min(1);
