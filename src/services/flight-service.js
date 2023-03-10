const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        console.log("error");
        throw { error: "Arrival Time cannot be less than departure Time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const numberOfSeats = airplane.capacity;
      let dataObject = { ...data, totalSeats: numberOfSeats };
      const flight = await this.flightRepository.createFlight(dataObject);
      return flight;
    } catch (error) {
      console.log("Some error occured in Flight service");
      throw error;
    }
  }

  async getAllFlights(filter) {
    try {
      const flight = await this.flightRepository.getAllFlight(filter);
      return flight;
    } catch (error) {
      console.log("Some Error in the service");
      throw error;
    }
  }
}

module.exports = FlightService;
