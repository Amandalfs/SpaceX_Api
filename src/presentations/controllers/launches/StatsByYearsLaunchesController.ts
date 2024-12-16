import { IStatsByYearsLaunchesUseCase } from "@/domain/useCases/launches/statsByYearsLaunchesUseCase";
import { ServerError, Success } from "@/presentations/helpers";
import { HttpController } from "@/presentations/protocols/Controller";
import { HttpResponse } from "@/presentations/protocols/http";

class StatsByYearsLaunchesController implements HttpController {
    
    constructor(private statsByYearsLaunchesUseCase: IStatsByYearsLaunchesUseCase){}

    async handle(): Promise<HttpResponse> {
        try {

            const output = await this.statsByYearsLaunchesUseCase.handle();
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
    StatsByYearsLaunchesController,
}