const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'danya-kim',
    password: 'adminadmin1',
    database: 'enterprise'
});

db.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err);
    } else {
        console.log('Успешное подключение к базе данных');
    }
});

const query = 'SELECT employee_id, employee_name, department_id FROM employees';

db.query(query, (err, results) => {
    if (err) {
        console.error('Ошибка выполнения запроса:', err);
    } else {
        const employees = results.map(result => {
            return {
                employeeId: result.employee_id,
                employeeName: result.employee_name,
                departmentId: result.department_id
            };
        });
        console.log('Результаты запроса:', employees);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
