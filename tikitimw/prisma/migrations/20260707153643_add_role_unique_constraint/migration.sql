/*
  Warnings:

  - A unique constraint covering the columns `[organizationId,type]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Role_organizationId_type_key" ON "Role"("organizationId", "type");
