const DogApi = "https://api.thedogapi.com/v1/breeds";
const { Dog } = require("../db");
const axios = require("axios");
const getAllDogs = require('./getAllDogs')

const dogId = async (id) => {
    const allDogs = await getAllDogs();
     const filtered = allDogs.filter((e)=> e.id == id);
     return filtered
  }

// me falta que me busque al servidor
const getDogs = async (id, sourse) => {
  if (sourse === "API") {
    return await dogId(id);
  }
  return await Dog.findByPk(id);
};

module.exports = getDogs;