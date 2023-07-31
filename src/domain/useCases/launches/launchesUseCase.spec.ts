import { ILaunchesRepository } from "@/entities/implements/ilaunchesRepository";
import { DTORequestLaunchesUseCase, LaunchesUseCase } from "./LaunchesUseCase";
import { InMemoryLaunchesRepository } from "@/entities/inMemory/InMemoryLaunchesRepository";

interface TypeSuit {
    suit: LaunchesUseCase,
    repository: ILaunchesRepository,
}

const makeSuit = (): TypeSuit => {
    const repository = new InMemoryLaunchesRepository();
    const suit = new LaunchesUseCase(repository);
    return {
        repository,
        suit
    }
}

describe("testando o useCase de launches", ()=>{

    it("esperar poder conseguir dados de laçamemto", async ()=>{
        const { suit } = makeSuit();
        const request = new DTORequestLaunchesUseCase(1, 5);
        const response =  await suit.handle(request);

        expect(response.launches).toHaveLength(5);
        expect(response.totalDocs).toEqual(10);
        expect(response.page).toEqual(1);
        expect(response.totalPages).toEqual(2);
        expect(response.hasNext).toEqual(true);
        expect(response.hasPrev).toEqual(false);

        const request2 = new DTORequestLaunchesUseCase(2, 5);
        const response2 =  await suit.handle(request2);

        expect(response2.launches).toHaveLength(5);
        expect(response2.totalDocs).toEqual(10);
        expect(response2.page).toEqual(2);
        expect(response2.totalPages).toEqual(2);
        expect(response2.hasNext).toEqual(false);
        expect(response2.hasPrev).toEqual(true);
    });

    it("esperar poder filtrar os dados de laçamemto", async ()=>{
        const { suit } = makeSuit();
        const request = new DTORequestLaunchesUseCase(1, 5, false);
        const response =  await suit.handle(request);

        expect(response.launches).toHaveLength(5);
        expect(response.totalDocs).toEqual(5);
        expect(response.page).toEqual(1);
        expect(response.totalPages).toEqual(1);
        expect(response.hasNext).toEqual(false);
        expect(response.hasPrev).toEqual(false);

        const request2 = new DTORequestLaunchesUseCase(1, 5, undefined, "Launchtest");
        const response2 =  await suit.handle(request2);

        expect(response2.launches).toHaveLength(5);
        expect(response2.totalDocs).toEqual(5);
        expect(response2.page).toEqual(1);
        expect(response2.totalPages).toEqual(1);
        expect(response2.hasNext).toEqual(false);
        expect(response2.hasPrev).toEqual(false);



    })
});