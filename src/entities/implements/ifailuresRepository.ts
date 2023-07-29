import { Failure } from "@prisma/client";

interface IFailuresRepository {
    add(data: Failure)
}

export { IFailuresRepository };