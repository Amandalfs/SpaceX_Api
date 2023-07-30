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

  
interface ILaunchesRepository {
    add(data: Launch): Promise<void>
    adds(datas: Launch[]): Promise<void>
    getAll(page: number, pageSize: number): Promise<IGetLaunch[]>
    countRows(): Promise<number>
}

export {
    ILaunchesRepository,
    IGetLaunch
}