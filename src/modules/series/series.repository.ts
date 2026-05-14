import { getDb } from "../../config/database";
import { ObjectId } from "mongodb";
import { Series } from "./series.model";

export class SeriesRepository {

    private collection(){
        return getDb().collection('series');
    }

    async addSeries(data: Series){

        const result = await this.collection().insertOne(data);

        return {
            _id: result.insertedId,
            ...data
        };
    }

    async findAllSeries(){

        return this.collection()
            .find()
            .toArray();
    }

    async updateSeries(id: ObjectId, data: Partial<Series>) {

        const result = await this.collection().findOneAndUpdate(
            { _id: id },
            { $set: data },
            { returnDocument: "after" }
        );

        return result;
    }

    async deleteSeries(id: ObjectId) {

        const result = await this.collection().deleteOne({
            _id: id
        });

        return {
            deleted: result.deletedCount > 0
        };
    }
}