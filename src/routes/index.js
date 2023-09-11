const express = require("express");

const mobileRoute =require("./mobile");

const router =express.Router();

router.use("/mobile",mobileRoute);

