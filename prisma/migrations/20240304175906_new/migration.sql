/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Membro` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Membro` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Membro_name_key" ON "Membro"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Membro_email_key" ON "Membro"("email");
