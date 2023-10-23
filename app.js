const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('enterprise', 'danya-kim', 'adminadmin1', {
    host: 'localhost',
    dialect: 'mysql',
});

const Department = require('./models/department')(sequelize);
const Employee = require('./models/employee')(sequelize);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Соединение с базой данных установлено.');

        const departments = await Department.findAll();
        console.log('Список отделов:');
        departments.forEach((department) => {
            console.log(department.dataValues);
        });

        const employees = await Employee.findAll();
        console.log('Список сотрудников:');
        employees.forEach((employee) => {
            console.log(employee.dataValues);
        });
    } catch (error) {
        console.error('Ошибка подключения к базе данных:', error);
    } finally {
        await sequelize.close();
    }
})();
