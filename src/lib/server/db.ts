import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "./schema";

import Database from "better-sqlite3";

const sqlite = new Database(process.env.DATABASE_URL as string);

export const db = drizzle({ client: sqlite, schema });
