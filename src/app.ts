import express  from "express";
import { routes } from "./main/routes";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API da SpaceX',
        version: '1.0.0',
        description: 'Documentação da API da SpaceX',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT}`,
          description: 'Servidor de Desenvolvimento',
        },
        {
            url:process.env.HOST_PRODUCTION,
            description: 'Servidor de produção'
        }
      ],
    },
    apis: ['./src/main/routes/launches.routes.ts', './src/main/routes/launches.routes.ts'],
};
  
const swaggerSpec = swaggerJsdoc(options);
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export { app }
 