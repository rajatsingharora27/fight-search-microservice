const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Some Error occured in city Service layer");
      throw error;
    }
  }

  async deleteCity(id) {
    try {
      const city = await cityRepository.deleteCity(id);
      return city;
    } catch (error) {
      console.log("Some Error occured in city Service layer");
      throw error;
    }
  }

  async updateCity(id, data) {
    try {
      const city = await cityRepository.updateCity(id, data);
      return city;
    } catch (error) {
      console.log("Some Error occured in city Service layer");
      throw error;
    }
  }
  async getCity(id) {
    try {
      const city = await cityRepository.getCity(id);
      return city;
    } catch (error) {
      console.log("Some Error occured in city Service layer");
      throw error;
    }
  }
}

module.exports = {
  CityService,
};
