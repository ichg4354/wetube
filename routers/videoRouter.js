import express from "express";
import routes from "../routes"
import { upload, video_detail, edit_video, del_video, videos } from "../controllers/videoController";


const videoRouter = express.Router();

videoRouter.get(routes.home, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, video_detail);
videoRouter.get(routes.editVideo, edit_video);
videoRouter.get(routes.delVideo, del_video);

export default videoRouter;