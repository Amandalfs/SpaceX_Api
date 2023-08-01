import { StatsByYearsLaunchesUseCase } from "@/domain/useCases/launches/statsByYearsLaunchesUseCase";
import { PrismaLaunchesRepository } from "@/entities/prismaRepositories/prismaLaunchesRepository";
import { StatsByYearsLaunchesController } from "@/presentations/controllers/launches/StatsByYearsLaunchesController";

export function makeStatsByYearsLaunchesController():StatsByYearsLaunchesController {
    const launchesRepository = new PrismaLaunchesRepository;
    const statsByYearsLaunchesUseCase = new StatsByYearsLaunchesUseCase(launchesRepository);
    return new StatsByYearsLaunchesController(statsByYearsLaunchesUseCase);
}