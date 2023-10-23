/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Получить список работников
 *     responses:
 *       200:
 *         description: Успешное получение списка работников
 *       500:
 *         description: Ошибка сервера
 *   post:
 *     summary: Создать работника
 *     requestBody:
 *       description: Данные для создания работника
 *       required: true
 *       content:
 *         application/json:
 *            example:
 *              employee_name: Название работника
 *              department_id: 1
 *     responses:
 *       200:
 *         description: Успешное создание работника
 *       500:
 *         description: Ошибка сервера
 *   delete:
 *     summary: Удалить работника
 *     requestBody:
 *       description: Данные для удаления работника
 *       required: true
 *       content:
 *         application/json:
 *            example:
 *              employee_id: id работника
 *     responses:
 *       200:
 *         description: Успешное удаление работника
 *       500:
 *         description: Ошибка сервера
 */
  

