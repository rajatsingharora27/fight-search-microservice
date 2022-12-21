const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(200).json({
      data: city,
      message: "City created",
      success: true,
    });
  } catch (error) {
    console.log("Some error occured in controller");
    return res.status(500).json({
      data: {},
      message: error,
      success: false,
    });
  }
};

const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id,req.body);
    return res.status(200).json({
      data: city,
      message: "City Updated",
      success: true,
    });
  } catch (error) {
    console.log("Some error occured in controller");
    return res.status(500).json({
      data: {},
      message: error,
      success: false,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const city = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: city,
      message: "City Deleted",
      success: true,
    });
  } catch (error) {
    console.log("Some error occured in controller");
    return res.status(500).json({
      data: {},
      message: error,
      success: false,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      message: "City recived",
      success: true,
    });
  } catch (error) {
    console.log("Some error occured in controller");
    return res.status(500).json({
      data: {},
      message: error,
      success: false,
    });
  }
};

const getAll= async (req,res)=>{

    try {
        const allCity= await cityService.getAll();
        res.status(200).json({
            data:allCity,
            message:"Success",
            success:true
        })
    } catch (error) {
        console.log("Error in the cotroller");
        res.status(500).json({
            data:{},
            message:"Some error occured",
            error:error
        })
    }



}


module.exports = {
  create,
  update,
  get,
  destroy,
  getAll
};
