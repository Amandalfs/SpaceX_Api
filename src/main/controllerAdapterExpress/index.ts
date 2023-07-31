import { Request, Response } from "express";
import { HttpController } from "../../presentations/protocols/Controller";
import { HttpRequest } from "../../presentations/protocols/http";

export class ControllerAdapterExpress {
    async handle(req: Request, res: Response, controller: HttpController){
        const request:HttpRequest = {
            query: {
                limit: parseInt(req.query.limit as string) ?? 5,
                result: req.query.result as string ?? undefined,
                search: req.query.search as string ?? undefined,
                page: Number(req.query.page) ?? 1
            },
        }
        const response  = await controller.handle(request);
        return res.status(response.statusCode).json(response.body);
    }
}