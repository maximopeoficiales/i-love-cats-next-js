import { config } from "@/config";
import { Cat } from "@/domain/Cat";
import axios, { AxiosInstance } from "axios";
export class CatApiRepository {
    axios: AxiosInstance;
    constructor() {
        this.axios = axios.create({
            baseURL: config.API_CATS.URL,
            headers: {
                "Content-Type": "application/json",
                "x-api-key": config.API_CATS.API_KEY
            },
        })
    }

    async getCats(): Promise<Cat[]> {
        const response = await this.axios.get<Cat[]>("images/search", {
            params: {
                limit: 10
            }
        })
        return response.data;
    }
}


export const catApiRepositoryInstance = new CatApiRepository();


