import express from "express"
import routes from "../routes"
import {user_details, edit_profile, change_password, users } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, edit_profile);
userRouter.get(routes.userDetail(), user_details);
userRouter.get(routes.changePassword, change_password);

export default userRouter