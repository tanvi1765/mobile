const { mobileService } = require("../services");

// create-mobile
const createmobile = async (req, res) => {
  try {
    const reqBody = req.body;

    const mobileEx = await mobileService.getmobileByName(reqBody.mobile_name);
    if (mobileEx) {
      throw new Error(`please add other mobile this mobile already created.`);
    }

    const mobile = await mobileService.createmobile(reqBody);

    res.status(200).json({
      success: true,
      message: "mobile create successfully!",
      data: {
        mobile,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-mobile
const getmobileList = async (req, res) => {
  try {
    const getmobile = await mobileService.getmobileList();

    res.status(200).json({
      success: true,
      message: "mobile List!",
      data: {
        getmobile,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-mobile
const deleteRecord = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const cateExists = await mobileService.getmobileById(mobileId);
    if (!cateExists) {
      throw new Error("mobile not found!");
    }

    await mobileService.deletemobile(mobileId);

    res.status(200).json({
      success: true,
      message: "mobile delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get mobile by id
const getmobileDetails = async (req, res) => {
  try {
    const getDetails = await mobileService.getmobileById(
      req.params.mobileId
    );
    if (!getDetails) {
      throw new Error("mobile not found!");
    }

    res.status(200).json({
      success: true,
      message: "mobile details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update mobile by id
const updatemobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;

    const cateExists = await mobileService.getmobileById(mobileId);
    if (!cateExists) {
      throw new Error("mobile not found!");
    }

    await mobileService.updateDetails(mobileId, req.body);

    res.status(200).json({
      success: true,
      message: "mobile details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createmobile,
  getmobileList,
  deleteRecord,
  getmobileDetails,
  updatemobile
};