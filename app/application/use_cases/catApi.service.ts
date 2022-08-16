import { Cat } from "@/domain/Cat";
import { catApiRepositoryInstance } from "@/externalApi/catApi.repository";

export class CatApiService {
    constructor(private repository = catApiRepositoryInstance) {
    }
    async getCats(): Promise<Cat[]> {
        return await this.repository.getCats();
    }
}

export const catApiServiceInstance = new CatApiService();