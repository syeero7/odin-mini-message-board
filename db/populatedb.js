import pg from "pg";
const { Client } = pg;

const databaseURL = process.env.DATABASE_URL;

const isFirstScriptExecution = async (client) => {
  const query = `SELECT NOT EXISTS (
    SELECT 1 
    FROM pg_tables 
    WHERE schemaname = 'public' AND tablename = 'messages'
    ) AS table_not_exists;`;

  const { rows } = await client.query(query);
  return rows[0].table_not_exists;
};

const SQL = `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    username TEXT,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  
  INSERT INTO messages (text, username) 
  VALUES ('Hi there!', 'jane'), ('Hello World!', 'sam');
  `;

const main = async () => {
  const client = new Client({ connectionString: databaseURL });
  await client.connect();
  if (await isFirstScriptExecution(client)) {
    await client.query(SQL);
    console.log("database has been populated");
  }
  await client.end();
};

main();
