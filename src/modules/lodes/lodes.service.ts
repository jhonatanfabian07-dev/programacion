import { LoDesRepository} from "./lodes.repository";

export class LoDesService {

    private repository = new LoDesRepository();

    async addloDes(data: any) {
        return this.repository.addloDes(data);
    }

    async findAllLoDes() {
        return this.repository.findAllloDes();
    }

}
