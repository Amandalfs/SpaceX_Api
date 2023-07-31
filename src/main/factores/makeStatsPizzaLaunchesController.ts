import { StatsPizzaLauncheUseCase } from "@/domain/useCases/launches/statsPizzaLauncheUseCase";
import { PrismaLaunchesRepository } from "@/entities/prismaRepositories/prismaLaunchesRepository";
import { StatsPizzaLaunchesController } from "@/presentations/controllers/launches/StatsPizzaLaunchesController";

export function makeStatsPizzaLaunchesController():StatsPizzaLaunchesController{
    const launchesRepository = new PrismaLaunchesRepository;
    const statsPizzaLaunchesUseCase = new StatsPizzaLauncheUseCase(launchesRepository);
    return new StatsPizzaLaunchesController(statsPizzaLaunchesUseCase);
}