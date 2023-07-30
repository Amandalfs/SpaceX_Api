import { Launch } from "@prisma/client";

interface ILaunchesRepository {
    add(data: Launch): Promise<void>
    adds(datas: Launch[]): Promise<void>
}

export {
    ILaunchesRepository,
}