const { mobile } = require("../models");

const createmobile = async (reqBody) => {
    return mobile.create(reqBody);
};

const getmobileByName = async (mobile_name) => {
    return mobile.findOne({ mobile_name });
};

const getmobileList = async (filter, options) => {
    return mobile.find();
};

const deletemobile = async (mobileId) => {
    return mobile.findByIdAndDelete(mobileId);
};

const getmobileById = async (mobileId) => {
    return mobile.findById(mobileId);
};

const updateDetails = async () => {
    return mobile.findByIdAndUpdate();
};

module.exports = {
    createmobile,
    getmobileByName,
    getmobileList,
    deletemobile,
    getmobileById,
    updateDetails
};