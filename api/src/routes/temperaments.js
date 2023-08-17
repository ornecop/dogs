const { Router } = require('express');
const axios = require ('axios');
const { Temperament } = require ('../db');
// const { route } = require('./dogs');

const temperamentsRoute = Router();


temperamentsRoute.get('/', async (req, res) => {
    try {
        //se realiza peticion a la Api para obtener info sobre razas de perros
        const temperamentsApi = await axios.get('https://api.thedogapi.com/v1/breeds')
        
        //extraemos los temperamentos de las razas de perros y los guardamos en un array
        const temperaments = temperamentsApi.data.map(breed => breed.temperament)
        const allTemperament = temperaments.join().replace(" ","").split(",")
 
        const temperamentsFilter = allTemperament.filter((elemento, indice) => {
            return allTemperament.indexOf(elemento.trim()) === indice;
        })

        const pruebaSort = temperamentsFilter.sort((a,b)=> {
            if(a<b) return -1
          })
        const allTemperaments = []   

        for (const breed of pruebaSort) {
            // Verificamos si el valor de "name" no es "undefined"
            if (breed !== undefined && breed !== "") {
           //se busca si temperamento existe en la bdd
                const viewExist = await Temperament.findOne({ where: { name: breed } });
    viewExist
    //pusheamos los temperamentos en ambos casos

      ? allTemperaments.push(viewExist)
      : allTemperaments.push(await Temperament.create({ name: breed }));
            }
        }

        
        res.status(200).send(allTemperaments);
    } catch (error) {
              
        //manejamos cualquier error que pueda ocurrir durante la ejecucion del codigo
        return res.status(500).send('Internal server error');
    }
});

module.exports = temperamentsRoute;

