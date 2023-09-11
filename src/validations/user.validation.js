const Joi = require("joi");
const
// create mobile
const createmobile = {
    body: Joi.object().keys({
      mobile_name:Joi.string().required().trim(),
      mobile_mobile:Joi.string().required().trim(),
      mobile_version:Joi.string().required().trim(),
      mobile_color:Joi.string().required().trim(),
      mobile_model:Joi.string().required().trim(),
      mobile_desc: Joi.string().required().trim(),
    }),
};
/** GEt mobile list */
const getmobileList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get mobile details by id */
const getDetails = {
  params: Joi.object().keys({
    mobileId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createmobile,
  getDetails,
  getmobileList,
};

