const express=require("express");
require("dotenv").config();



module.exports={
    express,
    PORT:process.env.PORT
}