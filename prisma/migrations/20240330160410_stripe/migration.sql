-- AlterTable
ALTER TABLE "User" ADD COLUMN     "planActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "planExpires" TIMESTAMP(3),
ADD COLUMN     "stripeCustomerId" TEXT,
ADD COLUMN     "subscriptionId" TEXT,
ADD COLUMN     "totalDownloads" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Download" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "downloadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Download_pkey" PRIMARY KEY ("id")
);
