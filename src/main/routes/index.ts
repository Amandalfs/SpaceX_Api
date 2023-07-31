import { Request, Response, Router } from "express";
import { launches_routes } from "./launches.routes";

const routes = Router();

routes.use("/launches", launches_routes);
routes.get("/", (req: Request, res: Response)=>{
    res.status(200).send("Fullstack Challenge 🏅 - Space X API");
})

export { routes };