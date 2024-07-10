import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv';


export default defineConfig({
 schema: "./db/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://postgres:1Sandiego3@localhost:5432/postgres" || '',
  },
  verbose: true,
  strict: true,
})