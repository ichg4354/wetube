import express from "express"
import passport from 'passport'
import routes from "../routes"
import { home, search, getJoin, postJoin, getLogin, logout, postLogin, postGithubLogin, getMe, postFacebookLogin, postKakaoLogin } from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic ,getJoin)
globalRouter.post(routes.join, onlyPublic ,postJoin, postLogin)

globalRouter.get(routes.login, onlyPublic ,getLogin)
globalRouter.post(routes.login, onlyPublic ,postLogin)

globalRouter.get(routes.search, search)
globalRouter.get(routes.home, home)
globalRouter.get(routes.logout,onlyPrivate ,logout)

globalRouter.get(routes.gitHubLogin, passport.authenticate('github'))
globalRouter.get(routes.gitHubCallback, passport.authenticate('github', { failureRedirect: "/login" }), postGithubLogin)

globalRouter.get(routes.facebookLogin, passport.authenticate('facebook'))
globalRouter.get(routes.faebookCallback, passport.authenticate('facebook', { failureRedirect: "/login" }), postFacebookLogin)

globalRouter.get(routes.kakaoLogin, passport.authenticate('kakao'))
globalRouter.get(routes.kakaoCallback, passport.authenticate('kakao', { failureRedirect: "/home" },),postKakaoLogin)


globalRouter.get(routes.me, getMe)

export default globalRouter;
