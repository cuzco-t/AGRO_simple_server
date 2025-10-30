const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Smoke = sequelize.define('Smoke', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'smoke',
    timestamps: true,
  });

  return Smoke;
};
