import express from "express";
import routes from "../routes"
import { getUpload, video_detail, edit_video, del_video, videos, postUpload } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";


const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload,uploadVideo ,postUpload)

videoRouter.get(routes.home, videos);
videoRouter.get(routes.videoDetail(), video_detail);
videoRouter.get(routes.editVideo, edit_video);
videoRouter.get(routes.delVideo, del_video);

export default videoRouter;