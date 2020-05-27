import helmet from "helmet";
import express from "express";
import morgan from "morgan";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";

import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localsMiddleware } from "../weTube/middlewares"
const app = express();

app.set('view engine', 'pug');
app.use(bodyparser.text({ extended: true }));
app.use(bodyparser.json());
app.use(cookieparser());
app.use(helmet());
app.use(morgan("dev"));

app.use(localsMiddleware)
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
