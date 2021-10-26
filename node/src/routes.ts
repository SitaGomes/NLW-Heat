import {Router} from "express";
import { AuthenticateUserController } from "./controller/authenticateUserController";
import { CreateMessageController } from "./controller/createMessageController";
import { GetLast3MessagesController } from "./controller/getLast3MessagesController";
import { ProfileUserController } from "./controller/profileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle) //? req and res are already passed

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle) //? req and res are already passed

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export {router}
