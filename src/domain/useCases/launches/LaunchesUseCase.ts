import { IGetLaunch, ILaunchesRepository } from "@/entities/implements/ilaunchesRepository";

class DTOResponseLaunchesUseCase {
    constructor(
        public launches: IGetLaunch[],
        public totalDocs: number,
        public page: number,
        public totalPages: number,
        public hasNext: boolean,
        public hasPrev: boolean,
        ){}
}

class DTORequestLaunchesUseCase {
    constructor(
        public page: number,
        public rowsLimit: number,
    ){}
}

class LaunchesUseCase{
    constructor(private launchesRepository: ILaunchesRepository){}

    async handle({ page, rowsLimit  }: DTORequestLaunchesUseCase){
        const launches = await this.launchesRepository.getAll(page, rowsLimit);
        const totalDocs = await this.launchesRepository.countRows();

        const totalPages = totalDocs / rowsLimit;
        const hasNext = page * rowsLimit < totalDocs;
        const hasPrev = page * rowsLimit > rowsLimit;

        return new DTOResponseLaunchesUseCase(
            launches,
            totalDocs,
            page,
            totalPages,
            hasNext,
            hasPrev,
        );
    }
}

export {
    LaunchesUseCase,
    DTORequestLaunchesUseCase,
    DTOResponseLaunchesUseCase
}