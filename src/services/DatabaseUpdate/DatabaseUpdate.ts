import { IFailuresRepository } from "@/entities/implements/ifailuresRepository";
import { ILaunchesRepository } from "@/entities/implements/ilaunchesRepository";
import { IPayloadRepository } from "@/entities/implements/ipayloadsRepository";
import { IRocketsRepository } from "@/entities/implements/irocketsRepository";
import { Launch, Payload, Rocket } from "@prisma/client";
import { AxiosInstance } from "axios";

class DatabaseUpdate{
    
    constructor(
        private launchesRepository: ILaunchesRepository,
        private rocketsRepository: IRocketsRepository,
        private payloadsRepository: IPayloadRepository,
        private failuresRepository: IFailuresRepository,
        private apiSpace: AxiosInstance,
    ){}

    async execute(){
        const responseRockets = await this.apiSpace.get("/v4/rockets");
        const rockets: Rocket[] = responseRockets.data.map((rocket)=>{
            return <Rocket>{
                id: rocket.id,
                name: rocket.name,
            }
        })
        await this.rocketsRepository.adds(rockets);
        
        const responseLaunches = await this.apiSpace.get("/v5/launches");
        const launches: Launch[] = responseLaunches.data.map((launch)=>{
            return <Launch>{
                id: launch.id,
                name: launch.name,
                rocket_id: launch.rocket,
                success: launch.success || false,
                date_utc: new Date(launch.date_utc),
                reused: launch.cores[0].reused || false,
                flight_number: launch.flight_number,
                webcast: launch.links.webcast || '',
            }
        })
        await this.launchesRepository.adds(launches);
        
      
        const responsePayloads = await this.apiSpace.get("/v4/payloads");
        const payloads: Payload[] = responsePayloads.data.map((payload)=>{
            return <Payload>{
                id: payload.id,
                name: payload.name,
                launchId: payload.launch
            }
        });
        await this.payloadsRepository.adds(payloads);

        return {
            launches,
            rockets,
            payloads,
        }
    }
}

export {
    DatabaseUpdate
}