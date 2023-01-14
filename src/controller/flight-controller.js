const { FlightService } = require("../services/index");

const flightService = new FlightService();

async function createFlight(req, res) {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(200).json({
      data: flight,
      message: "succefully created a flight",
      success: true,
    });
  } catch (error) {
    console.log("Error in the cotroller");
    res.status(500).json({
      data: {},
      message: "Some error occured",
      error: error,
    });
  }
}

async function getAllFligtAccrdingToFilter(req, res) {
  try {
    const flight = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: flight,
      message: "succefully Fetachd flights",
      success: true,
    });
  } catch (error) {
    console.log("Error in the cotroller");
    res.status(500).json({
      data: {},
      message: "Some error occured",
      error: error,
    });
  }
}

async function getFlight(req, res) {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(200).json({
      data: flight,
      message: "succefully Fetched flights",
      success: true,
    });
  } catch (error) {
    console.log("Error in the cotroller");
    res.status(500).json({
      data: {},
      message: "Some error occured",
      error: error,
    });
  }
}

async function updateFlight(req, res) {
  try {
    const flight = await flightService.updateFlight(req.params.id, req.body);
    return res.status(200).json({
      data: flight,
      message: "succefully  flight updated",
      success: true,
    });
  } catch (error) {
    console.log("Error in the cotroller");
    res.status(500).json({
      data: {},
      message: "Some error occured",
      error: error,
    });
  }
}

module.exports = {
  getAllFligtAccrdingToFilter,
  createFlight,
  getFlight,
  updateFlight,
};
