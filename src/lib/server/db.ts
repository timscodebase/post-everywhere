import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

const url = process.env.DATABASE_URL || "file:local.db";

const client = createClient({ url });

export const db = drizzle(client, { schema });
export type DbClient = typeof db;
