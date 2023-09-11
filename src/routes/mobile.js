const express = require("express");
const { mobileValidation } = require("../validation");
const { mobileController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create mobile
router.post(
  "/create-mobile",
  validate(mobileValidation.createmobile),
  mobileController.createmobile
);

// Get mobile list
router.get(
  "/list",
  mobileController.getmobileList
);
// get mobile details by id
router.get(
  "/get-details/:mobileId",
  mobileController.getmobileDetails
)

// update mobile
router.put(
  "/update/:mobileId",
  mobileController.updatemobile
)

// delete mobile
router.delete(
  "/delete/:mobileId",
  mobileController.deleteRecord
)

module.exports = router;