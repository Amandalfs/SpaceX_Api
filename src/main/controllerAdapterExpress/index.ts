import { Request, Response } from "express";
import { HttpController } from "../../presentations/protocols/Controller";
import { HttpRequest } from "../../presentations/protocols/http";

export class ControllerAdapterExpress {
    async handle(req: Request, res: Response, controller: HttpController){
        const request:HttpRequest = {
            body: req.body,
            query: req.query,
        }
        const response  = await controller.handle(request);
        return res.status(response.statusCode).json(response.body);
    }
}