const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Temperament', {
 
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
     {
      timestamps: false
     } 
    );
  };