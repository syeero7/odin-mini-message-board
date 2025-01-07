import fs from "fs";
import pg from "pg";
const { Client } = pg;

const databaseURL = process.env.DATABASE_URL;

const SQL = `CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username TEXT,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username) 
VALUES ('Hi there!', 'jane'), ('Hello World!', 'sam');
`;

const flagFilePath = "./scriptExecutedFlag.txt";

const main = async () => {
  if (fs.existsSync(flagFilePath)) {
    console.log("The script has already executed once and will not run again.");
    return;
  }

  console.log("seeding...");

  const client = new Client({ connectionString: databaseURL });
  await client.connect();
  await client.query(SQL);
  await client.end();

  fs.writeFileSync(flagFilePath, "Script has executed once.");
  console.log("done");
};

main();
