const { Flights } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Some error in Flight Repository");
      throw error;
    }
  }
}
module.exports = FlightRepository;
