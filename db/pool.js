import pg from "pg";
const { Pool } = pg;

const databaseURL = process.env.DATABASE_URL;

const pool = new Pool({ connectionString: databaseURL });

export default pool;
