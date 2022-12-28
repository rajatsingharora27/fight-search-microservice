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

module.exports = { createFlight };
