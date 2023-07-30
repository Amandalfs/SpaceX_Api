import { Failure } from "@prisma/client"
import { IFailuresRepository } from "../implements/ifailuresRepository"
import { prisma } from "../prismaClient"

class PrismaFailuresRepository implements IFailuresRepository {
    async add(data: Failure){
        await  prisma.failure.create({data});
    }

    async adds(datas: Failure[]) {
        datas.map( async (data)=>{
            await  prisma.failure.upsert({
                where: { id: data.id }, 
                update: {},
                create: data,
            });
        })
    }
}

export {
    PrismaFailuresRepository,
}