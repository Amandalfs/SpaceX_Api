import { Launch } from "@prisma/client";

interface ILaunchesRepository {
    add(data: Launch):void
}

export {
    ILaunchesRepository,
}