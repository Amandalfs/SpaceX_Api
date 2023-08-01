import { Rocket } from "@prisma/client";

interface IRocketsRepository {
    add(data: Rocket): Promise<void>
    adds(datas: Rocket[]): Promise<void>
}

export { IRocketsRepository };