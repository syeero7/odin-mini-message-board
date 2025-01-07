import pg from "pg";
const { Client } = pg;

const databaseURL = process.env.DATABASE_URL;

console.log(typeof databaseURL);

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
  console.log("seeding...");

  const client = new Client({ connectionString: databaseURL });
  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("done");
};

main();
