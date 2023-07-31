import { DatabaseUpdate } from '../DatabaseUpdate/DatabaseUpdate';
import { PrismaFailuresRepository } from '@/entities/prismaRepositories/prismaFailuresRepository';
import { PrismaLaunchesRepository } from '@/entities/prismaRepositories/prismaLaunchesRepository';
import { PrismaPayloadsRepository } from '@/entities/prismaRepositories/prismaPayloadsRepository';
import { PrismaRocketsRepository } from '@/entities/prismaRepositories/prismaRocketsRepository';
import { apiSpace } from '../api';

const prismaFailuresRepository =  new PrismaFailuresRepository;
const prismaLaunchesRepository =  new PrismaLaunchesRepository;
const prismaPayloadsRepository =  new PrismaPayloadsRepository;
const prismaRocketsRepository =  new PrismaRocketsRepository;

export const databaseUpdate = new DatabaseUpdate(
    prismaLaunchesRepository,
    prismaRocketsRepository,
    prismaPayloadsRepository,
    prismaFailuresRepository, 
    apiSpace
);