import express  from "express";
import { routes } from "./main/routes";
import { databaseUpdate, task } from "./services/jobs/jobUpdateDatabase";
const app = express();

app.use(express.json());
app.use(routes);

databaseUpdate.execute();
task.start();

export { app }
 