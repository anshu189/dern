import 'dotenv/config';

export default {
    out: "./drizzle",
    schema: "./utils/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    },
}