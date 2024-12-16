import { app } from "./app";
import { databaseUpdate } from "./services/jobs/jobUpdateDatabase";
import cron from 'node-cron';

const PORT = process.env.PORT ?? 8020;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
    cron.schedule('0 9 * * * *', async () =>{ 
        databaseUpdate.execute().then(() => {
            console.log("service run successfully");
        }).catch(()=>{
            console.log("service error");
        });
    })
})