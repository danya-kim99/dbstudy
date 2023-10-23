const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Employee = sequelize.define('Employee', {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        employee_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamps: false,
        });

    Employee.belongsTo(sequelize.models.Department, {
        foreignKey: 'department_id',
        onDelete: 'CASCADE',
        allowNull: false,
    });

    return Employee;
};
