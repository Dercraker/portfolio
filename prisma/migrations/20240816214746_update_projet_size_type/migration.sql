/*
  Warnings:

  - Changed the type of `size` on the `Project` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProjectSize" AS ENUM ('small', 'medium', 'large');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "size",
ADD COLUMN     "size" "ProjectSize" NOT NULL;
