const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Department = sequelize.define('Department', {
    department_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    department_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      timestamps: false,
    });

  return Department;
};
