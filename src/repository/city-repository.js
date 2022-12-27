const { City, airport } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      console.log("Something went wrong in data layer");
      throw { err };
    }
  }

  async deleteCity({ id }) {
    try {
      const city = await City.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in data layer");
      throw { error };
    }
  }

  async getCity({ id }) {
    try {
      const city = await City.findByPk({
        id: id,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in data layer");
      throw { error };
    }
  }

  async updateCity(id, data) {
    try {
      const cityUpdate = await City.update(data, {
        where: {
          id: id,
        },
      });
      return cityUpdate;
    } catch (error) {
      console.log("Something went wrong in data layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const filteredCities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        console.log(filteredCities);
        return filteredCities;
      } else {
        const cities = await City.findAll();
        return cities;
      }
    } catch (error) {
      console.log("Something went wrong in data layer");
      throw { error };
    }
  }

  async addMultipleCities(cityList) {
    try {
      if (cityList.length === 0) {
        return "Add City";
      } else {
        const cities = await City.bulkCreate(cityList);
        return cities;
      }
    } catch (error) {
      console.log("error occured while adding multiple city in table");
      throw { error };
    }
  }

  async getAllAirport(cityName) {
    try {
      //get the City id from the cityTable;
      const cityId = await City.findOne({
        where: {
          name: cityName.name,
        },
      });
      // console.log(cityId.id);
      const airports = await airport.findAll({
        where: {
          cityId: cityId.id,
        },
      });

      // console.log(airports);
      return airports;
    } catch (error) {
      console.log("error occured while in repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
