const Joi = require("joi");

exports.updateProfileSchema = Joi.object({
  firstName: Joi.string().min(1).max(50).required(),
  lastName: Joi.string().min(1).max(50).required(),
  gender: Joi.string().valid("Male", "Female", "Other", "").optional(),
  dateOfBirth: Joi.string().isoDate().allow("").optional(),
  about: Joi.string().max(500).allow("").optional(),
  contactNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .allow("")
    .optional(),
});
