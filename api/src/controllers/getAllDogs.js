const getApiInfo = require ('./getApiInfo.js');
const getDbInfo = require ('./getDbInfo.js');


 const getAllDogs = async() => {
    const infoApi = await getApiInfo();
    const infoDb = await getDbInfo();
    //concatenamos en un solo array y lo aplanamos
    return [infoApi, ...infoDb].flat();
}
   
module.exports = getAllDogs;

