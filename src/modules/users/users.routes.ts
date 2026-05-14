import { Router } from "express";
import { UsersController } from "./users.controller";
import { createUserSchema } from "./users.schema";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const _UsersController = new UsersController();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API de usuarios
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrar usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: Jhonatan
 *               email: jhonatan@gmail.com
 *               password: 123456
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post(
    '/register',
    validate(createUserSchema),
    _UsersController.register
);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       401:
 *         description: Token requerido
 *       500:
 *         description: Error del servidor
 */
router.get(
    '/',
    authMiddleware,
    _UsersController.findAllUsers
);

export default router;