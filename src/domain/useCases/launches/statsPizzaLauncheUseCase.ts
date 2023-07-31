import { ILaunchesRepository, PizzaStats } from "@/entities/implements/ilaunchesRepository";

class DTOResponseStatsPizzaLauncheUseCase {
    constructor(
        public statsPizza: PizzaStats[],
    ){}
}


interface IStatsPizzaLaunchesUseCase {
    handle(): Promise<DTOResponseStatsPizzaLauncheUseCase>
}

class StatsPizzaLauncheUseCase {
    constructor(private launchesRepository: ILaunchesRepository){}

    async handle(){
        const statsPizza = await this.launchesRepository.statsOfPizza();
        return new DTOResponseStatsPizzaLauncheUseCase(statsPizza);
    }
    
}

export {
    StatsPizzaLauncheUseCase,
    IStatsPizzaLaunchesUseCase,
    DTOResponseStatsPizzaLauncheUseCase
}