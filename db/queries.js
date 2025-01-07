import pool from "./pool.js";

export const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

export const insertMessage = async (text, user) => {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
    text,
    user,
  ]);
};

export const getMessageById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
};
