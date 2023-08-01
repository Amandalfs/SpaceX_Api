import { ILaunchesRepository, LaunchStatsByYears } from "@/entities/implements/ilaunchesRepository";

class DTOResponseStatsByYearsLaunchesUseCase {
    constructor(
        public stats: LaunchStatsByYears[],
    ){}
} 


interface IStatsByYearsLaunchesUseCase {
    handle(): Promise<DTOResponseStatsByYearsLaunchesUseCase>
}

class StatsByYearsLaunchesUseCase {
    constructor(private launchesRepository: ILaunchesRepository){}

    async handle(){
        const stats = await this.launchesRepository.getLaunchStatsByYearAndRocket();
        return new DTOResponseStatsByYearsLaunchesUseCase(stats);
    }
    
}

export {
    StatsByYearsLaunchesUseCase,
    IStatsByYearsLaunchesUseCase,
    DTOResponseStatsByYearsLaunchesUseCase
}