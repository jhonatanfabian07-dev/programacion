import { getDb } from "../../config/database";
import { Movie } from "./movie.model";

export class MovieRepository {

    private collection(){
        return getDb().collection('movies');
    }

    async addMovie(data: Movie){
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data };
    }

    async findAllMovies(){
        return this.collection().find().toArray();
    }
}