import { getDb } from "../../config/database";
import { Movie } from "./movie.model";
import { ObjectId } from "mongodb";

export class MovieRepository {

    private collection(){
        return getDb().collection('movies');
    }

    async addMovie(data: Movie){

        const result = await this.collection().insertOne(data);

        return {
            _id: result.insertedId,
            ...data
        };
    }

    async findAllMovies(){
        return this.collection().find().toArray();
    }

    async updateMovie(id: ObjectId, data: Partial<Movie>) {

        await this.collection().updateOne(
            { _id: id },
            { $set: data }
        );

        return await this.collection().findOne({ _id: id });
    }

    async deleteMovie(id: ObjectId) {

        const result = await this.collection().deleteOne({ _id: id });

        return {
            deleted: result.deletedCount > 0
        };
    }
}