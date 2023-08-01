import { Launch } from "@prisma/client";
import { IGetLaunch, ILaunchesRepository, PizzaStats } from "../implements/ilaunchesRepository";


class InMemoryLaunchesRepository implements ILaunchesRepository {
    private launches: IGetLaunch[] = [];
    private launchesOnly: Launch[] = [];

    constructor(){
        this.launches = Array.from({ length: 10 }).map((_, i) => ({
            id: `id${i}`,
            success: i >= 5,
            flight_number: i,
            date_utc: new Date("02,10,20"),
            webcast: `https://www.example.com/webcast/${i}`,
            reused: i >= 5,
            name: `Launch${i < 5 ? "test" : ""}`,
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
    statsOfPizza(): Promise<PizzaStats[]> {
        throw new Error("Method not implemented.");
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

    async searchLaunch(page: number, pageSize: number, search?: string, result?: boolean): Promise<IGetLaunch[]> {
        if(search && result !== undefined){
            const launchesFilters = this.launches.filter((launch)=>{
                return (launch.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                launch.rocket.name.toLowerCase().includes(search.toLocaleLowerCase())) &&
                launch.success === result
            })
            return new Promise((resolve) => resolve(launchesFilters.slice((page-1) * pageSize, page *pageSize)));

        } else if (search) {
            const launchesFilters = this.launches.filter((launch)=>{
                return launch.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                launch.rocket.name.toLowerCase().includes(search.toLocaleLowerCase())
            })
            return new Promise((resolve) => resolve(launchesFilters.slice((page-1) * pageSize, page *pageSize)));
        }

        const launchesFilters = this.launches.filter((launch)=>{
            return launch.success === result;
        })

        return new Promise((resolve)=> resolve(
            launchesFilters.slice((page-1) * pageSize, page *pageSize)
        ));
        
    }

    async countOfSearch(search?: string, result?: boolean): Promise<number> {
        if(search && result !== undefined){
            const launchesFilters = this.launches.filter((launch)=>{
                return (launch.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                launch.rocket.name.toLowerCase().includes(search.toLocaleLowerCase())) &&
                launch.success === result
            })
            return new Promise((resolve) => resolve(launchesFilters.length));

        } else if (search) {
            const launchesFilters = this.launches.filter((launch)=>{
                return launch.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                launch.rocket.name.toLowerCase().includes(search.toLocaleLowerCase())
            })
            return new Promise((resolve) => resolve(launchesFilters.length));
        }

        const launchesFilters = this.launches.filter((launch)=>{
            return launch.success === result;
        })

        return new Promise((resolve)=> resolve(
            launchesFilters.length
        ));
    }

    async sumaryStats() {
        return {
          success: 15, 
          failures: 85
        }
    }
}



export {
    InMemoryLaunchesRepository,
}
