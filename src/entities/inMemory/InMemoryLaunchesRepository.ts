import { Launch } from "@prisma/client";
import { IGetLaunch, ILaunchesRepository } from "../implements/ilaunchesRepository";


class InMemoryLaunchesRepository implements ILaunchesRepository {
    private launches: IGetLaunch[] = [];
    private launchesOnly: Launch[] = [];

    constructor(){
        this.launches = Array.from({ length: 10 }).map((_, i) => ({
            id: `id${i}`,
            success: true,
            flight_number: i,
            date_utc: new Date("02,10,20"),
            webcast: `https://www.example.com/webcast/${i}`,
            reused: true,
            name: `Launch ${i}`,
            rocket_id: `rocket_id${i}`,
            rocket: {
                id: `rocket_id${i}`,
                name: `Rocket ${i}`,
            },
            Payload: Array.from({ length: 3 }).map((_, j) => ({
                id: `payload_id${i}_${j}`,
                name: `Payload ${i}_${j}`,
                launchId: `lauchId_${i}_${j}`,
            })),
        }));
    }

    async countRows(): Promise<number> {
        return new Promise((resolve) => resolve(this.launches.length));
    }

    async add(data: Launch) {
        this.launchesOnly.push(data);
    }
    async adds(datas: Launch[]){
        datas.map(data => {
            this.launchesOnly.push(data);
        })
    }

    async getAll(page: number, pageSize: number): Promise<IGetLaunch[]> {
        return new Promise((resolve)=> resolve(
            this.launches.slice((page-1) * pageSize, page *pageSize)
        ));
    }
}



export {
    InMemoryLaunchesRepository,
}
