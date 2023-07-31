import { ILaunchesRepository, PizzaStats } from "@/entities/implements/ilaunchesRepository";

class DTOResponseStatsPizzaLauncheUseCase {
    constructor(
        public statsPizza: PizzaStats[],
        public success: number,
        public failures: number
    ){}
}


interface IStatsPizzaLaunchesUseCase {
    handle(): Promise<DTOResponseStatsPizzaLauncheUseCase>
}

class StatsPizzaLauncheUseCase {
    constructor(private launchesRepository: ILaunchesRepository){}

    async handle(){
        const statsPizza = await this.launchesRepository.statsOfPizza();
        const { success, failures } = await this.launchesRepository.sumaryStats();
        return new DTOResponseStatsPizzaLauncheUseCase(statsPizza, success, failures);
    }
    
}

export {
    StatsPizzaLauncheUseCase,
    IStatsPizzaLaunchesUseCase,
    DTOResponseStatsPizzaLauncheUseCase
}