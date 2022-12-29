const { airport } = require("../models/index");
class AirportRepository {
  async createAirport(airportData) {
    try {
      const newAirport = await airport.create(airportData);
      return newAirport;
    } catch (error) {
      console.log(
        "Something went wrong in Airport Repoitory while creating airport"
      );
      throw { error };
    }
  }

  //delete Airport
  async deleteAirport(id) {
    try {
      const newAirport = await airport.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      console.log(
        "Something went wrong in Airport Repoitory while creating airport"
      );
      throw { error };
    }
  }

  //Update Airport
  async updateAirport(id, airportData) {
    try {
      const newAirport = await airport.update(airportData, {
        where: {
          id: id,
        },
      });
      return newAirport;
    } catch (error) {
      console.log(
        "Something went wrong in Airport Repoitory while Updating airport"
      );
      throw { error };
    }
  }

  //getAirport
  async getAirport(id) {
    try {
      const newAirport = await airport.findByPk(id);
      return newAirport;
    } catch (error) {
      console.log(
        "Something went wrong in Airport Repoitory while Getting airport"
      );
      throw { error };
    }
  }

  //get All airport
  async getAllAirport(filter) {
    try {
      if (filter.name) {
        const filteredAirport = await airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        console.log(filteredAirport);
        return filteredAirport;
      } else {
        const airports = await airport.findAll();
        return airports;
      }
    } catch (error) {
      console.log(
        "Something went wrong in Airport Repoitory while creating airport"
      );
      throw { error };
    }
  }

  //Add multiple Airport
  async createAirport(airportData) {
    try {
      const newAirport = await airport.bulkCreate(airportData);
      return newAirport;
    } catch (error) {
      console.log(
        "Something went wrong in Airport Repoitory while creating airport"
      );
      throw { error };
    }
  }
}

module.exports = AirportRepository;
