import { messages } from "../db.js";

export const handleSubmit = async (req, res) => {
  const { messageText, messageUser } = req.body;

  if (!messageText.trim().length || !messageUser.trim().length)
    return res.redirect("/");

  const id = messages[messages.length - 1]?.id + 1;

  messages.push({
    id,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
};
