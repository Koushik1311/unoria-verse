-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emotionId" CHAR(25),
    "authorId" CHAR(25),

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emotion" (
    "id" CHAR(25) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Emotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" CHAR(25) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Quote_emotionId_idx" ON "Quote"("emotionId");

-- CreateIndex
CREATE INDEX "Quote_authorId_idx" ON "Quote"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Emotion_name_key" ON "Emotion"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Author_name_key" ON "Author"("name");

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_emotionId_fkey" FOREIGN KEY ("emotionId") REFERENCES "Emotion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;
