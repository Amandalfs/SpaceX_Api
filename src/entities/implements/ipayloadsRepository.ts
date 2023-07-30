import { Payload } from "@prisma/client"

interface IPayloadRepository {
    add(data: Payload): Promise<void>
    adds(datas: Payload[]): Promise<void>
}

export {
    IPayloadRepository,
}