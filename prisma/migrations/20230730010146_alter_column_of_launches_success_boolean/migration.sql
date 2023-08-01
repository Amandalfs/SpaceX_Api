/*
  Warnings:

  - Changed the type of `success` on the `launches` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "launches" DROP COLUMN "success",
ADD COLUMN     "success" BOOLEAN NOT NULL;
