const { AirportService } = require("../services/index");

const airportService = new AirportService();

const createAirport = async (req, res) => {
  try {
    console.log(req.body);
    const airport = await airportService.addAirport(req.body);
    return res.status(200).json({
      data: airport,
      message: "Airport created",
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

const updateAirport = async (req, res) => {
  try {
    console.log(req.body);
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      message: "Airport Updated",
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

const deleteAirport = async (req, res) => {
  try {
    console.log(req.params.id);
    const airport = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      message: "Airport Deleted",
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

const getAirport = async (req, res) => {
  try {
    console.log(req.params.id);
    const airport = await airportService.getAirport(req.params.id);
    console.log(airport);
    return res.status(200).json({
      data: airport,
      message: "Airport sent",
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

const getAllAirport = async (req, res) => {
  try {
    //   console.log(req.body);
    const airport = await airportService.getAllAirports(req.query);
    return res.status(200).json({
      data: airport,
      message: "Airport sent",
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

const addMultipleAirport = async (req, res) => {
  try {
    //   console.log(req.body);
    const airport = await airportService.addMultipleAirport(req.body);
    return res.status(200).json({
      data: airport,
      message: "Airport added",
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

module.exports = {
  createAirport,
  updateAirport,
  deleteAirport,
  getAirport,
  getAllAirport,
  addMultipleAirport,
};
