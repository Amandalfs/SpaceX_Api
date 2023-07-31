import { Launch } from "@prisma/client";

interface IGetLaunch {
    id: string;
    success: boolean;
    flight_number: number;
    date_utc: Date;
    webcast: string;
    reused: boolean;
    name: string;
    rocket_id: string;
    rocket: { 
        id: string, 
        name: string
    };
    Payload: {
        id: string;
        name: string;
        launchId: string;
    }[];
}

interface PizzaStats {
    name: string,
    count: number,
    used: boolean,
}

interface ISummary {
    success: number,
    failures: number,
}

  
interface ILaunchesRepository {
    add(data: Launch): Promise<void>
    adds(datas: Launch[]): Promise<void>
    getAll(page: number, pageSize: number): Promise<IGetLaunch[]>
    searchLaunch(page: number, pageSize: number, search: string, result: boolean ): Promise<IGetLaunch[]>
    countOfSearch(search?: string, result?: boolean ): Promise<number>
    countRows(): Promise<number>
    statsOfPizza(): Promise<PizzaStats[]>
    sumaryStats(): Promise<ISummary>
}

export {
    ILaunchesRepository,
    IGetLaunch,
    PizzaStats,
    ISummary
}