import helmet from "helmet";
import express from "express";
import morgan from "morgan";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import passport from "passport"
import './passport'
import session from "express-session"
import dotenv from "dotenv"

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localsMiddleware } from "../weTube/middlewares"

dotenv.config()
const app = express();

app.set('view engine', 'pug');
app.use('/uploads',express.static('uploads'))
app.use('/static',express.static('static'))
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieparser());
app.use(helmet());
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized:false

}))
app.use(passport.initialize())
app.use(passport.session())

app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
