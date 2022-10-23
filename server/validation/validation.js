import Joi from "joi";
import express from "express";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export function validatePatients(req, res, next) {
  const patientSchema = Joi.object({
    id: Joi.string().max(9).required(),
    full_name: Joi.string().max(45).required(),
    address: Joi.string().max(45).required(),
    dob: Joi.date().required(),
    phone_number: Joi.string().max(45),
    cell: Joi.string().max(45).required(),
    date_pos: Joi.date(),
    date_neg: Joi.date(),
    vax_date1: Joi.date(),
    vax_date2: Joi.date(),
    vax_date3: Joi.date(),
    vax_date4: Joi.date(),
    vax_creator1: Joi.string().max(45),
    vax_creator2: Joi.string().max(45),
    vax_creator3: Joi.string().max(45),
    vax_creator4: Joi.string().max(45),
  });

  const { error, value } = patientSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  next();
}
