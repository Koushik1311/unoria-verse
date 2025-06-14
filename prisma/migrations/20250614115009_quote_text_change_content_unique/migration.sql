/*
  Warnings:

  - You are about to drop the column `text` on the `Quote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[content]` on the table `Quote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "text",
ADD COLUMN     "content" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Quote_content_key" ON "Quote"("content");
