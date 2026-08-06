import { Router } from "express";
import { authUser } from "../middleware/auth.middleware.js";
import { getUserChats, createOrUpdateChat, deleteChat, } from "../controller/chat.controller.js";
const chatRouter = Router();
chatRouter.use(authUser);
chatRouter.get("/", getUserChats);
chatRouter.post("/", createOrUpdateChat);
chatRouter.delete("/:id", deleteChat);
export default chatRouter;
//# sourceMappingURL=chat.routes.js.map