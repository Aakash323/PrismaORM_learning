/*
  Warnings:

  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `pname` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_userId_fkey";

-- AlterTable
CREATE SEQUENCE "public".product_pid_seq;
ALTER TABLE "public"."Product" DROP COLUMN "userId",
ADD COLUMN     "pname" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ALTER COLUMN "pid" SET DEFAULT nextval('"public".product_pid_seq');
ALTER SEQUENCE "public".product_pid_seq OWNED BY "public"."Product"."pid";

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."Review" (
    "rid" SERIAL NOT NULL,
    "review_u_id" INTEGER NOT NULL,
    "review_p_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("rid")
);

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_review_u_id_fkey" FOREIGN KEY ("review_u_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_review_p_id_fkey" FOREIGN KEY ("review_p_id") REFERENCES "public"."Product"("pid") ON DELETE CASCADE ON UPDATE CASCADE;
