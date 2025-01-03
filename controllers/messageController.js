import { messages } from "../db.js";

export const getMessageById = async (req, res) => {
  const id = parseInt(req.params.messageId);

  const message = messages.find((message) => message.id === id);

  res.render("message", { message });
};
