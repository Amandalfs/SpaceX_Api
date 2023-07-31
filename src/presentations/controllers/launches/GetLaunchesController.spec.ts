import { DTOResponseLaunchesUseCase, ILaunchesUseCase } from "@/domain/useCases/launches/LaunchesUseCase";
import { GetLaunchesController } from "./GetLaunchesController";
import { IGetLaunch } from "@/entities/implements/ilaunchesRepository";

interface TypeSuit {
    useCase: ILaunchesUseCase,
    suit: GetLaunchesController,
}

const makeSuit = (): TypeSuit => {
    const launches: IGetLaunch[] = [
        {
          id: 'id0',
          success: false,
          flight_number: 1,
          date_utc: new Date('2020-02-10T03:00:00.000Z'),
          webcast: 'https://www.example.com/webcast/0',
          reused: false,
          name: 'Launchtest',
          rocket_id: 'rocket_id0',
          rocket: {
            id: "test",
            name: "test"
          },
          Payload: [{
            id: "string",
            name: "string",
            launchId: "string"
          }]
    }];
    const totalDocs = 1;
    const page = 1;
    const totalPages = 1;
    const hasNext = false;
    const hasPrev = false;


    const useCase = new class useCase implements ILaunchesUseCase {
        async handle(): Promise<DTOResponseLaunchesUseCase> {
           return new Promise((resolve)=> resolve(new DTOResponseLaunchesUseCase(launches, totalDocs, page, totalPages, hasNext, hasPrev)))
        }
    }   
    const suit = new GetLaunchesController(useCase);
    return {
        useCase,
        suit
    }
}

describe("testando o controller GetLaunches", ()=>{

    it("espera que sera possivel tratar erros desconhecidos", async ()=>{
        const { suit, useCase } = makeSuit();
        jest.spyOn(useCase, "handle").mockRejectedValue(new Error);
        const response = await suit.handle({
            query: {
                result: null,
                limit: null,
                search: null,
            },
            body: {
                page: null,
            }
        })
        expect(response.body.message).toEqual("Server Internal Error");
    });

    it("espera que sera possivel enviar os dados", async ()=>{
        const { suit } = makeSuit();
        const response = await suit.handle({
            query: {
                result: null,
                limit: null,
                search: null,
            },
            body: {
                page: null,
            }
        })

        expect(response.body.launches).toHaveLength(1);
        expect(response.body.totalDocs).toEqual(1);
        expect(response.body.page).toEqual(1);
        expect(response.body.totalPages).toEqual(1);
        expect(response.body.hasNext).toEqual(false);
        expect(response.body.hasPrev).toEqual(false);
    })
})      