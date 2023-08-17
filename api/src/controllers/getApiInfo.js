const axios = require ('axios');

const getApiInfo = async() => {

    try{
        const ApiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
        
        if (!Array.isArray(ApiUrl.data)) {
            throw new Error("API response is not an array");
        }
        
        const apiInfo = ApiUrl.data.map((breed) =>
            {
                //creamos un obj con la info que nos interesa de cada raza
                return {
                    id: breed.id,
                    name: breed.name,
                    image: breed.image.url,
                    height: breed.height.metric,
                    weight: breed.weight.metric,
                    lifeSpan: breed.life_span,
                    Temperaments: breed.temperament ? breed.temperament.split(', ') : [],
                    // tempeId: breed.tempeId,
                    created: false
                }
                
            })
            return apiInfo;

    } catch(error){
        return null;
    }

}

module.exports = getApiInfo;


