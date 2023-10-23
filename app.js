const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('enterprise', 'danya-kim', 'adminadmin1', {
    host: 'localhost',
    dialect: 'mysql',
});

const Department = require('./models/department')(sequelize);
const Employee = require('./models/employee')(sequelize);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Enterprise API',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());


app.get('/departments', async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при получении отделов' });
    }
});


app.post('/departments', async (req, res) => {
    const { department_name } = req.body;
    try {
        const department = await Department.create({ department_name });
        res.json(department);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при создании отдела' });
    }
});

app.delete('/departments', async (req, res) => {
    const { department_id } = req.body;
    try {
        const department = await Department.destroy({
            where: { department_id: department_id },
        });
        if (department === 1) {
            res.status(200).json({ message: 'Отдел успешно удален' });
        } else {
            res.status(404).json({ error: 'Отдел не найден' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при удалении отдела' });
    }
});

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при получении списка работников' });
    }
});

app.post('/employees', async (req, res) => {
    console.log(req.body);
    const { employee_name, department_id } = req.body;
    console.log('я тут')
    try {
        const employee = await Employee.create({ employee_name, department_id });
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при создании работника' });
    }
});

app.delete('/employees', async (req, res) => {
    const { employee_id } = req.body;
    try {
        const employee = await Employee.destroy({
            where: { employee_id: employee_id },
        });

        if (employee === 1) {
            res.status(200).json({ message: 'Работник успешно удален' });
        } else {
            res.status(404).json({ error: 'Работник не найден' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при удалении работника' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
