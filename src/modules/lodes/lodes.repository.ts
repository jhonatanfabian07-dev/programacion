import { getDb } from "../../config/database";

export class LoDesRepository {
    private collection(){
        return getDb().collection('lodes')
    }

    async addloDes(data:any){
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data }  
    }

    async findAllloDes(){
        return this.collection().find().toArray();
    }

    
}