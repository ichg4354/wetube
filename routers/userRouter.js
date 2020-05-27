import express from "express"
import routes from "../routes"
import { home, user_details, edit_profile, change_password, users } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.userDetail, user_details);
userRouter.get(routes.changePassword, change_password);
userRouter.get(routes.editProfile, edit_profile);

export default userRouter