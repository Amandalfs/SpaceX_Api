import { IPayloadRepository } from "../implements/ipayloadsRepository";
import { prisma } from "../prismaClient";
import { Payload, } from '@prisma/client';

class PrismaPayloadsRepository implements IPayloadRepository {
    async add(data: Payload){
        await prisma.payload.create({data});
    }

    async adds(datas: Payload[]) {
        try {
            Promise.all(await datas.map( async (data)=>{
                const launch = await prisma.launch.findUnique({
                    where: {
                        id: data.launchId
                    }
                })
                if(launch !== null){
                    await  prisma.payload.upsert({
                        where: { id: data.id }, 
                        update: {},
                        create: data,
                    });
                }
                
            }))
        } catch (error) {
            console.log(error.message);
        }
       

        
    }
}

export {
    PrismaPayloadsRepository,
}