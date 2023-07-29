-- CreateTable
CREATE TABLE "launches" (
    "id" TEXT NOT NULL,
    "success" TEXT NOT NULL,
    "flight_number" INTEGER NOT NULL,
    "date_utc" TIMESTAMP(3) NOT NULL,
    "webcast" TEXT NOT NULL,
    "reused" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "rocket_id" TEXT NOT NULL,

    CONSTRAINT "launches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rockets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "rockets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payloads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "launchId" TEXT NOT NULL,

    CONSTRAINT "payloads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Failure" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "launchId" TEXT NOT NULL,

    CONSTRAINT "Failure_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "launches" ADD CONSTRAINT "launches_rocket_id_fkey" FOREIGN KEY ("rocket_id") REFERENCES "rockets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payloads" ADD CONSTRAINT "payloads_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "launches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Failure" ADD CONSTRAINT "Failure_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "launches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
