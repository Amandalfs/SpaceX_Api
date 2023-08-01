import { ILaunchesRepository, ISummary, PizzaStats, arrayStatsByYear } from "../implements/ilaunchesRepository";
import { Launch } from '@prisma/client';
import { prisma } from "../prismaClient";



class PrismaLaunchesRepository implements ILaunchesRepository {
  
  
  async add(data: Launch){
        await prisma.launch.create({data});
    }
    
    async adds(datas: Launch[]) {
        await datas.map( async (data)=>{
            await prisma.launch.upsert({
                where: { id: data.id }, 
                update: {},
                create: data,
            });
        })
        
    }
    
    async getAll(page, pageSize) {
        const launches = await prisma.launch.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: { rocket: true, Payload: true },
        })
        return launches;
    }

    async countRows(): Promise<number> {
        return prisma.launch.count();
    }
    
    async searchLaunch(page: number, pageSize: number, search: string, result: boolean){
        const launches = await prisma.launch.findMany({
            where: {
              success: result,
              OR: [
                { 
                  name: { 
                    contains: search,
                    mode: 'insensitive'
                  },
                },
                { 
                  rocket: { 
                    name: { 
                      contains: search,
                      mode: 'insensitive'
                    } 
                  },
                },
                { 
                  Payload: { 
                    some: { 
                      name: { 
                        contains: search,
                        mode: 'insensitive'
                      } 
                    },
                  },
                },
              ]
            },
            take: pageSize,
            skip: (page - 1) * pageSize,
            include: { rocket: true, Payload: true },
          })
        return launches;
    }

    async countOfSearch(search?: string, result?: boolean): Promise<number> {
        const launches = await prisma.launch.count({
            where: {
                success: result,
                OR: [
                    { name: { contains: search, mode: "insensitive" } },
                    { rocket: { name: { contains: search, mode: "insensitive" } } },
                    { Payload: { some: { name: { contains: search, mode: "insensitive" } } } },
                  ],
            }
        })
        return launches;
    }

    async statsOfPizza(): Promise<PizzaStats[]> {
      const reusedLaunches = await prisma.$queryRaw<PizzaStats[]>`
        SELECT
      r.name AS "rocket name",
      l.reused AS "used",
      COUNT(*) AS "count"
    FROM
      launches l
      JOIN rockets r ON l.rocket_id = r.id
    WHERE
      l.reused = true
    GROUP BY
      r.name,
      l.reused
      `

      const notReusedLaunches = await prisma.$queryRaw<PizzaStats[]>`
        SELECT
      r.name AS "rocket name",
      l.reused AS "used",
      COUNT(*) AS "count"
    FROM
      launches l
      JOIN rockets r ON l.rocket_id = r.id
    WHERE
      l.reused = false
    GROUP BY
      r.name,
      l.reused
      `
      
      const formattedResult = reusedLaunches.map(item => ({
        name: item["rocket name"],
        used: item.used,
        count: Number(item.count),
      }));

      const formattedResultNotReused = notReusedLaunches.map(item => ({
        name: item["rocket name"],
        used: item.used,
        count: Number(item.count),
      }));

      const statsPizza: PizzaStats[] = [...formattedResult, ...formattedResultNotReused]

      return statsPizza;
    }

    async sumaryStats(): Promise<ISummary> {
      const success = await prisma.launch.count({
        where: {
            success: true, 
        }
      })

      const failures = await prisma.launch.count({
        where: {
            success: false, 
        }
      })

      return {
        success, 
        failures
      }
    }

    async getLaunchStatsByYearAndRocket() {
      const statsByYearAndRocket = await prisma.$queryRaw<arrayStatsByYear[]>`
        SELECT
          r.name as "rocketName",
          r.id as "rocketId",
          EXTRACT(YEAR FROM l.date_utc) as "year",
          l.reused,
          COUNT(*) as "count"
        FROM
          launches l
          JOIN rockets r ON l.rocket_id = r.id
        GROUP BY
          r.name,
          r.id,
          EXTRACT(YEAR FROM l.date_utc),
          l.reused
        ORDER BY
         "year" ASC
      `;
    
      const statsByYears = statsByYearAndRocket.map((launch)=>{
        return {
          ...launch,
          count: Number(launch.count)
        }
      })


      function groupByRocketAndReuse(stats) {
        const result = {};
      
        stats.forEach(stat => {
          const key = `${stat.rocketName}_${stat.reused}`;
      
          if (!result[key]) {
            result[key] = [];
          }
      
          result[key].push(stat);
        });
      
        return result;
      }
      
      const groupedStats = groupByRocketAndReuse(statsByYears);

      return groupedStats;
    }
    

}

export {
    PrismaLaunchesRepository,
}