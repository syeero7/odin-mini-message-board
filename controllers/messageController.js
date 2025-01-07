import { getMessageById as _getMessageById } from "../db/queries.js";

export const getMessageById = async (req, res) => {
  const message = await _getMessageById(req.params.messageId);

  res.render("message", { message });
};
