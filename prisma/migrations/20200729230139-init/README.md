# Migration `20200729230139-init`

This migration has been generated at 7/29/2020, 11:01:39 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Link" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
"description" TEXT NOT NULL,
"url" TEXT NOT NULL)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200729230139-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+//
+// Data source : tell to prisma witch of DB connection we will use
+//
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+//
+//  Generator : some generation config
+//
+generator client {
+  provider = "prisma-client-js"
+}
+
+//
+//  Data model : definition of some models
+//
+model Link {
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  description String
+  url         String
+}
```


