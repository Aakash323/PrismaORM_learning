/*
  Warnings:

  - Added the required column `rev` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Review" ADD COLUMN     "rev" TEXT NOT NULL;
