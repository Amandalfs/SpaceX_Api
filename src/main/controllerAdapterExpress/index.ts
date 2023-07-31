import { Request, Response } from "express";
import { HttpController } from "../../presentations/protocols/Controller";
import { HttpRequest } from "../../presentations/protocols/http";

export class ControllerAdapterExpress {
    async handle(req: Request, res: Response, controller: HttpController){
        const request:HttpRequest = {
            body: {
                page: req.body.page ?? 1
            },
            query: {
                limit: parseInt(req.query.limit as string) ?? 5,
                result: req.query.result as string ?? null,
                search: req.query.search as string ?? null,

            },
        }
        const response  = await controller.handle(request);
        return res.status(response.statusCode).json(response.body);
    }
}