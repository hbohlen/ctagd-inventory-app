import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv';

// Ensure that the environment variable is loaded
const connectionString =
  'postgresql://postgres:1Sandiego3@localhost:5432/postgres';

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);

export default db;
