import { DatabaseUpdate } from "./DatabaseUpdate";
import { PrismaLaunchesRepository } from "@/entities/prismaRepositories/prismaLaunchesRepository";
import { PrismaFailuresRepository } from "@/entities/prismaRepositories/prismaFailuresRepository";
import { PrismaPayloadsRepository } from "@/entities/prismaRepositories/prismaPayloadsRepository";
import { PrismaRocketsRepository } from "@/entities/prismaRepositories/prismaRocketsRepository";
import { apiSpace } from "../api";
import { execSync } from "child_process";

const prismaLaunchesRepository = new PrismaLaunchesRepository();
const prismaFailuresRepository = new PrismaFailuresRepository();
const prismaPayloadsRepository = new PrismaPayloadsRepository();
const prismaRocketsRepository = new PrismaRocketsRepository();

const databaseUpdate = new DatabaseUpdate(
    prismaLaunchesRepository,
    prismaRocketsRepository,
    prismaPayloadsRepository,
    prismaFailuresRepository,
    apiSpace,
);

describe("testando a função de atualizar o banco de dados",()=>{
    beforeEach(()=>{
        execSync("npx prisma migrate deploy");
    });

    afterEach(()=>{
        execSync("npm run reset-db");
    });

    it("testando as consultas", async ()=>{
        const { rockets, launches, payloads } = await databaseUpdate.execute();

        for(const rocket of rockets){
            expect(rocket.id).toEqual(expect.any(String));
            expect(rocket.name).toEqual(expect.any(String));
        }

        for(const launch of launches){
            expect(launch.id).toEqual(expect.any(String));
            expect(launch.name).toEqual(expect.any(String));
            expect(launch.rocket_id).toEqual(expect.any(String));
            expect(launch.success).toEqual(expect.any(Boolean));
            expect(launch.date_utc).toEqual(expect.any(Date));
            expect(launch.reused).toEqual(expect.any(Boolean));
            expect(launch.flight_number).toEqual(expect.any(Number));
            expect(launch.webcast).toEqual(expect.any(String));
        }

        for(const payload of payloads){
            expect(payload.id).toEqual(expect.any(String));
            expect(payload.name).toEqual(expect.any(String));
            expect(payload.launchId).toEqual(expect.any(String));
        }

    })

})