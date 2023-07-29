import express, { Request, Response }  from "express";
const app = express();

app.use(express.json());
app.get("/", (req: Request, res: Response)=>{
    res.status(200).send("Fullstack Challenge 🏅 - Space X API");
})

export { app }
 