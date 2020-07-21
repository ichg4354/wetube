import app from "../weTube/app.js";
import "./db";
import dotenv from "dotenv";

dotenv.config();
import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORTS = process.env.PORTS || 4000;

const appListener = () =>
  console.log(`✅ listening to: http://localhost:${PORTS}`);
app.listen(PORTS, appListener);
