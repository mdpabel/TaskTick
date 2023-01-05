/*
  Warnings:

  - You are about to drop the column `due` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `deadline` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "due";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "deadline",
ADD COLUMN     "endAt" TIMESTAMP(3),
ADD COLUMN     "startAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
