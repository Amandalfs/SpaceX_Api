import { IRocketsRepository } from "../implements/irocketsRepository";
import { prisma } from "../prismaClient";
import { Rocket } from '@prisma/client';

class PrismaRocketsRepository implements IRocketsRepository {
    async add(data: Rocket){
        await prisma.rocket.create({data});
    }

    async adds(datas: Rocket[]) {
        await datas.map( async (data)=>{
            await  prisma.rocket.upsert({
                where: { id: data.id }, 
                update: {},
                create: data,
            });
        })
        
    }
}

export {
    PrismaRocketsRepository,
}