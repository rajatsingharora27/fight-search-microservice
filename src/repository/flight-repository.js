const { Op, where } = require("sequelize");
const { Flights } = require("../models/index");

class FlightRepository {
  #createFlight(data) {
    let filterObj = {};

    if (data.arrivalAirportId) {
      filterObj.arrivalAirportId = arrivalAirportId;
    }
    if (data.departureAirportId) {
      filterObj.departureAirportId = departureAirportId;
    }

    if (data.minPrice) {
      Object.assign(filterObj, { price: { [Op.gte]: data.minPrice } });
    }

    return filterObj;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Some error in Flight Repository");
      throw error;
    }
  }

  async getFlight(id) {
    try {
      const flight = await Flights.findByPk(id);
      return flight;
    } catch (error) {
      console.log("Some error in repository");
      throw error;
    }
  }

  async getAllFlight(filter) {
    try {
      let fliterObject = this.#createFlight(filter);
      const flight = await Flights.findAll({
        where: fliterObject,
      });
      return flight;
    } catch (error) {
      console.log("Some error in repository");
      throw error;
    }
  }

  async updateFlight(flightid, data) {
    try {
      const flight = await Flights.update(data, {
        where: {
          id: flightid,
        },
      });
      // const f = this.getFlight(flightid);
      // console.log(f);
      return flight;
    } catch (error) {
      console.log("Some error in repository");
      throw error;
    }
  }
}
module.exports = FlightRepository;

/**
 * findAll({
 *  where:{
 *    arrivalId:12,
 *    departureId:34,
 *    price:{
 *      [Op.gte]:500
 * }
 * }
 * })
 *
 */
