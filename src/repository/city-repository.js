const {City}=require("../models/index");

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (err) {
            console.log("Something went wrong in data layer")
            throw {err}
        }
    }

    async deleteCity({id}){
        try {
            const city=await City.destroy({
                where:{
                    id:id
                }
            });
        } catch (error) {
            console.log("Something went wrong in data layer");
            throw {error}
        }
    }

    async getCity({id}){
        try {
            const city=await City.findByPk({
                id:id,
            })
        } catch (error) {
            console.log("Something went wrong in data layer");
            throw {error}
        }

    }

    async updateCity(id, data){
        try {
            const cityUpdate=await City.update(data,{
                where:{
                    id:id,
                }
            });
            return cityUpdate;
        } catch (error) {
            console.log("Something went wrong in data layer");
            throw {error}
        }
    }
}

module.exports ={
    CityRepository
}


