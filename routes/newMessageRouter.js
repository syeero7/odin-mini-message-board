import { Router } from "express";
import { handleSubmit } from "../controllers/formController.js";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.render("form"));
newMessageRouter.post("/", handleSubmit);

export default newMessageRouter;
