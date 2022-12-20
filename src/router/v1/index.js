const express=require('express');
const router = express.Router();

const CityController = require('../../controller/city-controller');

router.post('/create', CityController.create);

module.exports=router;