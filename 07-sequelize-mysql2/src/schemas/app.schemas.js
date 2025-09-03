import Joi from 'joi';

export const appAddSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  size: Joi.number().positive().required(),
});

export const appUpdateSchema = Joi.object({
  name: Joi.string().min(1).max(255),
  size: Joi.number().positive(),
}).min(1);
