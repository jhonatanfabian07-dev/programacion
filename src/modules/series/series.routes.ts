import { Router } from "express";
import { SeriesController } from "./series.controller";

import {
    createSeriesSchema,
    updateSeriesSchema
} from "./series.schema";

import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const controller = new SeriesController();

/**
 * @swagger
 * tags:
 *   name: Series
 *   description: API de series
 */

/**
 * @swagger
 * /series:
 *   post:
 *     summary: Crear serie
 *     tags: [Series]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               genre:
 *                 type: string
 *               seasons:
 *                 type: number
 *               rating:
 *                 type: number
 *     responses:
 *       201:
 *         description: Serie creada
 */
router.post(
    '/',
    validate(createSeriesSchema),
    authMiddleware,
    controller.addSeries
);

/**
 * @swagger
 * /series:
 *   get:
 *     summary: Obtener series
 *     tags: [Series]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de series
 */
router.get(
    '/',
    authMiddleware,
    controller.findAllSeries
);

/**
 * @swagger
 * /series/{id}:
 *   put:
 *     summary: Actualizar serie
 *     tags: [Series]
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
 *         description: Serie actualizada
 */
router.put(
    '/:id',
    validate(updateSeriesSchema),
    authMiddleware,
    controller.updateSeries
);

/**
 * @swagger
 * /series/{id}:
 *   delete:
 *     summary: Eliminar serie
 *     tags: [Series]
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
 *         description: Serie eliminada
 */
router.delete(
    '/:id',
    authMiddleware,
    controller.deleteSeries
);

export default router;