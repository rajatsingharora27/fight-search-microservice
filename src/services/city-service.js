const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Some Error occured in city Service layer");
      throw error;
    }
  }

  async deleteCity(id) {
    try {
      const city = await this.cityRepository.deleteCity(id);
      return city;
    } catch (error) {
      console.log("Some Error occured in city Service layer");
      throw error;
    }
  }

  async updateCity(id, data) {
    try {
      const city = await this.cityRepository.updateCity(id, data);
      return city;
    } catch (error) {
      console.log("Some Error occured in city Service layer");
      throw error;
    }
  }
  async getCity(id) {
    try {
      const city = await this.cityRepository.getCity(id);
      return city;
    } catch (error) {
      console.log("Some Error occured in city Service layer");
      throw error;
    }
  }

  async getAll() {
    try {
      const cities = await this.cityRepository.getAllCities();
      return cities;
    } catch (error) {
      console.log("Some error occured while fetching all cities");
      throw error;
    }
  }
}

module.exports = CityService;
