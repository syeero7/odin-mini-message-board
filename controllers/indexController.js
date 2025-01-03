import { messages } from "../db.js";

export const getAllMessages = async (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
};
