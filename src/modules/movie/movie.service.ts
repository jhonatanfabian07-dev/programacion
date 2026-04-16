import { MovieRepository } from "./movie.repository";
import { Movie } from "./movie.model";

export class MovieService {

    private repository = new MovieRepository();

    async addMovie(data: Movie) {
        return this.repository.addMovie(data);
    }

    async findAllMovies() {
        return this.repository.findAllMovies();
    }
}