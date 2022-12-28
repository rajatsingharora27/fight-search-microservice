const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("SomeThing went wrong in airplane repository");
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
