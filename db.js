/* eslint-disable no-undef */
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
//process.env.MONGO_URL
mongoose.connect(process.env.MONGO_ATLAS_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connected to DB");
const handleError = (error) =>
  console.log(`❌ error on DB connection ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
