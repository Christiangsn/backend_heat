-- CreateTable
CREATE TABLE "Db.users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "github_id" INTEGER NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "login" TEXT NOT NULL,

    CONSTRAINT "Db.users_pkey" PRIMARY KEY ("id")
);
