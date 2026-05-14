import { Request, Response } from "express";
import { SeriesService } from "./series.service";
import { Series } from "./series.model";

export class SeriesController {

    private service = new SeriesService();

    addSeries = async (req: Request, res: Response) => {

        try {

            const data: Series = req.body;

            const result = await this.service.addSeries(data);

            res.status(201).json(result);

        } catch (error: any) {

            res.status(500).json({
                message: error.message
            });
        }
    }

    findAllSeries = async (req: Request, res: Response) => {

        try {

            const result = await this.service.findAllSeries();

            res.status(200).json(result);

        } catch (error: any) {

            res.status(500).json({
                message: error.message
            });
        }
    }

    updateSeries = async (req: Request, res: Response) => {

        try {

            const id = req.params.id as string;

            const result = await this.service.updateSeries(id, req.body);

            if (!result) {
                return res.status(404).json({
                    message: "Serie no encontrada"
                });
            }

            res.status(200).json(result);

        } catch (error: any) {

            res.status(500).json({
                message: error.message
            });
        }
    }

    deleteSeries = async (req: Request, res: Response) => {

        try {

            const id = req.params.id as string;

            const result = await this.service.deleteSeries(id);

            if (!result.deleted) {
                return res.status(404).json({
                    message: "Serie no encontrada"
                });
            }

            res.status(200).json(result);

        } catch (error: any) {

            res.status(500).json({
                message: error.message
            });
        }
    }
}