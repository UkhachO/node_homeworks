import Joi from 'joi';

export const productCreateSchema = Joi.object({
  name: Joi.string().min(2).max(200).required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().max(2000).allow(''),
});

export const productUpdateSchema = Joi.object({
  name: Joi.string().min(2).max(200),
  price: Joi.number().min(0),
  description: Joi.string().max(2000).allow(''),
}).min(1);
