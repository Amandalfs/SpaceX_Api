import { DTOResponseLaunchesUseCase } from '@/domain/useCases/launches/LaunchesUseCase';
import { HttpResponse } from '../protocols/http';
import { DTOResponseStatsPizzaLauncheUseCase } from '@/domain/useCases/launches/statsPizzaLauncheUseCase';
import { DTOResponseStatsByYearsLaunchesUseCase } from '@/domain/useCases/launches/statsByYearsLaunchesUseCase';

interface Message  {
    message: string
}

type Responses = DTOResponseLaunchesUseCase | Message | DTOResponseStatsPizzaLauncheUseCase | DTOResponseStatsByYearsLaunchesUseCase;

export const ServerError = (): HttpResponse => {
    return {
        statusCode: 500,
        body: {
            message: "Server Internal Error"
        }
    }
}


export const BadRequest = (params: Responses): HttpResponse => {
    return {
        statusCode: 400,
        body: {
            ...params
        }
    }
}

export const Unauthorized = (params: Responses): HttpResponse => {
    return {
        statusCode: 401,
        body: {
            ...params
        }
    }
}

export const NotFound = (params: Responses): HttpResponse =>{
    return {
        statusCode: 404,
        body: {
            ...params
        }
    }
}


export const Created = (params: Responses): HttpResponse => {
    return {
        statusCode: 201,
        body: {
            ...params
        }
    }
}

export const Success = (params: Responses): HttpResponse => {
    return {
        statusCode: 200,
        body: {
            ...params
        }
    }
}