import { Request, Response } from "express";
import { MovieService } from "./movie.service";
import { Movie } from "./movie.model";

export class MovieController {

    private service = new MovieService();

    addMovie = async (req: Request, res: Response) => {

        const data: Movie = req.body;

        const result = await this.service.addMovie(data);

        res.status(201).json(result);
    }

    findAllMovies = async (req: Request, res: Response) => {

        const result = await this.service.findAllMovies();

        res.status(200).json(result);
    }
}