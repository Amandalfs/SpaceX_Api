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
        public result?: boolean,
        public search?: string,
    ){}
}

class LaunchesUseCase{
    constructor(private launchesRepository: ILaunchesRepository){}
    
    private launches: IGetLaunch [];
    private totalDocs: number;

    async handle({ page, rowsLimit, search, result }: DTORequestLaunchesUseCase){

        if(search || result !== undefined){
            this.launches = await this.launchesRepository.searchLaunch(page, rowsLimit, search, result);
            this.totalDocs = await this.launchesRepository.countOfSearch(search, result);
        } else {
            this.launches = await this.launchesRepository.getAll(page, rowsLimit);
            this.totalDocs = await this.launchesRepository.countRows();
        }       
        

        const { totalPages, hasNext,  hasPrev } = this.pagesDetails(this.totalDocs, rowsLimit, page);

        return new DTOResponseLaunchesUseCase(
            this.launches,
            this.totalDocs,
            page,
            totalPages,
            hasNext,
            hasPrev,
        );
    }

    pagesDetails(totalDocs, rowsLimit, page){
        const totalPages = totalDocs / rowsLimit;
        const hasNext = page * rowsLimit < totalDocs;
        const hasPrev = page * rowsLimit > rowsLimit;

        return {
            totalPages,
            hasNext,
            hasPrev
        }
    }
}

export {
    LaunchesUseCase,
    DTORequestLaunchesUseCase,
    DTOResponseLaunchesUseCase
}