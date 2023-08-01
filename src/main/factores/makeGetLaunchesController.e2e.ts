import { app } from "@/app";
import { prisma } from "@/entities/prismaClient";
import { databaseUpdate } from "@/services/jobs/jobUpdateDatabase";
import { execSync } from "child_process";
import  request  from "supertest"

let server;
jest.setTimeout(30000);
describe('testando a rota /launches', ()=>{
    beforeAll(async ()=>{
        execSync("npx prisma migrate deploy");
        await databaseUpdate.execute();
        server = await app.listen();
    })

    afterAll(async ()=>{
        await server.close();
        await prisma.payload.deleteMany();
        await prisma.launch.deleteMany();
        await prisma.rocket.deleteMany();
    })

    it('usuario deve consegui acessar a rota de lançamentos', async () =>{ 
        const response = await request(server).get("/launches?limit=10&page=5");
        
        expect(response.body.launches).toHaveLength(10);
        expect(response.body.totalDocs).toEqual(expect.any(Number));
        expect(response.body.page).toEqual(5);
        expect(response.body.totalPages).toEqual(expect.any(Number));
        expect(response.body.hasNext).toEqual(true);
        expect(response.body.hasPrev).toEqual(true);
    })
})