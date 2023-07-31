import { IStatsPizzaLaunchesUseCase } from "@/domain/useCases/launches/statsPizzaLauncheUseCase";
import { ServerError, Success } from "@/presentations/helpers";
import { HttpController } from "@/presentations/protocols/Controller";
import { HttpResponse } from "@/presentations/protocols/http";

class StatsPizzaLaunchesController implements HttpController {
    
    constructor(private pizzaStatsLaunchesUseCase: IStatsPizzaLaunchesUseCase){}

    async handle(): Promise<HttpResponse> {
        try {

            const output = await this.pizzaStatsLaunchesUseCase.handle();
            return Success(output);
            
        } catch (error) {
            if(!error.statusCode){
                return ServerError();
            }
            return ServerError();
        }
    }

}

export {
    StatsPizzaLaunchesController,
}