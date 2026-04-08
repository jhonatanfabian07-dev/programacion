import { Request, Response } from "express";
import { LoDesService } from "./lodes.service";

export class LoDesController {

    private _LoDesService = new LoDesService();

    addloDes = async (req: Request, res: Response) => {

        const result = await this._LoDesService.addloDes(req.body);

        res.status(201).json(result)
    }

     findAllLoDes = async (req: Request, res: Response) => {

        const result = await this._LoDesService.findAllLoDes();

        res.status(200).json(result)
    }

}