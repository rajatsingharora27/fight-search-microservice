const {City}=require("../models/index");

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (err) {
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
            throw {error}
        }
    }
}

module.exports ={
    CityRepository
}


