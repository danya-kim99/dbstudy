/**
 * @swagger
 * /departments:
 *   get:
 *     summary: Получить список отделов
 *     responses:
 *       200:
 *         description: Успешное получение списка отделов
 *       500:
 *         description: Ошибка сервера
 *   post:
 *     summary: Создать отдел
 *     requestBody:
 *       description: Данные для создания отдела
 *       required: true
 *       content:
 *         application/json:
 *            example:
 *              department_name: название отдела
 *     responses:
 *       200:
 *         description: Успешное создание отдела
 *       500:
 *         description: Ошибка сервера
 *   delete:
 *     summary: Удалить отдела
 *     requestBody:
 *       description: Данные для удаления отдела
 *       required: true
 *       content:
 *         application/json:
 *            example:
 *              department_id: id отдела
 *     responses:
 *       200:
 *         description: Успешное удаление отдела
 *       500:
 *         description: Ошибка сервера
 */
