import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/videoController";
import { postCommentAdd } from "../controllers/userController";

const apiRouter = express.Router();

apiRouter.post(routes.commentAdd, postCommentAdd);
apiRouter.post(routes.registerView, postRegisterView);

export default apiRouter;
