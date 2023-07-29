import { Payload } from "@prisma/client"

interface IPayloadRespositoy {
    add(data: Payload): void
}

export {
    IPayloadRespositoy,
}