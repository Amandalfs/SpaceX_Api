import { DTORequestLaunchesUseCase, ILaunchesUseCase } from "@/domain/useCases/launches/LaunchesUseCase";
import { BadRequest, ServerError, Success } from "@/presentations/helpers";
import { HttpController } from "@/presentations/protocols/Controller";
import { HttpRequest, HttpResponse } from "@/presentations/protocols/http";

class GetLaunchesController implements HttpController {
    
    constructor(private launchesUseCase: ILaunchesUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse> {
        try {
            const { search, result, limit } = req.query;
            const { page } = req.body;
            const pageLimit = isNaN(limit) ? 5: limit;
            const resultLaunch = result!==undefined ? JSON.parse(result): result;

            if(typeof resultLaunch === "string"){
                return BadRequest({message: "The launch result is invalid."});
            }

            const input = new DTORequestLaunchesUseCase(page, pageLimit, resultLaunch, search);
            const output = await this.launchesUseCase.handle(input);
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
    GetLaunchesController,
}