import { DTORequestLaunchesUseCase, ILaunchesUseCase } from "@/domain/useCases/launches/LaunchesUseCase";
import { ServerError, Success } from "@/presentations/helpers";
import { HttpController } from "@/presentations/protocols/Controller";
import { HttpRequest, HttpResponse } from "@/presentations/protocols/http";

class GetLaunchesController implements HttpController {
    
    constructor(private launchesUseCase: ILaunchesUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse> {
        try {
            const { search, result, limit } = req.query;
            const { page } = req.body;

            const input = new DTORequestLaunchesUseCase(page, limit, search, result);
            const output = await this.launchesUseCase.handle(input);
            Success(output);
            
        } catch (error) {
            if(!error.statusCode){
                return ServerError();
            }
        }
    }

}

export {
    GetLaunchesController,
}