# Migration `20200815113540-add-user-model`

This migration has been generated at 8/15/2020, 11:35:40 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "User" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"name" TEXT NOT NULL,
"email" TEXT NOT NULL,
"password" TEXT NOT NULL)

ALTER TABLE "Link" ADD COLUMN "postedById" INTEGER ;

CREATE UNIQUE INDEX "User.email" ON "User"("email")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200729230139-init..20200815113540-add-user-model
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // Data source : tell to prisma witch of DB connection we will use
 //
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 //
 //  Generator : some generation config
@@ -16,9 +16,19 @@
 //
 //  Data model : definition of some models
 //
 model Link {
-  id          Int      @id @default(autoincrement())
-  createdAt   DateTime @default(now())
-  description String
-  url         String
+  id            Int      @id @default(autoincrement())
+  createdAt     DateTime @default(now())
+  description   String
+  url           String
+  postedBy      User?   @relation(fields: [postedById], references: [id])
+  postedById    Int?
 }
+
+model User {
+    id          Int        @id @default(autoincrement())
+    name        String
+    email       String     @unique
+    password    String
+    links       Link[]
+}
```


