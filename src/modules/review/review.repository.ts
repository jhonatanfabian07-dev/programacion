import { getDb } from "../../config/database";

export class ReviewRepository {

    private collection(){
        return getDb().collection('reviews')
    }

    async create(data: any){
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data }  
    }

    async findReviewsByMovie(movie: string){
        return this.collection()
            .find({ movie: movie })
            .toArray();
    }

}