import { Failure } from "@prisma/client";

interface IFailuresRepository {
    add(data: Failure): Promise<void>
    adds(datas: Failure[]): Promise<void>
}

export { IFailuresRepository };