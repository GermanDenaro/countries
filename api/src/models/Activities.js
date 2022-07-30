const { DataTypes } = require('sequelize');
const TouristicActivity = require('./TouristicActivity');
const Country = require('./Country');

module.exports = (sequelize) => {
  // defino el modelo
  const Activities = sequelize.define('activities', {
    CountryId: {
      type: DataTypes.STRING(3),
      references: {
        model: 'Country',
        key: 'id',
      },
    },
    TouristicActivityId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TouristicActivity',
        key: 'id',
      },
    },
  });
};
