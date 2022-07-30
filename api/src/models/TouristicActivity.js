const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'touristicActivity',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM('Winter', 'Spring', 'Summer', 'Autumn'),
        allowNull: false,
      },
    },
    {
      tableName: 'TouristicActivity',
    }
  );
};
