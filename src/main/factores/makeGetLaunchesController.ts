import { LaunchesUseCase } from "@/domain/useCases/launches/LaunchesUseCase";
import { PrismaLaunchesRepository } from "@/entities/prismaRepositories/prismaLaunchesRepository";
import { GetLaunchesController } from "@/presentations/controllers/launches/GetLaunchesController";

export function makeGetLaunchesController():GetLaunchesController{
    const launchesRepository = new PrismaLaunchesRepository;
    const launchesUseCase = new LaunchesUseCase(launchesRepository);
    return new GetLaunchesController(launchesUseCase);
}