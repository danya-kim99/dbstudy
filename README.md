*БД:*
CREATE DATABASE enterprise;

USE enterprise;

CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(255)
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(255),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments (department_name) VALUES ('Отдел разработки');
INSERT INTO departments (department_name) VALUES ('Отдел маркетинга');
INSERT INTO departments (department_name) VALUES ('Отдел продаж');

INSERT INTO employees (employee_name, department_id) VALUES ('Иванов', 1);
INSERT INTO employees (employee_name, department_id) VALUES ('Петров', 1);
INSERT INTO employees (employee_name, department_id) VALUES ('Сидоров', 2);

*Быстрый старт*
1. npm i
2. node app.js
3. http://localhost:3000/api-docs/ - Swagger - документация
