const mongoose= require("mongoose");
const mobileSchema = new mongoose.Schema
(
    {
        mobile_name:{
            type:String,
            trime:true,
        },
        mobile_category:{
            type:String,
            trime:true,
        },
        mobile_version:{
            type:String,
            trim:true,
        },
        mobile_color:{
            type:String,
            trim:true,
        },
        mobile_model:{
            type:String,
            trim:true,
        },
        mobile_des:{
            type:String,
            trim:true,
        },
        is_active:{
            type:Boolean,
            default:true,
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const mobile= mongoose.module("mobile",mobileSchema);

module.exports = mobile;