const express=require('express');
const router = express.Router();

const CityController = require('../../controller/city-controller');

router.post('/city', CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);

module.exports=router;