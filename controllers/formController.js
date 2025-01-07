import { insertMessage } from "../db/queries.js";

export const handleSubmit = async (req, res) => {
  const { messageText, messageUser } = req.body;

  if (!messageText.trim().length || !messageUser.trim().length)
    return res.redirect("/");

  await insertMessage(messageText, messageUser);
  res.redirect("/");
};
