-- CreateTable
CREATE TABLE "Db.messages" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Db.messages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Db.messages" ADD CONSTRAINT "Db.messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Db.users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
