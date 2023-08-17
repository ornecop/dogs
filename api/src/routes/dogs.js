const {Router} = require('express');
const {Dog , Temperament} = require ('../db');
const getAllDogs = require('../controllers/getAllDogs');
const router = Router();
const getDogs = require('../controllers/getApiId')


router.get('/', async (req, res) => {
 
    const {name} = req.query
    //obtenemos info de las razas de la api y de la bdd
    const allDogs = await getAllDogs();
    try {
        if (name){
                      
            //filtramos todas las razas de los perros especificadas con el parametro name
            const dogsName = allDogs.filter((breed) => breed.name.toLowerCase().includes(name.toLowerCase()))
            dogsName.length ?
            res.status(200).send (dogsName):
            res.status(404).send('The breed of dog has not been found');
        } else{       
            //sino se proporciono ningun parametro name devolvemos todos los datos de las razas
            res.status(200).send(allDogs);
        }
    }catch(err){
        return res.status(404).json(err)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    // const allDogs = await getAllDogs();
    
    try {
        const sourse = isNaN(id) ? "BDD" : "API";
        const dog = await getDogs(id, sourse);
        res.status(200).json(dog);
    
    }catch(err){
        return res.status(404).json(err)
    }
})


router.post('/', async (req, res) => {
    // console.log(req.body)
    try {
        const {
            image,
            name,
            height,
            weight,
            lifeSpan,
            temperaments
        } = req.body;

        // Validamos los campos requeridos
        
        if (!name || !height || !weight || !lifeSpan || !temperaments) {
            return res.status(400).json({ error: 'Required fields are missing to create a new dog.' });
        }
        // Creamos el perro
        let temperamentDb = await Temperament.findAll({
            where: { name: temperaments }
        });
        const dogCreated = await Dog.create({
            image,
            name,
            height,
            weight,
            lifeSpan,
        });

        // asocioamos el temperamento al perro creado
        // const temperamentDb = await Temperament.findAll({ where: { name: temperament } });
        dogCreated.addTemperament(temperamentDb);

        // enviamos la respuesta con el perro creado
        res.status(200).json(dogCreated);

    } catch (err) {
        res.status(404).json(err.message);
    }
})

module.exports = router;






