import { getAllMessages as _getAllMessages } from "../db/queries.js";

export const getAllMessages = async (req, res) => {
  const messages = await _getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages });
};
