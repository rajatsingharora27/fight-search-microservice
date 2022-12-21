const { City } = require("../models/index");
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
}

module.exports = CityRepository;
