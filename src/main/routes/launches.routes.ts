import { Router, Request, Response } from "express";
import { makeGetLaunchesController } from "../factores/makeGetLaunchesController";
import { ControllerAdapterExpress } from "../controllerAdapterExpress";
import { makeStatsPizzaLaunchesController } from "../factores/makeStatsPizzaLaunchesController";

const controllerAdapterExpress = new ControllerAdapterExpress;

const launches_routes = Router();

/**
 * @swagger
 * /launches:
 *   get:
 *     summary: Rota de lançamentos
 *     tags: ["launches"]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: search
 *         in: query
 *         description: Termo de busca para filtrar lançamentos por nome - rocket.
 *         required: false
 *         type: string
 *       - name: limit
 *         in: query
 *         description: Número máximo de lançamentos retornados na resposta.
 *         required: false
 *         type: integer
 *         format: int32
 *         example: 10
 *       - name: result
 *         in: query
 *         description: Tipo de resultado dos lançamentos (sucesso ou falha).
 *         required: false
 *         type: string
 *         enum: [success, failure]
 *       - name: page
 *         in: query
 *         description: Número da página para paginação dos resultados.
 *         required: false
 *         type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Um objeto contendo informações de lançamento
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 launches:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: abc123
 *                       success:
 *                         type: boolean
 *                         example: true
 *                       flight_number:
 *                         type: number
 *                         example: 1
 *                       date_utc:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-07-31T12:34:56Z"
 *                       webcast:
 *                         type: string
 *                         example: "https://example.com/webcast"
 *                       reused:
 *                         type: boolean
 *                         example: false
 *                       name:
 *                         type: string
 *                         example: "Falcon 9 Launch"
 *                       rocket_id:
 *                         type: string
 *                         example: "rocket123"
 *                       rocket:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: "rocket123"
 *                           name:
 *                             type: string
 *                             example: "Falcon 9"
 *                       Payload:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               example: "payload456"
 *                             name:
 *                               type: string
 *                               example: "Satellite 1"
 *                             launchId:
 *                               type: string
 *                               example: "abc123"
 *                 page:
 *                   type: number
 *                   example: 1
 *                 rowsLimit:
 *                   type: number
 *                   example: 10
 *                 result:
 *                   type: boolean
 *                   example: true
 *                 search:
 *                   type: string
 *                   example: "Falcon"
 */




launches_routes.get("/", (req: Request, res: Response)=>{
    const controller = makeGetLaunchesController();
    return controllerAdapterExpress.handle(req, res, controller);
});

/**
 * @swagger
 * /launches/stats:
 *   get:
 *     tags: ["launches"]
 *     summary: Retorna estatísticas dos lançamentos de foguetes.
 *     responses:
 *       200:
 *         description: Sucesso na obtenção das estatísticas dos lançamentos de foguetes.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statsPizza:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nome do foguete.
 *                       used:
 *                         type: boolean
 *                         description: Indica se o foguete foi reusado ou não.
 *                       count:
 *                         type: integer
 *                         description: Quantidade de lançamentos do foguete.
 *                   example:
 *                     - name: Falcon 9
 *                       used: true
 *                       count: 115
 *                     - name: Falcon 1
 *                       used: false
 *                       count: 5
 *                     - name: Falcon Heavy
 *                       used: false
 *                       count: 5
 *                     - name: Falcon 9
 *                       used: false
 *                       count: 80
 *                 success:
 *                   type: integer
 *                   description: Total de lançamentos bem-sucedidos.
 *                   example: 181
 *                 failures:
 *                   type: integer
 *                   description: Total de falhas em lançamentos.
 *                   example: 24
 */



launches_routes.get("/stats", (req: Request, res: Response)=>{
    const controller = makeStatsPizzaLaunchesController();
    return controllerAdapterExpress.handle(req, res, controller);
})

export { launches_routes };