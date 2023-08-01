import { Request, Response, Router } from "express";
import { launches_routes } from "./launches.routes";
import { databaseUpdate } from "@/services/jobs/jobUpdateDatabase";

const routes = Router();

routes.use("/launches", launches_routes);

routes.use('/update',  async (req: Request, res: Response)=>{
    await databaseUpdate.execute 
    return res.status(200).send("database update success");
})

routes.get("/", (req: Request, res: Response)=>{
    res.status(200).send("Fullstack Challenge 🏅 - Space X API");
})

export { routes };