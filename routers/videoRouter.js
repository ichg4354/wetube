import express from "express";
import routes from "../routes"
import { getUpload, videoDetail, getEditVideo, delVideo, videos, postUpload, postEditVideo } from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";


const videoRouter = express.Router();


videoRouter.get(routes.upload, onlyPrivate,getUpload);
videoRouter.post(routes.upload,onlyPrivate,uploadVideo ,postUpload)

videoRouter.get(routes.editVideo(), onlyPrivate,getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate,postEditVideo);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.delVideo(), onlyPrivate,delVideo);
videoRouter.get(routes.home, videos);

export default videoRouter;