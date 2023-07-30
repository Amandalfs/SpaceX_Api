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
    
    async getAll(page, pageSize) {
        const launches = await prisma.launch.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: { rocket: true, Payload: true },
        })
        return launches;
    }

    async countRows(): Promise<number> {
        return prisma.launch.count();
    }

}

export {
    PrismaLaunchesRepository,
}