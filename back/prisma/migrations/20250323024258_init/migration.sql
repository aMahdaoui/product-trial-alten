-- CreateEnum
CREATE TYPE "InventoryStatus" AS ENUM ('INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "shellId" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "internalReference" TEXT NOT NULL,
    "inventoryStatus" "InventoryStatus" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_internalReference_key" ON "Product"("id", "internalReference");
