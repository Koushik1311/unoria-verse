-- CreateEnum
CREATE TYPE "Mood" AS ENUM ('happy', 'sad', 'angry', 'anxious', 'peaceful', 'confused', 'inspired', 'lonely', 'motivated');

-- CreateEnum
CREATE TYPE "Tone" AS ENUM ('reflective', 'uplifting', 'calming', 'empowering', 'playful', 'comforting', 'melancholic', 'romantic', 'neutral', 'spiritual', 'energetic');

-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "mood" "Mood" NOT NULL,
    "tone" "Tone" NOT NULL,
    "authorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isCustom" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Quote_mood_tone_idx" ON "Quote"("mood", "tone");

-- CreateIndex
CREATE UNIQUE INDEX "Author_name_key" ON "Author"("name");

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;
