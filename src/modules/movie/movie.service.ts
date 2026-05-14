import { MovieRepository } from "./movie.repository";
import { Movie } from "./movie.model";
import { ObjectId } from "mongodb";

export class MovieService {

    private repository = new MovieRepository();

    async addMovie(data: Movie) {
        return this.repository.addMovie(data);
    }

    async findAllMovies() {
        return this.repository.findAllMovies();
    }

    async updateMovie(id: string, data: Partial<Movie>) {

        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }

        return this.repository.updateMovie(new ObjectId(id), data);
    }

    async deleteMovie(id: string) {

        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }

        return this.repository.deleteMovie(new ObjectId(id));
    }
}