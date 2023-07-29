import { Rocket } from "@prisma/client";

interface IRocketsRepository {
    add(data: Rocket)
}

export { IRocketsRepository };