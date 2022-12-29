const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async addAirport(data) {
    try {
      const newAirport = await this.airportRepository.createAirport(data);
      return newAirport;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

  //Update Airport
  async updateAirport(id, data) {
    try {
      const newAirport = await this.airportRepository.updateAirport(id, data);
      return newAirport;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

  //delete Airport
  async deleteAirport(id) {
    try {
      const newAirport = await this.airportRepository.deleteAirport(id);
      return newAirport;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

  //getAirport
  async getAirport(id) {
    try {
      const newAirport = await this.airportRepository.getAirport(id);
      return newAirport;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }

  //getAll
  async getAllAirports(filter) {
    try {
      console.log("in service");
      const airports = await this.airportRepository.getAllAirport({
        name: filter.name,
      });
      console.log(airports);
      return airports;
    } catch (error) {
      console.log("Error in service layer to fetch all airports");
      throw error;
    }
  }

  //Add multiple airport
  async addMultipleAirport(data) {
    try {
      const newAirport = await this.airportRepository.addMultipleAirport(data);
      return newAirport;
    } catch (error) {
      console.log("Error in service layer");
      throw error;
    }
  }
}

module.exports = AirportService;
