const { Temperament } = require("../db");
const { Dog } = require("../db");
// const getApiInfo = require("./getApiInfo");

  const getDbInfo = async () => {
    const database = await Dog.findAll({
        include: {
            model : Temperament,
            attributes : ['name'],
            through: {
                attributes: [],
            }
        }
 
   })
   const dogTypes = database.map((dog) => {
    const Temperaments = dog.Temperaments.map((dog) => dog.name);
    return { ...dog.toJSON(), Temperaments};

}); 
return dogTypes;
}


module.exports = getDbInfo;