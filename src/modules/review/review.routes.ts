import { Router } from "express";
import { ReviewController } from "./review.controller";

import {
    createReviewSchema,
    updateReviewSchema
} from "./review.schema";

import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const controller = new ReviewController();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: API de reviews
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Crear review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               movie:
 *                 type: string
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review creada
 */
router.post(
    '/',
    validate(createReviewSchema),
    authMiddleware,
    controller.addReview
);

/**
 * @swagger
 * /reviews/{movie}:
 *   get:
 *     summary: Obtener reviews por película
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: movie
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reviews
 */
router.get(
    '/:movie',
    authMiddleware,
    controller.findReviewsByMovie
);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Actualizar review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review actualizada
 */
router.put(
    '/:id',
    validate(updateReviewSchema),
    authMiddleware,
    controller.updateReview
);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Eliminar review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review eliminada
 */
router.delete(
    '/:id',
    authMiddleware,
    controller.deleteReview
);

export default router;