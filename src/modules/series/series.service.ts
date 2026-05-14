import { ObjectId } from "mongodb";
import { SeriesRepository } from "./series.repository";
import { Series } from "./series.model";

export class SeriesService {

    private repository = new SeriesRepository();

    async addSeries(data: Series){
        return this.repository.addSeries(data);
    }

    async findAllSeries(){
        return this.repository.findAllSeries();
    }

    async updateSeries(id: string, data: Partial<Series>){

        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }

        return this.repository.updateSeries(
            new ObjectId(id),
            data
        );
    }

    async deleteSeries(id: string){

        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }

        return this.repository.deleteSeries(
            new ObjectId(id)
        );
    }
}