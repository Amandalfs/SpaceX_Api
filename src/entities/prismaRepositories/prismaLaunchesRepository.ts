import { ILaunchesRepository } from "../implements/ilaunchesRepository";
import { Launch } from '@prisma/client';
import { prisma } from "../prismaClient";

class PrismaLaunchesRepository implements ILaunchesRepository {
    async add(data: Launch){
        await prisma.launch.create({data});
    }

    async adds(datas: Launch[]) {
        await datas.map( async (data)=>{
            await prisma.launch.upsert({
                where: { id: data.id }, 
                update: {},
                create: data,
            });
        })
        
    }
}

export {
    PrismaLaunchesRepository,
}