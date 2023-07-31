import { Router, Request, Response } from "express";
import { makeGetLaunchesController } from "../factores/makeGetLaunchesController";
import { ControllerAdapterExpress } from "../controllerAdapterExpress";

const controllerAdapterExpress = new ControllerAdapterExpress;

const launches_routes = Router();

launches_routes.get("/", (req: Request, res: Response)=>{
    const controller = makeGetLaunchesController();
    return controllerAdapterExpress.handle(req, res, controller);
});

export { launches_routes };